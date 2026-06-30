
export function typingStart(io, socket, data) {
	const { roomCode, name } = data;

	socket.to(roomCode).emit("user-typing", {
		name,
	});
}

export function typingStop(io, socket, data) {
	const { roomCode, name } = data;

	socket.to(roomCode).emit("user-stop-typing", {
		name,
	});
}