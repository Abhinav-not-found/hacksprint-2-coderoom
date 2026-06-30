import { randomUUID } from "crypto";

export default function generateRoomCode() {
	return randomUUID().slice(0, 6).toUpperCase();
}
