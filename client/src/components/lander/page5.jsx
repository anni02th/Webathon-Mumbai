import React from 'react'

const Page5 = () => {
  return (
    <div className='relative flex flex-col items-center justify-center text-center my-20 p-12 bg-Dblue '>
      <div className="relative p-4 flex flex-col text-center ">
        <h1 className='text-4xl font-bold m-4 text-white'>
          What Our Student
        </h1>
        <h1 className='text-4xl font-bold text-white'>
          Say About Us
        </h1>
        <p className="text-lg m-6 max-w-xl mx-auto text-balance text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae dolores eius nam tenetur maiores dolorem tenetur.
        </p>
      </div>

      <div className='relative flex  w-[80%] self-center items-center justify-center sm:m-8 max-sm:shrink-4'>
        <i className="fa-solid fa-angle-left text-4xl sm:m-16 text-white"></i>
        <div className='flex flex-col items-center justify-center'>
          <img src="page5-1.png" alt="" />
          <h1 className='text-3xl m-8 font-semibold text-white'>Carmen Hodkiewicz</h1>
          <p className='text-lg text-white'>Global Markets Engineer</p>
        </div>
        <i className="fa-solid fa-angle-right text-4xl sm:m-16 text-white"></i>
      </div>
      <p className="text-lg m-6 max-w-xl mx-auto text-balance text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae dolores eius nam tenetur maiores dolorem tenetur.
      </p>
    </div>
  )
}

export default Page5