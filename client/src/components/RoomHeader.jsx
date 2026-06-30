import { Check, Copy, LogOut } from "lucide-react"
import { useNavigate } from "react-router"
import { useClipboard } from "../hooks/useClipboard"
import socket from "../services/socket"

const RoomHeader = ({ roomCode }) => {
  const { copied, copy } = useClipboard()
  const navigate = useNavigate()

  const handleLeaveRoom = () => {
    if (!roomCode) return

    // notify backend
    socket.emit("leave-room", { roomCode })

    // optional cleanup (depends on your socket setup)
    socket.off("document-change")
    socket.off("typing-start")
    socket.off("typing-stop")

    // optionally disconnect completely (only if you don't reuse socket elsewhere)
    // socket.disconnect()

    // redirect user
    navigate("/")
  }

  return (
    <div className='h-12 border-b border-gray-700 flex items-center justify-between px-4'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex gap-2'>
          <h1 className='font-semibold'>Collaborative Editor</h1>

          <div className='flex items-center gap-2'>
            <p className='text-sm text-gray-400'>Room: {roomCode}</p>

            <button onClick={() => copy(roomCode)} className='transition'>
              {copied ? (
                <Check className='size-4 text-green-500' />
              ) : (
                <Copy className='size-4' />
              )}
            </button>
          </div>
        </div>

        <button
          onClick={handleLeaveRoom}
          className='text-red-400 border px-3 py-0.5 rounded-full cursor-pointer flex items-center gap-2'
        >
          <LogOut className='size-4' />
          Leave
        </button>
      </div>
    </div>
  )
}

export default RoomHeader
