import React from 'react';
import { Link } from 'react-router-dom';
import { PiUserCircleFill } from "react-icons/pi";

const HeaderL = () => {
  return (
    <div className='w-[100%] flex font-medium gap-4 items-center justify-between bg-white border-2 border-solid border-b-[#C2C2C2]'>
      <div className='text-Dblue font-normal text-xl flex gap-1'>
        <Link to="/" className='p-3'><h1 className='text-2xl font-bold'>K. K. Wagh</h1></Link>
        <div className='flex justify-center items-center max-md:hidden'>
        <Link to="/" className='p-3 hover:bg-Lblue transition duration-300'>Home</Link>
        <Link to="/faculty" className='p-3 hover:bg-Lblue transition duration-300'>Faculty</Link>
        <Link to="/departments" className='p-3 hover:bg-Lblue transition duration-300'>Departments</Link>
        <Link to="/resource" className='p-3 hover:bg-Lblue transition duration-300'>Resources</Link>
        </div>
      </div>
      
      <Link to="/signin?mode=login" className='flex justify-center items-center gap-2 text-lg mr-12 hover:bg-Dblue 
      hover:text-white px-4 py-[2px] transition duration-200 rounded-sm'>
          <PiUserCircleFill className='size-8'/>
          Logout
      </Link>
    </div>
  )
}

export default HeaderL