import React from 'react'

const Page3 = () => {
  return (
    <div className='relative flex flex-col items-center justify-center text-center my-20'>
      <div className="relative z-10 p-4 flex flex-col text-center">
        <h1 className='text-Dblue text-6xl font-semibold'>
        Explore Our Academic Offerings
        </h1>
        <h2 className='text-Dblue text-6xl font-semibold'>
        Chart Your Paths To Success
        </h2>
        <p className="text-lg m-6 max-w-xl mx-auto text-balance ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             ratione delectus labore distinctio. Ratione, molestias.
        </p>
      </div>
      
      <div className='relative flex flex-wrap justify-evenly items-center'>
        <div className='h-[180px] w-[380px] bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around relative'>
            <img src="page3-1.png" alt="" className='p-4 w-[100px] h-[100px]' />
            <div className='text-white p-4 flex flex-col text-start'>
                <h1 className='text-3xl font-bold mb-1'>Engineering</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className='h-[180px] w-[380px] bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around relative'>
            <img src="page3-2.png" alt="" className='p-4 w-[100px] h-[100px]' />
            <div className='text-white p-4 flex flex-col text-start' >
                <h1 className='text-3xl font-bold mb-1'>Psychology</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className='h-[180px] w-[380px] bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around relative'>
            <img src="page3-3.png" alt="" className='p-4 w-[100px] h-[80px]' />
            <div className='text-white p-4 flex flex-col text-start'>
                <h1 className='text-3xl font-bold mb-1'>Fine Arts</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div className='h-[180px] w-[380px] bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around relative'>
            <img src="page3-4.png" alt="" className='p-4 w-[100px] h-[90px]' />
            <div className='text-white p-4 flex flex-col text-start'>
                <h1 className='text-3xl font-bold mb-1'>Language</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div><div className='h-[180px] w-[380px] bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around relative'>
            <img src="page3-5.png" alt="" className='p-4 w-[100px] h-[90px]' />
            <div className='text-white p-4 flex flex-col text-start'>
                <h1 className='text-3xl font-bold mb-1'>Accountancy</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div><div className='h-[180px] w-[380px] bg-Dblue p-4 m-6 rounded-[25px] flex items-center justify-around relative'>
            <img src="page3-6.png" alt="" className='p-4 w-[100px] h-[90px]' />
            <div className='text-white p-4 flex flex-col text-start'>
                <h1 className='text-3xl font-bold mb-1'>Science</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
      </div>
      <button className='w-24 bg-Dblue text-white h-[40px] w-[300px] text-xl font-semibold m-6 rounded-[50px] '>View All</button>
    </div>
  )
}

export default Page3