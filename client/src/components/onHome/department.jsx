import React from 'react'
import Header from '../header'
import Footer from '../footer'


const Department = () => {
  return (
     <div className='flex flex-col gap-4'>
       <Header/>
    <div className='w-[100%] h-80 border-2 rounded-lg border-b-4 border-b-Dblue flex flex-col'>
      <div className='w-[100%] h-20 bg-Dblue overflow-hidden text-white p-2 rounded-t-lg'>
        <h1 className='text-xl'>Department of</h1>
        <h1 className='text-3xl font-semibold'>Computer Engineering</h1>
      </div>
      <div className='w-[65%] h-60 text-gray-700 p-4 gap-2 flex flex-col font-medium'>
        <li>Twice Accredited by AICTE-NBA</li>
        <li>Curriculum as per NEP 2020 guidelines</li>
        <li>Well-furnished labs with Computers of latest configuration and required Software</li>
        <li>Opportunity for students for self-learning, self-development and lifelong learning through MOOCs and Industry Internships and Projects</li>
      </div>
    </div>
    <div className='w-[100%] h-80 border-2 rounded-lg border-b-4 border-b-Dblue flex flex-col'>
    <div className='w-[100%] h-20 bg-Dblue overflow-hidden text-white p-2 rounded-t-lg'>
      <h1 className='text-xl'>Department of</h1>
      <h1 className='text-3xl font-semibold'>Artificial Intelligence and Data science</h1>
    </div>
    <div className='w-[65%] h-60 text-gray-700 p-4 gap-2 flex flex-col font-medium'>
      <li>High Demand for IT Professionals</li>
      <li>Diverse Career Opportunities</li>
      <li>Continuous Learning and Adaptation</li>
      <li>Competitive Salaries</li>
    </div>
  </div><div className='w-[100%] h-80 border-2 rounded-lg border-b-4 border-b-Dblue flex flex-col'>
      <div className='w-[100%] h-20 bg-Dblue overflow-hidden text-white p-2 rounded-t-lg'>
        <h1 className='text-xl'>Department of</h1>
        <h1 className='text-3xl font-semibold'>Computer Science and Design</h1>
      </div>
      <div className='w-[65%] h-60 text-gray-700 p-4 gap-2 flex flex-col font-medium'>
        <li>Twice Accredited by AICTE-NBA</li>
        <li>Curriculum as per NEP 2020 guidelines</li>
        <li>Well-furnished labs with Computers of latest configuration and required Software</li>
        <li>Opportunity for students for self-learning, self-development and lifelong learning through MOOCs and Industry Internships and Projects</li>
      </div>
    </div>
   <Footer/>
    </div>
  )
}

export default Department