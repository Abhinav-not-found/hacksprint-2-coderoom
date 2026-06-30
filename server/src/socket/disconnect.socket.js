import Room from "../models/room.model.js";
import documentCache, { saveTimers } from "./document-cache.js";

export async function disconnect(io, socket) {
	try {
		const room = await Room.findOneAndUpdate(
			{ "participants.socketId": socket.id },
			{ $pull: { participants: { socketId: socket.id } } },
			{ new: true },
		);
		if (!room) return;

		setTimeout(async () => {
			const updatedRoom = await Room.findById(room._id);

			if (!updatedRoom) return;

			if (updatedRoom.participants.length === 0) {
				await Room.deleteOne({ _id: room._id });

				documentCache.delete(room.roomCode);
				clearTimeout(saveTimers.get(room.roomCode));
				saveTimers.delete(room.roomCode);
			}
		}, 60000);

		io.to(room.roomCode).emit(
			"participant-list",
			room.participants.map((participant) => ({
				name: participant.name,
				isHost:
					participant.name.toLowerCase() === room.host.toLowerCase(),
			})),
		);

		console.log(`Disconnected: ${socket.id}`);
	} catch (err) {
		console.error(err);
	}
}
