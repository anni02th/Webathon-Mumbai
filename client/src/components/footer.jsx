import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-Dblue p-8 relative w-full m-auto flex flex-col lg:flex-row items-center justify-evenly max-sm:p-2'>
      <div className='lg:w-[40%] p-4 text-left'>
        <h1 className='text-3xl lg:text-6xl font-semibold mb-4 lg:mb-8 text-[#fafafa]'>K. K. Wagh Engineering College</h1>
        <p className='text-base lg:text-xl text-[#fafafa]'>
          Empowering students with cutting-edge engineering education and research opportunities.
        </p>
      </div>
      <div className='w-full lg:w-[50%] flex flex-col lg:flex-row gap-8 p-4 lg:p-8'>
        <div className='flex flex-col gap-6 sm:flex-row w-full justify-between'>
          <div className='flex flex-col gap-2 lg:gap-4 text-base lg:text-xl'>
            <h2 className='text-lg lg:text-2xl font-semibold lg:mb-4 text-[#fafafa]'>Quick Links</h2>
            <Link to='/' className='text-gray-400 hover:text-white'>Home</Link>
            <Link to='/contact' className='text-gray-400 hover:text-white'>Contact Us</Link>
          </div>
          <div className='flex flex-col gap-2 lg:gap-4 text-base lg:text-xl'>
            <h2 className='text-lg lg:text-2xl font-semibold lg:mb-4 text-[#fafafa]'>Pages</h2>
            <Link to='/departments' className='text-gray-400 hover:text-white'>Departments</Link>
            <Link to='/facutlypage' className='text-gray-400 hover:text-white'>Faculty</Link>
            <Link to='/admin' className='text-gray-400 hover:text-white'>Admin</Link>
          </div>
          <div className='flex flex-col gap-2 lg:gap-4 text-base lg:text-xl'>
            <h2 className='text-lg lg:text-2xl font-semibold lg:mb-4 text-[#fafafa]'>Follow Us</h2>
            <a href='https://facebook.com' className='text-gray-400 hover:text-white'>Facebook</a>
            <a href='https://instagram.com' className='text-gray-400 hover:text-white'>Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
