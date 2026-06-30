const RoomFormBlock = ({ children, onSubmit }) => {
  return (
    <div className='border flex flex-col gap-2 p-2'>
      {children}
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default RoomFormBlock
