import React, { useState } from 'react';
import { HiOutlineHome } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";

const Sidebar = ({ onSectionClick }) => {
    const [isDatabaseDropdownOpen, setIsDatabaseDropdownOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);

    const toggleDatabaseDropdown = () => {
        setIsDatabaseDropdownOpen(!isDatabaseDropdownOpen);
    };

    const handleSectionClick = (section) => {
        setSelectedSection(section);
        onSectionClick(section);
    };

    return (
        <div className="flex flex-col bg-[#F4F4F4] gap-2 text-lg w-60 max-sm:hidden">
            <button
                onClick={toggleDatabaseDropdown}
                className={`flex gap-2 text-black items-center font-medium hover:bg-white p-2 
                    ${selectedSection === 'Dashboard' ? 'bg-white' : ''}`}
            >
                <HiOutlineHome />
                Dashboard
                <i className={`fas fa-chevron-${isDatabaseDropdownOpen ? 'up' : 'down'}`}></i>
            </button>
            {isDatabaseDropdownOpen && (
                <ul className="flex flex-col gap-1">
                    <li
                        className={`flex gap-2 p-2 pl-8 items-center hover:bg-white 
                            ${selectedSection === 'Upload Study Material' ? 'bg-white' : ''}`}
                        onClick={() => handleSectionClick('Upload Study Material')}
                    >
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        Upload Study Material
                    </li>
                    <li
                        className={`flex gap-2 p-2 pl-8 items-center hover:bg-white 
                        ${selectedSection === 'Update Attendance' ? 'bg-white' : ''}`}
                        onClick={() => handleSectionClick('Update Attendance')}
                    >
                        <i className="fa-solid fa-arrow-rotate-right -rotate-90"></i>
                        Update Attendance
                    </li>
                    <li
                        className={`flex gap-2 p-2 pl-8 items-center hover:bg-white 
                        ${selectedSection === 'Time Table' ? 'bg-white' : ''}`}
                        onClick={() => handleSectionClick('Time Table')}
                    >
                        <IoCalendarOutline />
                        Time Table
                    </li>
                </ul>
            )}
            <ul className='absolute bottom-0 m-5'>
                <li className={`flex gap-2 p-2 pl-8 items-center hover:bg-white `}>
                        <i className="fas fa-cog"></i>
                        Settings
                </li>
                <li className={`flex gap-2 p-2 pl-8 items-center hover:bg-white `}>
                        <i className="fas fa-sign-out-alt"></i>
                        Logout
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
