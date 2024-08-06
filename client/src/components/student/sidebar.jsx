import React, { useState } from 'react';
import { HiOutlineHome } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";

const StudentSidebar = ({ onSectionClick }) => {
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const toggleDashboardDropdown = () => {
    setIsDashboardDropdownOpen(!isDashboardDropdownOpen);
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    onSectionClick(section);
  };

  return (
    <div className="flex flex-col bg-[#F4F4F4] gap-2 text-lg w-60 max-sm:hidden">
      <button
        onClick={toggleDashboardDropdown}
        className={`flex gap-2 text-black items-center font-medium hover:bg-white p-2 
                    ${selectedSection === 'Dashboard' ? 'bg-white' : ''}`}
      >
        <HiOutlineHome />
        Dashboard
        <i className={`fas fa-chevron-${isDashboardDropdownOpen ? 'up' : 'down'}`}></i>
      </button>
      {isDashboardDropdownOpen && (
        <ul className="flex flex-col gap-1">
          <li
            className={`flex gap-2 p-2 pl-8 items-center hover:bg-white 
                        ${selectedSection === 'To-Do List' ? 'bg-white' : ''}`}
            onClick={() => handleSectionClick('To-Do List')}
          >
            <i className="fa-solid fa-list-check"></i>
            To-Do List
          </li>
          <li
            className={`flex gap-2 p-2 pl-8 items-center hover:bg-white 
                        ${selectedSection === 'GPT' ? 'bg-white' : ''}`}
            onClick={() => handleSectionClick('GPT')}
          >
            <i className="fa-solid fa-robot"></i>
            GPT
          </li>
          <li
            className={`flex gap-2 p-2 pl-8 items-center hover:bg-white 
                        ${selectedSection === 'Community Chat' ? 'bg-white' : ''}`}
            onClick={() => handleSectionClick('Community Chat')}
          >
            <i className="fa-solid fa-comments"></i>
            Community Chat
          </li>
          <li
            className={`flex gap-2 p-2 pl-8 items-center hover:bg-white 
                        ${selectedSection === 'Attendance' ? 'bg-white' : ''}`}
            onClick={() => handleSectionClick('Attendance')}
          >
            <i className="fa-solid fa-check-square"></i>
            Attendance
          </li>
          <li
            className={`flex gap-2 p-2 pl-8 items-center hover:bg-white 
                        ${selectedSection === 'Notifications' ? 'bg-white' : ''}`}
            onClick={() => handleSectionClick('Notifications')}
          >
            <i className="fa-solid fa-bell"></i>
            Notifications
          </li>
          <li
            className={`flex gap-2 p-2 pl-8 items-center hover:bg-white 
                        ${selectedSection === 'Settings' ? 'bg-white' : ''}`}
            onClick={() => handleSectionClick('Settings')}
          >
            <i className="fa-solid fa-cog"></i>
            Settings
          </li>
        </ul>
      )}
      <button
        onClick={() => handleSectionClick('Timetable')}
        className={`flex gap-2 text-black items-center font-medium hover:bg-white p-2 
                    ${selectedSection === 'Timetable' ? 'bg-white' : ''}`}
      >
        <IoCalendarOutline />
        Timetable
      </button>
    </div>
  );
};

export default StudentSidebar;