import { X } from "lucide-react";

const JoinRoomModal = ({
  isOpen,
  onClose,
  joinForm,
  handleJoinChange,
  handleJoinRoom,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-[#111827] p-6 shadow-2xl">

        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Join Room
            </h2>

            <p className="mt-2 text-gray-400">
              Enter a room code to join your team.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-slate-800 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        {/* Room Code */}

        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-white">
            Room Code
          </label>

          <input
            type="text"
            name="roomCode"
            value={joinForm.roomCode}
            onChange={handleJoinChange}
            placeholder="ABCD1234"
            className="w-full rounded-xl border border-slate-700 bg-[#0B1220] px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Username */}

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Username
          </label>

          <input
            type="text"
            name="name"
            value={joinForm.name}
            onChange={handleJoinChange}
            placeholder="Enter your username"
            className="w-full rounded-xl border border-slate-700 bg-[#0B1220] px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Button */}

        <button
          onClick={handleJoinRoom}
          className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default JoinRoomModal;