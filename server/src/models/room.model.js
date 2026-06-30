import mongoose from "mongoose";

const participantSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		socketId: {
			type: String,
			default: null,
		},
	},
	{ _id: false },
);

const roomSchema = new mongoose.Schema(
	{
		roomCode: {
			type: String,
			unique: true,
			required: true,
		},

		roomName: {
			type: String,
			default: "Untitled Room",
		},

		host: {
			type: String,
			required: true,
		},

		participants: {
			type: [participantSchema],
			default: [],
		},

		document: {
			type: String,
			default: "",
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model("Room", roomSchema);
