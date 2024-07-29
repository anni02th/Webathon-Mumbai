import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isDatabaseDropdownOpen, setIsDatabaseDropdownOpen] = useState(false);

  const toggleDatabaseDropdown = () => {
    setIsDatabaseDropdownOpen(!isDatabaseDropdownOpen);
  };

  return (
    <div className="flex p-4 bg-[#F4F4F4] gap-2 text-lg w-fit">
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/departments">
            <i className="fas fa-folder"></i>
            Departments
          </Link>
        </li>
        <li>
          <Link to="/faculty">
            <i className="fas fa-user-graduate"></i>
            Faculty
          </Link>
        </li>
        <li>
          <Link to="/academic-calendar">
            <i className="fas fa-calendar-alt"></i>
            Academic Calendar
          </Link>
        </li>
        <li>
          <button onClick={toggleDatabaseDropdown} className="dropdown-button">
            <i className="fas fa-database"></i>
            Database
            <i className={`fas fa-chevron-${isDatabaseDropdownOpen ? 'up' : 'down'}`}></i>
          </button>
          {isDatabaseDropdownOpen && (
            <ul className="dropdown">
              <li>
                <Link to="/student">
                  <i className="fas fa-users"></i>
                  Student
                </Link>
              </li>
              <li>
                <Link to="/faculty">
                  <i className="fas fa-user-graduate"></i>
                  Faculty
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/settings">
            <i className="fas fa-cog"></i>
            Settings
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <i className="fas fa-sign-out-alt"></i>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
