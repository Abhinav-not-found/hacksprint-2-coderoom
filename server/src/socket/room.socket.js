import Room from "../models/room.model.js";
import documentCache from "./document-cache.js";

export async function joinRoom(io, socket, data) {
	try {
		const { roomCode, name } = data;

		if (!roomCode || !name) {
			socket.emit("error", {
				message: "Room code and name are required",
			});
			return;
		}

		const room = await Room.findOne({ roomCode });

		if (!room) {
			socket.emit("error", {
				message: "Room not found",
			});
			return;
		}

		// Join the Socket.io room
		socket.join(roomCode);

		// Update socketId
		const participant = room.participants.find(
			(p) => p.name.toLowerCase() === name.toLowerCase(),
		);

		if (participant) {
			// Existing participant reconnected
			participant.socketId = socket.id;
		} else {
			// Participant was removed (refresh/reconnect)
			room.participants.push({
				name,
				socketId: socket.id,
			});
		}

		await room.save();
		// Broadcast participants
		io.to(roomCode).emit(
			"participant-list",
			room.participants.map((participant) => ({
				name: participant.name,
				isHost:
					participant.name.toLowerCase() === room.host.toLowerCase(),
			})),
		);

		const latestDocument = documentCache.get(roomCode) ?? room.document;

		// Send document only to this socket
		socket.emit("document-updated", latestDocument);

		console.log(`${name} joined ${roomCode}`);
	} catch (err) {
		console.error(err);

		socket.emit("error", {
			message: "Internal Server Error",
		});
	}
}
