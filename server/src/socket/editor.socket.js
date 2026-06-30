import Room from "../models/room.model.js";
import applyDelta from "../utils/applyDelta.js";
import documentCache, { saveTimers } from "./document-cache.js";
import { roomProcessing, roomQueues } from "./room-queue.js";

export async function documentChange(io, socket, data) {
	try {
		const { roomCode, delta } = data;
		if (!roomQueues.has(roomCode)) {
			roomQueues.set(roomCode, []);
		}
		roomQueues.get(roomCode).push({
			io,
			socket,
			roomCode,
			delta,
		});
		if (roomProcessing.get(roomCode)) {
			return;
		}
		roomProcessing.set(roomCode, true);

		try {
			while (roomQueues.get(roomCode).length > 0) {
				const job = roomQueues.get(roomCode).shift();

				try {
					await processDocumentChange(job.io, job.socket, {
						roomCode: job.roomCode,
						delta: job.delta,
					});
				} catch (err) {
					console.error(err);
				}
			}
		} finally {
			roomProcessing.set(roomCode, false);

			if (roomQueues.get(roomCode)?.length === 0) {
				roomQueues.delete(roomCode);
			}
		}
	} catch (err) {
		console.error(err);
	}
}

async function processDocumentChange(io, socket, data) {
	const { roomCode, delta } = data;
	let currentDocument = documentCache.get(roomCode);

	if (currentDocument === undefined) {
		const room = await Room.findOne({ roomCode });
		if (!room) return;

		currentDocument = room.document;
	}

	const updatedDocument = applyDelta(currentDocument, delta);

	// await room.save();
	documentCache.set(roomCode, updatedDocument);
	io.to(roomCode).except(socket.id).emit("document-changed", delta);

	// console.log(room.document);
	clearTimeout(saveTimers.get(roomCode));
	saveTimers.set(
		roomCode,
		setTimeout(async () => {
			const latestDocument = documentCache.get(roomCode);

			await Room.updateOne(
				{ roomCode },
				{
					document: latestDocument,
				},
			);
			saveTimers.delete(roomCode);

			console.log("Saved to MongoDB");
		}, 500),
	);
}