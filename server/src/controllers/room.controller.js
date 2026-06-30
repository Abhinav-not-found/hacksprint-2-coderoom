import Room from "../models/room.model.js";
import generateRoomCode from "../utils/generateRoomCode.js";

export const createRoom = async (req, res) => {
	try {
		const { host, roomName } = req.body;

		if (!host) {
			return res.status(400).json({
				success: false,
				message: "Host name is required",
			});
		}

		let roomCode;

		while (true) {
			roomCode = generateRoomCode();
			const exists = await Room.findOne({ roomCode });
			if (!exists) break;
		}

		const room = await Room.create({
			roomCode,
			roomName: roomName || "Untitled Room",
			host,
			participants: [
				{
					name: host,
				},
			],
		});

		res.status(201).json({
			success: true,
			room,
		});
	} catch (err) {
		console.error(err);

		res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

export const joinRoom = async (req, res) => {
	try {
		const { roomCode, name } = req.body;

		if (!roomCode || !name) {
			return res.status(400).json({
				success: false,
				message: "Room code and name are required",
			});
		}

		const room = await Room.findOne({ roomCode });

		if (!room) {
			return res.status(404).json({
				success: false,
				message: "Room not found",
			});
		}

		const participantExists = room.participants.some(
			(participant) => participant.name.toLowerCase() === name.toLowerCase(),
		);

		if (participantExists) {
			return res.status(409).json({
				success: false,
				message: "Name already taken",
			});
		}

		room.participants.push({
			name,
		});
		await room.save();

		return res.json({
			success: true,
			room,
		});
	} catch (err) {
		console.error(err);

		res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};
