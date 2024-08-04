import React from 'react'
import Header from '../header'
import Footer from '../footer'

const Resources = () => {
  return (
    <div>
      <Header/>

      <div className="flex flex-wrap gap-4  justify-center items-center m-auto w-[80%]">
        <div className='m-6'>
          <div className='h-[6rem] w-[6rem] rounded-full bg-green-400 text-center '>circle</div>
          <div className='h-[8rem] w-[18rem] bg-fuchsia-400'>Course Materials</div>
        </div>
        <div className='m-6'>
          <div className='h-[6rem] w-[6rem] rounded-full bg-green-400 text-center '>circle</div>
          <div className='h-[8rem] w-[18rem] bg-fuchsia-400'>Course Materials</div>
        </div>
        <div className='m-6'>
          <div className='h-[6rem] w-[6rem] rounded-full bg-green-400 text-center '>circle</div>
          <div className='h-[8rem] w-[18rem] bg-fuchsia-400'>Course Materials</div>
        </div>
       
      </div>

      <Footer/>
    </div>
  )
}

export default Resources