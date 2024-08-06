import React, { useState } from 'react';
import StudentSidebar from './sidebar';
import ToDo from './todo';
import GPT from './gpt';
import CommunityChat from './communitychat';
import Timetable from './timetable';
import Attendance from './attendance';
import Notifications from './notifications';
import Settings from './settings';
import Header from '../header';
import Footer from '../footer';

const StudentPage = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'To-Do List':
        return <ToDo />;
      case 'GPT':
        return <GPT />;
      case 'Community Chat':
        return <CommunityChat />;
      case 'Timetable':
        return <Timetable />;
      case 'Attendance':
        return <Attendance />;
      case 'Notifications':
        return <Notifications />;
      case 'Settings':
        return <Settings />;
      default:
        return <div className='h-[100vh]'>Select a section from the sidebar</div>;
    }
  };

  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <section className='flex flex-grow'>
        <StudentSidebar onSectionClick={setActiveSection} />
        <div className="flex-grow p-4">
          {renderActiveSection()}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default StudentPage;
