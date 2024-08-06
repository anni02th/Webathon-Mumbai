import React from 'react'

const Page4 = () => {
  return (
    <div className='relative flex flex-col items-center justify-center text-center my-14'>
      <div className="relative z-10 p-4 flex flex-col text-center">
        <h1 className='text-Dblue text-4xl font-bold m-4'>
        Student Admission Process and
        </h1>
        <h1 className='text-Dblue text-4xl font-bold'>
        Admission from us
        </h1>
      </div>
      
      <div className='flex justify-center items-center w-[100%] max-lg:flex-col'>
        <img src="page4-1.png" alt="" className='m-4 sm:max-w-[500px]' />
        <div>
            <div className='flex items-center my-8'>
              <div className='w-[50px] h-[50px] bg-Dblue rounded-[10px] mx-10 flex justify-center items-center text-3xl'>
                <i className="fa-solid fa-check text-white"></i>
              </div>
              <p className='text-2xl'>Complete Everything as ordered</p>
            </div>
            <div className='flex items-center my-8'>
              <div className='w-[50px] h-[50px] bg-Dblue rounded-[10px] mx-10 flex justify-center items-center text-3xl'>
                <i className="fa-solid fa-check text-white"></i>
              </div>
              <p className='text-2xl'>Provide your last exam result</p>
            </div>
            <div className='flex items-center my-8'>
              <div className='w-[50px] h-[50px] bg-Dblue rounded-[10px] mx-10 flex justify-center items-center text-3xl'>
                <i className="fa-solid fa-check text-white"></i>
              </div>
              <p className='text-2xl'>Choose your desired program </p>
            </div>
            <div className='flex items-center my-8'>
              <div className='w-[50px] h-[50px] bg-Dblue rounded-[10px] mx-10 flex justify-center items-center text-3xl'>
                <i className="fa-solid fa-check text-white"></i>
              </div>
              <p className='text-2xl'>Get contact with the instructor</p>
            </div>
            <div className='flex items-center my-8'>
              <div className='w-[50px] h-[50px] bg-Dblue rounded-[10px] mx-10 flex justify-center items-center text-3xl'>
                <i className="fa-solid fa-check text-white"></i>
              </div>
              <p className='text-2xl'>Finally get started your program</p>
            </div>
            <button className=' bg-Dblue text-white py-1 px-6 rounded-full mr-4 hover:bg-Dbblue transition duration-200 h-[40px] w-[300px] '>
                See all our admissions</button>
        </div>
      </div> 
    </div>
  )
}

export default Page4