import React from 'react'

const Page4 = () => {
  return (
    <div className='relative flex flex-col items-center justify-center text-center my-20'>
      <div className="relative z-10 p-4 flex flex-col text-center">
        <h1 className='text-Dblue text-6xl font-semibold m-4'>
        Student Admission Process and
        </h1>
        <h1 className='text-Dblue text-6xl font-semibold'>
        Admission from us
        </h1>
        <p className="text-lg m-6 max-w-xl mx-auto text-balance ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae dolores eius nam tenetur maiores dolorem tenetur.
        </p>
      </div>
      
      <div className='flex justify-center items-center w-[100%]'>
        <img src="page4-1.png" alt="" className='m-4' />
        <div>
            <div className='flex items-center my-8'>
              <div className='w-[50px] h-[50px] bg-Dblue rounded-[10px] mx-10 flex justify-center items-center text-3xl'>
                <i className="fa-solid fa-check text-white"></i>
              </div>
              <p className='text-3xl'>Complete Everything as ordered</p>
            </div>
            <div className='flex items-center my-8'>
              <div className='w-[50px] h-[50px] bg-Dblue rounded-[10px] mx-10 flex justify-center items-center text-3xl'>
                <i className="fa-solid fa-check text-white"></i>
              </div>
              <p className='text-3xl'>Provide your last exam result</p>
            </div>
            <div className='flex items-center my-8'>
              <div className='w-[50px] h-[50px] bg-Dblue rounded-[10px] mx-10 flex justify-center items-center text-3xl'>
                <i className="fa-solid fa-check text-white"></i>
              </div>
              <p className='text-3xl'>Choose your desired program </p>
            </div>
            <div className='flex items-center my-8'>
              <div className='w-[50px] h-[50px] bg-Dblue rounded-[10px] mx-10 flex justify-center items-center text-3xl'>
                <i className="fa-solid fa-check text-white"></i>
              </div>
              <p className='text-3xl'>Get contact with the instructor</p>
            </div>
            <div className='flex items-center my-8'>
              <div className='w-[50px] h-[50px] bg-Dblue rounded-[10px] mx-10 flex justify-center items-center text-3xl'>
                <i className="fa-solid fa-check text-white"></i>
              </div>
              <p className='text-3xl'>Finally get started your program</p>
            </div>
            <button className=' bg-Dblue text-white h-[40px] w-[300px] text-xl font-medium m-6 rounded-[50px] '>
                See all our admissions</button>
        </div>
      </div> 
    </div>
  )
}

export default Page4