import { X } from "lucide-react";

const CreateRoomModal = ({
  isOpen,
  onClose,
  createForm,
  handleCreateChange,
  handleCreateRoom,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-[#111827] p-6 shadow-2xl">

        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Create Room
            </h2>

            <p className="mt-2 text-gray-400">
              Start collaborating instantly.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-slate-800 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        {/* Username */}

        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-white">
            Username
          </label>

          <input
            type="text"
            name="host"
            value={createForm.host}
            onChange={handleCreateChange}
            placeholder="Enter your username"
            className="w-full rounded-xl border border-slate-700 bg-[#0B1220] px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Room Name */}

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Room Name
          </label>

          <input
            type="text"
            name="roomName"
            value={createForm.roomName}
            onChange={handleCreateChange}
            placeholder="Friday Hackathon"
            className="w-full rounded-xl border border-slate-700 bg-[#0B1220] px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Button */}

        <button
          onClick={handleCreateRoom}
          className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Create Room
        </button>
      </div>
    </div>
  );
};

export default CreateRoomModal;
