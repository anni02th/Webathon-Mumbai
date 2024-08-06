import React from 'react'

export default function StudyBuddy() {
  return (
    <div className='h-[100vh] w-fit'>
      <div className=' mx-4 flex flex-wrap gap-4 justify-center'>
        <div className='w-72 h-fit flex flex-col border-2 rounded-lg border-b-teal-600 border-b-4 '>
          <div className='h-10 bg-teal-600 rounded-t-md p-4 flex items-center '>
            <h1 className='text-white text-xl font-medium'>Data Structures</h1>
          </div>
          <div className='m-2 p-2 border-4 border-teal-600 rounded-md'>
            DSA Unit 1
          </div>
          <button className='p-2 bg-teal-600 rounded-sm m-2 self-end text-white'>See more</button>
        </div>
        <div className='w-72 h-fit border-2 rounded-lg border-b-rose-500 border-b-4 '>
          <div className='h-10 bg-rose-500 rounded-t-md p-4 flex items-center '>
            <h1 className='text-white text-xl font-medium'>Operating Systems</h1>
          </div>
          <input type="file" name="" id="" className='m-4 ' />
        </div>
        <div className='w-72 h-fit border-2 rounded-lg border-b-Dbblue border-b-4 '>
          <div className='h-10 bg-Dbblue rounded-t-md p-4 flex items-center '>
            <h1 className='text-white text-xl font-medium'>DBMS</h1>
          </div>
          <input type="file" name="" id="" className='m-4 ' />
        </div>
      </div>
    </div>
  )
}
