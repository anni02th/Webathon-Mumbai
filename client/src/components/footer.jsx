import React from 'react';

const Footer = () => {
  return (
    <div className='bg-Dblue p-8 relative w-full m-auto flex flex-col lg:flex-row items-center justify-evenly max-sm:p-2'>
      <div className='lg:w-[40%] p-4 text-left'>
        <h1 className='text-3xl lg:text-6xl font-semibold mb-4 lg:mb-8 text-[#fafafa]'>K. K. Wagh</h1>
        <p className='text-base lg:text-xl text-[#fafafa]'>Lorem ipsum dolor sit amet, consectetur adipisci elit. Donec ultricies mi in ipsum vehicula lacinia. Iner porttitor ac libero.</p>
      </div>
      <div className='w-full lg:w-[50%] flex flex-col lg:flex-row gap-8 p-4 lg:p-8'>
        <div className='flex flex-col gap-6 sm:flex-row w-full justify-between'>
          <div className='flex flex-col gap-2 lg:gap-4 text-base lg:text-xl'>
            <h2 className='text-lg lg:text-2xl font-semibold lg:mb-4 text-[#fafafa]'>Quick Links</h2>
            <a href='/' className='text-[#fafafa]'>Home</a>
            <a href='/contact' className='text-[#fafafa]'>Contact Us</a>
          </div>
          <div className='flex flex-col gap-2 lg:gap-4 text-base lg:text-xl'>
            <h2 className='text-lg lg:text-2xl font-semibold lg:mb-4 text-[#fafafa]'>Pages</h2>
            <a href='/departments' className='text-[#fafafa]'>Departments</a>
            <a href='/facutlypage' className='text-[#fafafa]'>Faculty</a>
            <a href='/admin' className='text-[#fafafa]'>Admin</a>
          </div>
          <div className='flex flex-col gap-2 lg:gap-4 text-base lg:text-xl'>
            <h2 className='text-lg lg:text-2xl font-semibold lg:mb-4 text-[#fafafa]'>Follow Us</h2>
            <a href='#' className='text-[#fafafa]'>Facebook</a>
            <a href='#' className='text-[#fafafa]'>Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
