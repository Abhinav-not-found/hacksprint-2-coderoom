import mongoose from "mongoose";

const participantSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    socketId: {
      type: String,
    },

    isHost: {
      type: Boolean,
      default: false,
    },

    isOnline: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

const roomSchema = new mongoose.Schema(
  {
    roomCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    hostId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    participants: [participantSchema],

    documentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
    },
  },
  {
    timestamps: true,
  }
);

export const Room = mongoose.model("Room", roomSchema);