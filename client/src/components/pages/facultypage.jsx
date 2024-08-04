import React, { useState } from 'react';
import HeaderL from '../HeaderL';
import Footer from '../footer';
import Sidebar from '../sidebar';
import Card from '../card';
import StudyMaterial from './StudyMaterial';

const Facultypage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const renderCards = () => (
    <div className='container flex p-4 gap-8 h-[100vh]'>
      <div onClick={() => handleCardClick('StudyMaterial')}>
        <Card heading='Upload Study Material' srcimg='/faculty1.png' />
      </div>
      <div onClick={() => handleCardClick('Attendance')}>
        <Card heading='Update Attendance' srcimg='/faculty2.png' />
      </div>
      <div onClick={() => handleCardClick('TimeTable')}>
        <Card heading='View Time Table' srcimg='/faculty3.png' />
      </div>
    </div>
  );

  const renderSelectedContent = () => (
    <div className='container flex flex-col p-4 gap-8'>
      <div className='flex gap-4'>
        <button
          className='px-3 bg-Dbblue text-white rounded'
          onClick={() => setSelectedCard(null)}
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <h2 className='text-2xl font-bold'>{selectedCard}</h2>
      </div>
      
      {selectedCard === 'StudyMaterial' && <StudyMaterial/>}
      {selectedCard === 'Attendance'}
      {selectedCard === 'TimeTable' && <img src="/timetable.jpg" className="w-[90%] h-[100vh] object-contain object-top" /> }
    </div>
  );

  return (
    <div>
      <HeaderL />
      <section className='flex'>
        <Sidebar />
        {selectedCard ? renderSelectedContent() : renderCards()}
      </section>
      <Footer />
    </div>
  );
};

export default Facultypage;
