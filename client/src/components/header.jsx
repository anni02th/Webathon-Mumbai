import React from 'react';
import { Link } from 'react-router-dom';
import '../main.css';

const Header = () => {


  return (
    <div className='flex justify-between p-4 relative z-1000 top-0'>
      <div className='text-Dblue font-medium flex gap-4'>
         <a href="#Home">Home</a>
         <a href="#Aboutus">About Us</a>
      </div>
      <div>
         <a href="#">
            <h1 className='text-2xl font-bold'>Univerz University</h1>
         </a>
      </div>
      <div className='text-black flex gap-4'>
         {/* <select name="login" >
            <option value="none">Login</option>
            <option value="as-Admin">as Admin</option>
            <option value="as-Faculty">as Faculty</option>
            <option value="as-Student">as Student</option>
            <option value="as-Alumni">as Alumni</option>
         </select> */}
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