import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate('/studybuddy');
  };
  const handleClick2 = () => {
    navigate('/GPT');
  };
  const handleClick3 = () => {
    navigate('/blogs');
  };

  return (
    <div >
      <Header />
      <div className='h-fit sm:h-[100vh]'>
        <div className="flex flex-wrap gap-4  justify-center m-auto w-[100%] ">
          <div className='m-6 relative h-fit'>
            <div className='h-[6rem] w-[6rem] rounded-full bg-[#fff] p-2 flex justify-center items-center relative left-1/3 top-10 cursor-pointer border-solid border-2 shadow-lg shadow-[#00000033]' onClick={handleClick1}>
              <img src="/amico.png" alt="" />
            </div>
            <div className='h-[8rem] w-[20rem] bg-white flex justify-center items-center m-auto cursor-pointer shadow-xl shadow-[#00000033] rounded-md font-bold' onClick={handleClick1}><h1>Study Buddy</h1></div>
          </div>

          <div className='m-6 relative h-fit'>
            <div className='h-[6rem] w-[6rem] rounded-full bg-[#fff] flex justify-center items-center relative left-1/3 top-10 cursor-pointer border-solid border-2 shadow-lg shadow-[#00000033]' onClick={handleClick2}>
              <img src="/student.png" alt="" />
            </div>
            <div className='h-[8rem] w-[20rem] bg-white flex justify-center items-center m-auto cursor-pointer shadow-xl shadow-[#00000033] rounded-md font-bold' onClick={handleClick2}><h1>Personalized GPT</h1></div>
          </div>

          <div className='m-6 relative h-fit'>
            <div className='h-[6rem] w-[6rem] rounded-full bg-[#fff] p-4 flex justify-center items-center relative left-1/3 top-10 cursor-pointer border-solid border-2 shadow-lg shadow-[#00000033]' onClick={handleClick3}>
              <img src="/Vector.png" alt="" />
            </div>
            <div className='h-[8rem] w-[20rem] bg-white flex justify-center items-center m-auto cursor-pointer shadow-xl shadow-[#00000033] rounded-md font-bold' onClick={handleClick3}><h1>Blog Post</h1></div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Resources