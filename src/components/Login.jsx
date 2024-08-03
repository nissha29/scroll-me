import scrollMe from '../assets/Scrollme.svg'

function Login() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center flex-wrap'>
        <div className='flex justify-center items-center mt-8'>
            <img 
            src={scrollMe}
            className='w-52 h-11'
            />
        </div>
        <div className='text-[45px] font-[650] mt-7 text-[#232323]'>Your extraordinary voyage continues.</div>
        <div className='border-[#9f9e9e] mx-96 border-[1.5px] mt-10 w-40 rounded '></div>
        <div className='flex flex-col mt-14 ml-[-10%]'>
            <div className='font-semibold text-[27px] left-0'>Login to your account.</div>
            <div className='flex flex-col mt-5'>
                <div className='text-[18px] ml-2'>Email</div>
                <input type="text" className='mt-1 bg-transparent border-[2px] border-[#c7c7c7] rounded-3xl w-[180%] h-11 outline-none p-5'/>
            </div>
            <div className='flex flex-col mt-5'>
                <div className='text-[18px] ml-2'>Password</div>
                <input type="password" className='mt-1 bg-transparent border-[2px] border-[#c7c7c7] rounded-3xl w-[180%] h-11 outline-none p-5'/>
            </div>
            <button className='bg-[#1c1c1c] w-24 h-12 text-[#fff] rounded-3xl mt-5 text-[18px] font-semibold'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
