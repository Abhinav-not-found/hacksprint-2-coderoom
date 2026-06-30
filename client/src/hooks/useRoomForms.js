import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { createRoom, joinRoom } from "../services/roomService";

export const useRoomForms = () => {
	const navigate = useNavigate();

	const [createForm, setCreateForm] = useState({
		host: "",
		roomName: "",
	});

	const [joinForm, setJoinForm] = useState({
		roomCode: "",
		name: "",
	});

	const handleCreateChange = (e) => {
		setCreateForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleJoinChange = (e) => {
		setJoinForm((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleCreateRoom = async () => {
		try {
			const { data } = await createRoom(createForm);

			if (data.success) {
				navigate(`/room/${data.room.roomCode}`, {
					state: { name: createForm.host },
				});
			}
		} catch (err) {
			toast.error(err.response?.data?.message || "Failed to create room");
		}
	};

	const handleJoinRoom = async () => {
		try {
			const { data } = await joinRoom(joinForm);

			if (data.success) {
				navigate(`/room/${data.room.roomCode}`, {
					state: { name: joinForm.name },
				});
			}
		} catch (err) {
			toast.error(err.response?.data?.message || "Failed to join room");
		}
	};

	return {
		createForm,
		joinForm,
		handleCreateChange,
		handleJoinChange,
		handleCreateRoom,
		handleJoinRoom,
	};
};
