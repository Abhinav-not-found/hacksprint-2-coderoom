import { useEffect, useRef, useState } from "react";
import createDelta from "@/utils/createDelta";
import socket from "../services/socket";
import applyDelta from "../utils/applyDelta";

export const useRoomSocket = ({ roomCode, name, setDocument }) => {
	const [participants, setParticipants] = useState([]);
	const [typingUsers, setTypingUsers] = useState([]);
	const typingTimeoutRef = useRef(null);

	useEffect(() => {
		socket.connect();

		socket.emit("join-room", { roomCode, name });

		socket.on("participant-list", setParticipants);

		socket.on("document-updated", setDocument);

		socket.on("document-changed", (delta) => {
			setDocument((prev) => applyDelta(prev, delta));
		});

		socket.on("user-typing", ({ name }) => {
			setTypingUsers((prev) => (prev.includes(name) ? prev : [...prev, name]));
		});

		socket.on("user-stop-typing", ({ name }) => {
			setTypingUsers((prev) => prev.filter((u) => u !== name));
		});

		return () => {
			socket.off("participant-list");
			socket.off("document-updated");
			socket.off("document-changed");
			socket.off("user-typing");
			socket.off("user-stop-typing");
			socket.disconnect();
		};
	}, [roomCode, name, setDocument]);

	const emitChange = (document, newValue) => {
		const delta = createDelta(document, newValue ?? "");
		if (!delta) return;

		socket.emit("document-change", { roomCode, delta });

		socket.emit("typing-start", { roomCode, name });

		clearTimeout(typingTimeoutRef.current);

		typingTimeoutRef.current = setTimeout(() => {
			socket.emit("typing-stop", { roomCode, name });
		}, 1000);
	};

	return {
		participants,
		typingUsers,
		emitChange,
	};
};
