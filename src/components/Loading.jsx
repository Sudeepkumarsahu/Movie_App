import loader from '/Iphone-spinner-2.gif';

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-white'>
        <img className='w-[20%] object-cover' src={loader} alt="" />
    </div>
  )
}

export default Loading; 