import React from 'react';
import { Link } from 'react-router-dom';
import { PiUserCircleFill } from "react-icons/pi";

const HeaderL = () => {
  return (
    <div className='flex p-4 font-medium gap-4 items-center justify-between bg-white border-2 border-solid border-b-[#C2C2C2]'>
      <div className=' flex gap-10 ml-20 '>
         <a href="#faculty" className='hover:text-Dblue transform ease-in-out'>Faculty</a>
         <a href="#acadCal" className='hover:text-Dblue transform ease-in-out'>Academic Calender</a>
         <a href="#resources" className='hover:text-Dblue transform ease-in-out'>Resources</a>
         <a href="#studentForm" className='hover:text-Dblue transform ease-in-out'>Student Forum</a>
      </div>
      
      <Link to="/signin?mode=login" className='flex justify-center items-center gap-2 text-lg mr-12 hover:bg-Dblue hover:text-white rounded-xl px-4 py-[2px]'>
          <PiUserCircleFill className='size-8'/>
          Login
      </Link>
    </div>
  )
}

export default HeaderL