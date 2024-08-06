import React from 'react'

export default function Department() {
  return (
    <div className='flex flex-col m-4 gap-4 max-w-[1000px] self-center'>

        <div className='w-[100%] h-fit relative border-2 rounded-lg border-b-4 border-b-Dblue flex flex-col'>
          <div className='w-[100%] h-fit bg-Dblue overflow-hidden text-white p-2 rounded-t-lg '>
            <h1 className='text-xl text-white'>Department of</h1>
            <h1 className='sm:text-3xl text-2xl font-semibold text-white'>Computer Engineering</h1>
          </div>
          <img src="/department1.png" alt="" className='w-auto sm:h-64 h-[100%] m-2 object-contain sm:absolute sm:right-8 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:rounded-full' />
          <div className='sm:w-[65%] w-[100%] h-fit text-gray-700 p-4 mb-8 gap-2 flex flex-col font-medium '>
            <li>Twice Accredited by AICTE-NBA</li>
            <li>Curriculum as per NEP 2020 guidelines</li>
            <li>Well-furnished labs with Computers of latest configuration and required Software</li>
            <li>Opportunity for students for self-learning, self-development and lifelong learning through MOOCs and Industry Internships and Projects</li>
          </div>
        </div>

        <div className='w-[100%] h-fit relative border-2 rounded-lg border-b-4 border-b-Dblue flex flex-col'>
          <div className='w-[100%] h-fit bg-Dblue overflow-hidden text-white p-2 rounded-t-lg '>
            <h1 className='text-xl text-white'>Department of</h1>
            <h1 className='sm:text-3xl text-2xl font-semibold text-white'>Artificial Intelligence & Data science</h1>
          </div>
          <img src="/department2.png" alt="" className='w-auto sm:h-64 h-[100%] m-2 object-contain sm:absolute sm:right-8 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:rounded-full' />
          <div className='sm:w-[65%] w-[100%] h-fit text-gray-700 p-4 mb-12 gap-2 flex flex-col font-medium '>
            <li>High Demand for IT Professionals</li>
            <li>Diverse Career Opportunities</li>
            <li>Continuous Learning and Adaptation</li>
            <li>Competitive Salaries</li>
          </div>
        </div>
        
        <div className='w-[100%] h-fit relative border-2 rounded-lg border-b-4 border-b-Dblue flex flex-col'>
          <div className='w-[100%] h-fit bg-Dblue overflow-hidden text-white p-2 rounded-t-lg '>
            <h1 className='text-xl text-white'>Department of</h1>
            <h1 className='sm:text-3xl text-2xl font-semibold text-white'>Computer Science and Design</h1>
          </div>
          <img src="/department3.png" alt="" className='w-auto sm:h-64 h-[100%] m-2 object-contain sm:absolute sm:right-8 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:rounded-full' />
          <div className='sm:w-[65%] w-[100%] h-fit text-gray-700 p-4 mb-8 gap-2 flex flex-col font-medium'>
            <li>Twice Accredited by AICTE-NBA</li>
            <li>Curriculum as per NEP 2020 guidelines</li>
            <li>Well-furnished labs with Computers of latest configuration and required Software</li>
            <li>Opportunity for students for self-learning, self-development and lifelong learning through MOOCs and Industry Internships and Projects</li>
          </div>
        </div>
      </div>
  )
}
