import { useRoomForms } from "../hooks/useRoomForms"

const Input = (props) => (
  <input
    {...props}
    className='w-full px-3 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500'
  />
)

const Card = ({ title, children }) => (
  <div className='w-full max-w-md bg-gray-950 border border-gray-800 rounded-xl p-5 shadow-lg'>
    <h2 className='text-lg font-semibold text-white mb-4'>{title}</h2>
    {children}
  </div>
)

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className='w-full mt-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition'
  >
    {children}
  </button>
)

const Home = () => {
  const {
    createForm,
    joinForm,
    handleCreateChange,
    handleJoinChange,
    handleCreateRoom,
    handleJoinRoom,
  } = useRoomForms()

  return (
    <div className='min-h-screen flex items-center justify-center bg-black px-4'>
      <div className='grid gap-6 md:grid-cols-2 w-full max-w-3xl'>
        {/* Create Room */}
        <Card title='Create Room'>
          <Input
            name='host'
            value={createForm.host}
            onChange={handleCreateChange}
            placeholder='Host name'
          />
          <div className='h-3' />
          <Input
            name='roomName'
            value={createForm.roomName}
            onChange={handleCreateChange}
            placeholder='Room name'
          />
          <Button onClick={handleCreateRoom}>Create</Button>
        </Card>

        {/* Join Room */}
        <Card title='Join Room'>
          <Input
            name='roomCode'
            value={joinForm.roomCode}
            onChange={handleJoinChange}
            placeholder='Room code'
          />
          <div className='h-3' />
          <Input
            name='name'
            value={joinForm.name}
            onChange={handleJoinChange}
            placeholder='Your name'
          />
          <Button onClick={handleJoinRoom}>Join</Button>
        </Card>
      </div>
    </div>
  )
}

export default Home
