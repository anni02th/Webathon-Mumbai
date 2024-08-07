import React, { useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import Sidebar from './sidebar';
import Card from '../card';
import Department from './departments';
import Calendar from './academicCalendar';
import Faculty from './faculty';

const Adminpage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const renderCards = () => (
    <div className='h-screen w-full'>
      <div className='container flex p-4 gap-8 h-fit w-full justify-center flex-wrap'>
        {['Departments', 'Faculty', 'Academic Calendar'].map((card) => (
          <div key={card} onClick={() => handleCardClick(card)} className='w-fit h-fit hover:cursor-pointer'>
            <Card heading={card} srcimg={`/admin${card === 'Departments' ? 1 : card === 'Faculty' ? 2 : 3}.png`} />
          </div>
        ))}
      </div>
    </div>
  );

  const renderSelectedContent = () => (
    <div className='container flex flex-col p-4 gap-8'>
      <div className='flex gap-4'>
        <button
          className='px-3 bg-Dbblue rounded text-white'
          onClick={() => setSelectedCard(null)}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <h2 className='text-2xl font-bold'>{selectedCard}</h2>
      </div>
      {selectedCard === 'Departments' && <Department />}
      {selectedCard === 'Faculty' && <Faculty />}
      {selectedCard === 'Academic Calendar' && <Calendar />}
    </div>
  );

  return (
    <div>
      <Header />
      <section className='flex'>
        <Sidebar onSectionClick={handleCardClick} />
        <main className='flex-1'>{selectedCard ? renderSelectedContent() : renderCards()}</main>
      </section>
      <Footer />
    </div>
  );
};

export default Adminpage;
