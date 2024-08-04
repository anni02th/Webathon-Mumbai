import React from 'react'

export default function StudyMaterial() {
  return (
    <div className='h-[100vh] mx-4 flex flex-wrap gap-8 justify-center'>
      <div className='w-72 h-80 border-2 rounded-lg border-b-teal-600 border-b-4 '>
        <div className='h-12 bg-teal-600 rounded-t-md p-4 flex items-center '>
            <h1 className='text-white text-xl font-medium'>Data Structures</h1>
        </div>
        <input type="file" name="" id="" className='m-4 '/>
      </div>
      <div className='w-72 h-80 border-2 rounded-lg border-b-rose-500 border-b-4 '>
        <div className='h-12 bg-rose-500 rounded-t-md p-4 flex items-center '>
            <h1 className='text-white text-xl font-medium'>Operating Systems</h1>
        </div>
        <input type="file" name="" id="" className='m-4 '/>
      </div>
      <div className='w-72 h-80 border-2 rounded-lg border-b-Dbblue border-b-4 '>
        <div className='h-12 bg-Dbblue rounded-t-md p-4 flex items-center '>
            <h1 className='text-white text-xl font-medium'>DBMS</h1>
        </div>
        <input type="file" name="" id="" className='m-4 '/>
      </div>
    </div>
  )
}
