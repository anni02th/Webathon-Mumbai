import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from './sidebar';
import Card from '../card';
import StudyMaterial from './StudyMaterial';
import Attendance from './attendance';

const Facultypage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const renderCards = () => (
    <div className='h-[100vh] w-fit '>
    <div className='container flex p-4 gap-8 h-fit w-[100%] justify-center flex-wrap'>
      <div onClick={() => handleCardClick('Upload Study Material')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='Upload Study Material' srcimg='/faculty1.png' />
      </div>
      <div onClick={() => handleCardClick('Update Attendance')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='Update Attendance' srcimg='/faculty2.png' />
      </div>
      <div onClick={() => handleCardClick('Time Table')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='View Time Table' srcimg='/faculty3.png' />
      </div>
    </div>
    </div>
  );

  const renderSelectedContent = () => (
    <div className='container flex flex-col p-4 gap-8'>
      <div className='flex gap-4'>
        <button
          className='px-3 bg-Dbblue  rounded'
          onClick={() => setSelectedCard(null)}
        >
          <i class="fa-solid fa-chevron-left text-white"></i>
        </button>
        <h2 className='text-2xl font-bold'>{selectedCard}</h2>
      </div>
      
      {selectedCard === 'Upload Study Material' && <StudyMaterial />}
      {selectedCard === 'Update Attendance' && <Attendance />}
      {selectedCard === 'Time Table' && <img src="/timetable.png" className="w-[100%] h-[100vh] object-contain object-top" />}
    </div>
  );

  return (
    <div>
      <Header />
      <section className='flex'>
        <Sidebar onSectionClick={handleCardClick} />
        {selectedCard ? renderSelectedContent() : renderCards()}
      </section>
      <Footer />
    </div>
  );
};

export default Facultypage;
