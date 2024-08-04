import React, { useState } from 'react';
import HeaderL from '../HeaderL';
import Footer from '../footer';
import Sidebar from '../sidebar';
import Card from '../card';
import Department from './departments';
import Faculty from './faculty';
import Calendar from './academicCalendar';

const Adminpage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const renderCards = () => (
    <div className='container flex p-4 gap-8 h-[100vh]'>
      <div onClick={() => handleCardClick('Departments')} className='w-fit h-fit hover:cursor-pointer' >
        <Card heading='Departments' srcimg='/admin1.png' />
      </div>
      <div onClick={() => handleCardClick('Faculty')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='Faculty' srcimg='/admin2.png' />
      </div>
      <div onClick={() => handleCardClick('Academic Calendar')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='Academic Calendar' srcimg='/admin3.png' />
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
      
      {selectedCard === 'Departments' && <Department/>}
      {selectedCard === 'Faculty' && <Faculty/>}
      {selectedCard === 'Academic Calendar' && <Calendar/> }
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

export default Adminpage;
