import React, { useState } from 'react';
import StudentSidebar from './sidebar';
import ToDo from './todo';
import GPT from './gpt';
import CommunityChat from './communitychat';
import Attendance from './attendance';
import Notifications from './notifications';
import Settings from './settings';
import Header from '../header';
import Footer from '../footer';
import StudyBuddy from './studybuddy';
import Card from '../card';
import GetDirection from './getdirection';

const StudentPage = () =>{
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const renderCards = () => (
    <div className='h-fit w-fit '>
    <div className='container flex p-4 gap-8 h-fit w-[100%] justify-center flex-wrap'>
      <div onClick={() => handleCardClick('To-Do List')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='To-Do List' srcimg='/student7.png' />
      </div>
      <div onClick={() => handleCardClick('Timetable')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='Time Table' srcimg='/faculty3.png' />
      </div>
      <div onClick={() => handleCardClick('Study Buddy')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='Study Buddy' srcimg='/faculty1.png' />
      </div>
      <div onClick={() => handleCardClick('Personalized GPT')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='Personalized GPT' srcimg='/student1.png' />
      </div>
      <div onClick={() => handleCardClick('Community Chat')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='Community Chat' srcimg='/student2.png' />
      </div>
      <div onClick={() => handleCardClick('Get Directions')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='Get Directions' srcimg='/student3.png' />
      </div>
      <div onClick={() => handleCardClick('Attendance')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='Attendance' srcimg='/faculty2.png' />
      </div>
      <div onClick={() => handleCardClick('Notifications')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='Notifications' srcimg='/student4.png' />
      </div>
      <div onClick={() => handleCardClick('Settings')} className='w-fit h-fit hover:cursor-pointer'>
        <Card heading='Settings' srcimg='/student5.png' />
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
      
      {selectedCard === 'To-Do List' && <ToDo />}
      {selectedCard === 'Timetable' && <img src="/timetable.png" className="w-[100%] h-[100vh] object-contain object-top" />}
      {selectedCard === 'Study Buddy' && <StudyBuddy />}
      {selectedCard === 'Community Chat' && <CommunityChat />}
      {selectedCard === 'Get Directions' && <GetDirection />}
      {selectedCard === 'Personalized GPT' && <GPT />}
      {selectedCard === 'Attendance' && <Attendance />}
      {selectedCard === 'Notifications' && <Notifications />}
      {selectedCard === 'Settings' && <Settings />}
    </div>
  );

  return (
    <div>
      <Header />
      <section className='flex'>
        <StudentSidebar onSectionClick={handleCardClick} />
        {selectedCard ? renderSelectedContent() : renderCards()}
      </section>
      <Footer />
    </div>
  );
};

export default StudentPage;
