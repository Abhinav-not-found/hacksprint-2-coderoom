const Sidebar = ({ participants, typingUsers }) => {
  return (
    <div className='w-64 border-r border-gray-700 p-4'>
      <h2 className='text-lg font-semibold mb-4'>Participants</h2>

      <div className='space-y-2'>
        {participants.map((p) => (
          <div
            key={p.name}
            className='flex items-center gap-2 rounded-md bg-[#2d2d2d] px-3 py-2'
          >
            <div className='h-2 w-2 rounded-full bg-green-500' />
            <span className='flex-1'>{p.name}</span>
            {p.isHost && (
              <span className='rounded-full bg-blue-500/15 px-2 py-0.5 text-xs font-medium text-blue-300'>
                Host
              </span>
            )}
          </div>
        ))}
      </div>

      {typingUsers.length > 0 && (
        <div className='mt-4 text-sm text-gray-400 space-y-1'>
          {typingUsers.map((u) => (
            <p key={u}>{u} is typing...</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Sidebar
