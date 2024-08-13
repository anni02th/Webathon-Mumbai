import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import StudyBuddy from './studybuddy';
import GPT from './gpt';
import Blog from './blog';

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
  };

  const renderResourceCards = () => (
    <div className='h-screen w-full'>
      <div className='container flex p-4 gap-8 h-fit w-full justify-center flex-wrap'>
        {/* Study Buddy Card */}
        <div className='m-6 relative h-fit'>
          <div className='h-[6rem] w-[6rem] rounded-full bg-[#fff] p-2 flex justify-center items-center relative left-1/3 top-10 cursor-pointer border-solid border-2 shadow-lg shadow-[#00000033]' onClick={() => handleResourceClick('Study Buddy')}>
            <img src="/amico.png" alt="Study Buddy" />
          </div>
          <div className='h-[8rem] w-[20rem] bg-white flex justify-center items-center m-auto cursor-pointer shadow-xl shadow-[#00000033] rounded-md font-bold' onClick={() => handleResourceClick('Study Buddy')}>
            <h1>Study Buddy</h1>
          </div>
        </div>

        {/* Personalized GPT Card */}
        <div className='m-6 relative h-fit'>
          <div className='h-[6rem] w-[6rem] rounded-full bg-[#fff] flex justify-center items-center relative left-1/3 top-10 cursor-pointer border-solid border-2 shadow-lg shadow-[#00000033]' onClick={() => handleResourceClick('Personalized GPT')}>
            <img src="/student.png" alt="Personalized GPT" />
          </div>
          <div className='h-[8rem] w-[20rem] bg-white flex justify-center items-center m-auto cursor-pointer shadow-xl shadow-[#00000033] rounded-md font-bold' onClick={() => handleResourceClick('Personalized GPT')}>
            <h1>Personalized GPT</h1>
          </div>
        </div>

        {/* Blog Post Card */}
        <div className='m-6 relative h-fit'>
          <div className='h-[6rem] w-[6rem] rounded-full bg-[#fff] p-4 flex justify-center items-center relative left-1/3 top-10 cursor-pointer border-solid border-2 shadow-lg shadow-[#00000033]' onClick={() => handleResourceClick('Blog Post')}>
            <img src="/Vector.png" alt="Blog Post" />
          </div>
          <div className='h-[8rem] w-[20rem] bg-white flex justify-center items-center m-auto cursor-pointer shadow-xl shadow-[#00000033] rounded-md font-bold' onClick={() => handleResourceClick('Blog Post')}>
            <h1>Blog Post</h1>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSelectedResource = () => (
    <div className='container flex flex-col p-4 gap-8 h-auto'>
      <div className='flex gap-4'>
        <button
          className='px-3 bg-Dbblue rounded text-white'
          onClick={() => setSelectedResource(null)}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <h2 className='text-2xl font-bold'>{selectedResource}</h2>
      </div>
      {selectedResource === 'Study Buddy' && <StudyBuddy />}
      {selectedResource === 'Personalized GPT' && <GPT />}
      {selectedResource === 'Blog Post' && <Blog />}
    </div>
  );

  return (
    <div>
      <Header />
      <section className='flex h-fit'>
        <main className='flex-1'>{selectedResource ? renderSelectedResource() : renderResourceCards()}</main>
      </section>
      <Footer />
    </div>
  );
};

export default Resources;