import { NavLink } from 'react-router-dom'
import scrollMe from '../assets/Scrollme.svg'

function NavBar() {
  return (
    <div>
      <div className='flex justify-between items-center px-24 py-8'>
        <img 
            src={scrollMe}
            className='w-36 h-9'
        />
        <div className='flex justify-center items-center gap-10 text-[19px] text-[#2b2b2b]'>
            <NavLink to="/" className=''>Home</NavLink>
            <NavLink to="/pricing" >Pricing</NavLink>
            <NavLink to="/users" >Users</NavLink>
            <NavLink to="/login" className='flex justify-center items-center border-[2px] border-black rounded-[1.3rem] bg-[#e4e4e479] w-40 h-12 hover:rounded-md'>Log In</NavLink>
            <NavLink to="/signup" className='flex justify-center items-center rounded-[1.3rem] bg-[#0b0b0b] text-[#fff] w-40 h-12 hover:rounded-md'>Sign Up</NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar
