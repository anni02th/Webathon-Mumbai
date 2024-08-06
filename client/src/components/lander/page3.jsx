import React, { useState } from 'react';

const Page3 = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='relative flex flex-col items-center justify-center text-center my-14'>
      <div className="relative z-10 p-4 flex flex-col text-center">
        <h1 className='text-Dblue text-4xl font-bold'>
          Explore Our Academic Offerings
        </h1>
        <h2 className='text-Dblue text-4xl font-bold'>
          Chart Your Paths To Success
        </h2>
        <p className="text-lg m-6 max-w-xl mx-auto text-balance">
          Discover our diverse academic offerings and chart your path to success. At KK Wagh, your future starts here.
        </p>
      </div>
      
      <div className='relative flex flex-wrap justify-evenly items-center'>
        <div className='h-40 w-80 bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around 
        relative hover:scale-105 transform transition duration-300'>
          <img src="page3-1.png" alt="" className='p-4 w-[100px] h-[100px]' />
          <div className='p-4 flex flex-col text-start'>
            <h1 className='text-3xl text-white font-semibold mb-1'>Computer Engineering</h1>
          </div>
        </div>
        <div className='h-40 w-80 bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around 
        relative hover:scale-105 transform transition duration-300'>
          <img src="page3-2.png" alt="" className='p-4 w-[100px] h-[100px]' />
          <div className='p-4 flex flex-col text-start'>
            <h1 className='text-3xl text-white font-semibold mb-1'>Electrical Engineering</h1>
          </div>
        </div>
        <div className='h-40 w-80 bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around 
        relative hover:scale-105 transform transition duration-300'>
          <img src="page3-3.png" alt="" className='p-4 w-[100px] h-[80px]' />
          <div className='p-4 flex flex-col text-start'>
            <h1 className='text-3xl text-white font-semibold mb-1'>Chemical Engineering</h1>
          </div>
        </div>
        <div className='h-40 w-80 bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around 
        relative hover:scale-105 transform transition duration-300'>
          <img src="page3-4.png" alt="" className='p-4 w-[100px] h-[90px]' />
          <div className='p-4 flex flex-col text-start'>
            <h1 className='text-3xl text-white font-semibold mb-1'>Civil Engineering</h1>
          </div>
        </div>
        <div className='h-40 w-80 bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around 
        relative hover:scale-105 transform transition duration-300'>
          <img src="page3-5.png" alt="" className='p-4 w-[100px] h-[90px]' />
          <div className='p-4 flex flex-col text-start'>
            <h1 className='text-3xl text-white font-semibold mb-1'>Mechanical Engineering</h1>
          </div>
        </div>
        <div className='h-40 w-80 bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around 
        relative hover:scale-105 transform transition duration-300'>
          <img src="page3-6.png" alt="" className='p-4 w-[100px] h-[90px]' />
          <div className='p-4 flex flex-col text-start'>
            <h1 className='text-3xl text-white font-semibold mb-1'>ENTC Engineering</h1>
          </div>
        </div>
        {showMore && (
          <>
            <div className='h-40 w-80 bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around 
            relative hover:scale-105 transform transition duration-300'>
              <img src="page3-7.png" alt="" className='p-4 w-[100px] h-[90px]' />
              <div className='p-4 flex flex-col text-start'>
                <h1 className='text-3xl text-white font-semibold mb-1'>Computer Science and Design</h1>
              </div>
            </div>
            <div className='h-40 w-80 bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around 
            relative hover:scale-105 transform transition duration-300'>
              <img src="page3-8.png" alt="" className='p-4 w-[100px] h-[90px]' />
              <div className='p-4 flex flex-col text-start'>
                <h1 className='text-3xl text-white font-semibold mb-1'>IT</h1>
              </div>
            </div>
            <div className='h-40 w-80 bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around 
            relative hover:scale-105 transform transition duration-300'>
              <img src="page3-9.png" alt="" className='p-4 w-[100px] h-[90px]' />
              <div className='p-4 flex flex-col text-start'>
                <h1 className='text-3xl text-white font-semibold mb-1'>Robotics and Automation</h1>
              </div>
            </div>
          </>
        )}
      </div>
      <button onClick={toggleShowMore} className='bg-Dblue text-white py-1 px-6 rounded-full mr-4 hover:bg-Dbblue transition duration-200 h-[40px] w-[300px] text-xl'>
        {showMore ? 'View Less' : 'View All'}
      </button>
    </div>
  );
};

export default Page3;
