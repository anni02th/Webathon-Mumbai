import React from 'react'
import '../main.css'

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
         <select name="login">
            <option value="none">Sign In</option>
            <option value="as-Admin">as Admin</option>
            <option value="as-Faculty">as Faculty</option>
            <option value="as-Student">as Student</option>
            <option value="as-Alumni">as Alumni</option>
         </select>
         {/* <select name="signin" id="">
            <option value="none">Login In</option>
            <option value="as-Admin">as Admin</option>
            <option value="as-Faculty">as Faculty</option>
            <option value="as-Student">as Student</option>
            <option value="as-Alumni">as Alumni</option>
         </select> */}
         <a href="/signin">     
            <button className="bg-Dblue text-white py-1 px-6 rounded-sm mr-4 hover:bg-Dbblue transition duration-200">Sign In</button>
         </a>
      </div>
    </div>
  )
}

export default Header;