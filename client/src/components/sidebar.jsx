import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHome } from "react-icons/hi";
import { CiFolderOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";


const Sidebar = () => {
  const [isDatabaseDropdownOpen, setIsDatabaseDropdownOpen] = useState(false);
  const [isDatabaseDropdownOpen2, setIsDatabaseDropdownOpen2] = useState(false);

  const toggleDatabaseDropdown = () => {
    setIsDatabaseDropdownOpen(!isDatabaseDropdownOpen);
  };
  const toggleDatabaseDropdown2 = () => {
    setIsDatabaseDropdownOpen2(!isDatabaseDropdownOpen2);
  };

  return (
    <div className="flex flex-col p-4 bg-[#F4F4F4] gap-2 text-lg w-[20%]">
      <button onClick={toggleDatabaseDropdown} className="dropdown-button flex gap-2 text-black items-center font-medium">
            <HiOutlineHome />
            Dashboard
            <i className={`fas fa-chevron-${isDatabaseDropdownOpen ? 'up' : 'down'}`}></i>
          </button>
          {isDatabaseDropdownOpen && (
            <ul className="dropdown ml-8">
        <li>
          <Link to="/departments" className='flex gap-2 items-center'>
          <CiFolderOn />
            Departments
          </Link>
        </li>
        <li>
          <Link to="/faculty" className='flex gap-2 items-center'>
          <GoPeople />
            Faculty
          </Link>
        </li>
        <li>
          <Link to="/academic-calendar" className='flex gap-2 items-center'>
          <IoCalendarOutline />
            Academic Calendar
          </Link>
        </li>
        <li>
          <button onClick={toggleDatabaseDropdown2} className="dropdown-button text-black flex gap-2 items-center mt-4">
            Database
            <i className={`fas fa-chevron-${isDatabaseDropdownOpen2 ? 'up' : 'down'}`}></i>
          </button>
          {isDatabaseDropdownOpen2 && (
            <ul className="dropdown ml-8">
              <li>
                <Link to="/student"  className='flex gap-2 items-center'>
                <HiOutlineUserGroup />
                  Student
                </Link>
              </li>
              <li>
                <Link to="/faculty" className='flex gap-2 items-center'>
                  <i className="fas fa-user-graduate"></i>
                  Faculty
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>)}
        <ul className='absolute bottom-0 m-5'>
          <li>
            <Link to="/settings" className='flex gap-2 items-center'>
              <i className="fas fa-cog"></i>
              Settings
            </Link>
          </li>
          <li>
            <Link to="/logout" className='flex gap-2 items-center'>
              <i className="fas fa-sign-out-alt"></i>
              Logout
            </Link>
          </li>
        </ul>
    </div>
  );
};

export default Sidebar;
