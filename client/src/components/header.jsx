import React from 'react';
import { Link } from 'react-router-dom';
import '../main.css';

const Header = () => {

  return (
    <div className='flex justify-between relative z-1000 top-0'>
      <div className='text-Dblue font-normal text-xl flex gap-1'>
        <Link to="/" className='p-3'><h1 className='text-2xl font-bold'>K. K. Wagh</h1></Link>
        <div className='flex justify-center items-center max-md:hidden'>
        <Link to="/" className='p-3 hover:bg-Lblue transition duration-300'>Home</Link>
        <Link to="/faculty" className='p-3 hover:bg-Lblue transition duration-300'>Faculty</Link>
        <Link to="/departments" className='p-3 hover:bg-Lblue transition duration-300'>Departments</Link>
        <Link to="/resource" className='p-3 hover:bg-Lblue transition duration-300'>Resources</Link>
        </div>
      </div>
      <div className='text-black flex gap-1 p-3'>
        <Link to="/signin?mode=login">
          <button className="bg-Dblue text-white py-1 px-6 rounded-sm mr-4 hover:bg-Dbblue transition duration-200 ">Login</button>
        </Link>
        <Link to="/signin?mode=signup">
          <button className="bg-white text-Dblue py-1 px-6 rounded-sm mr-4 border-solid border-Dblue border-[1px] hover:bg-Dblue hover:text-white transition duration-200 ">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;