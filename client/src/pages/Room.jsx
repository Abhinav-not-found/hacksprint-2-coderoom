import Editor from "@monaco-editor/react"
import { useState } from "react"
import { useLocation, useParams } from "react-router"
import RoomHeader from "../components/RoomHeader"
import Sidebar from "../components/Sidebar"
import { useRoomSocket } from "../hooks/useRoomSocket"

const Room = () => {
  const { roomCode } = useParams()
  const location = useLocation()
  const { name } = location.state || {}

  const [document, setDocument] = useState("")

  const { participants, typingUsers, emitChange } = useRoomSocket({
    roomCode,
    name,
    setDocument,
  })

  const handleEditorChange = (value) => {
    const newValue = value ?? ""
    setDocument(newValue)
    emitChange(document, newValue)
  }

  return (
    <div className='h-screen flex bg-[#1e1e1e] text-white'>
      <Sidebar participants={participants} typingUsers={typingUsers} />

      <div className='flex-1 flex flex-col'>
        <RoomHeader roomCode={roomCode} />

        <div className='flex-1'>
          <Editor
            height='100%'
            language='javascript'
            theme='vs-dark'
            value={document}
            onChange={handleEditorChange}
            options={{
              fontSize: 14,
              fontFamily: "JetBrains Mono, monospace",
              minimap: { enabled: true },
              wordWrap: "on",
              automaticLayout: true,
              scrollBeyondLastLine: false,
              tabSize: 2,
              insertSpaces: true,
              renderWhitespace: "selection",
              cursorBlinking: "blink",
              cursorSmoothCaretAnimation: "on",
              smoothScrolling: true,
              lineNumbers: "on",
              folding: true,
              bracketPairColorization: { enabled: true },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Room
