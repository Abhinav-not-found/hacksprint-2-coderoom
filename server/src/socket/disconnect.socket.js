import Room from "../models/room.model.js";
import documentCache, { saveTimers } from "./document-cache.js";

export async function disconnect(io, socket) {
	try {
		const room = await Room.findOne({
			"participants.socketId": socket.id,
		});
		if (!room) return;

		room.participants = room.participants.filter(
			(participant) => participant.socketId !== socket.id,
		);

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

		await room.save();
		io.to(room.roomCode).emit("participant-list", room.participants);

		console.log(`Disconnected: ${socket.id}`);
	} catch (err) {
		console.error(err);
	}
}

