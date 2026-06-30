import { Check, Copy } from "lucide-react"
import { useClipboard } from "../hooks/useClipboard"

const RoomHeader = ({ roomCode }) => {
  const { copied, copy } = useClipboard()

  return (
    <div className='h-12 border-b border-gray-700 flex items-center justify-between px-4'>
      <div>
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
    </div>
  )
}

export default RoomHeader
