import { Server } from "socket.io";
import { disconnect } from "./disconnect.socket.js";
import { documentChange } from "./editor.socket.js";
import { joinRoom } from "./room.socket.js";
import { typingStart, typingStop } from "./typing.socket.js";

let io;

export function initializeSocket(server) {
	io = new Server(server, {
		cors: {
			origin: process.env.CLIENT_URL,
			credentials: true,
		},
	});

	io.on("connection", (socket) => {
		console.log(`Connected: ${socket.id}`);

		socket.on("join-room", (data) => {
			joinRoom(io, socket, data);
		});

		socket.on("document-change", (data) => {
			documentChange(io, socket, data);
		});

		socket.on("typing-start", (data) => {
			typingStart(io, socket, data);
		});

		socket.on("typing-stop", (data) => {
			typingStop(io, socket, data);
		});

		socket.on("disconnect", () => {
			disconnect(io, socket);
		});
	});
}

export function getIO() {
	return io;
}
