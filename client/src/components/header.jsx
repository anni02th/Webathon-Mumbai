import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PiUserCircleFill } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai"; // Import the hamburger menu icon
import { useAuth } from '../components/context/AuthContext';
import '../main.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility

  const getLinkClass = (path) => {
    return currentPath === path ? 'p-3 bg-Lblue' : 'p-3 hover:bg-Lblue transition duration-300';
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='flex justify-between relative z-1000 top-0 border-2 border-solid border-b-[#C2C2C2]'>
      <div className='tab text-Dblue font-normal text-xl flex gap-1'>
        <Link to="/" className='p-3'><h1 className='text-2xl font-bold'>K. K. Wagh</h1></Link>
        <div className='flex justify-center items-center max-md:hidden'>
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/faculty" className={getLinkClass('/faculty')}>Faculty</Link>
          <Link to="/departments" className={getLinkClass('/departments')}>Departments</Link>
          <Link to="/resource" className={getLinkClass('/resource')}>Resources</Link>
        </div>
      </div>
      <div className='text-black flex gap-1 p-3'>
        {user ? (
          <button onClick={handleLogout} className='flex justify-center items-center gap-2 text-Dblue text-lg hover:bg-Dblue border-2 border-transparent 
          hover:text-white px-4 py-[2px] transition duration-200 rounded-sm'>
            {user.name} 
            <div className='flex '><PiUserCircleFill className='size-8' /> Logout </div>
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-Dblue text-white py-1 px-6 rounded-sm mr-4 hover:bg-Dbblue transition duration-200">Login</button>
            </Link>
            <Link to="/signup">
              <button className="bg-white text-Dblue py-1 px-6 rounded-sm mr-4 border-solid border-Dblue border-[1px] hover:bg-Dblue hover:text-white transition duration-200">Sign Up</button>
            </Link>
          </>
        )}
      </div>
      <div className='md:hidden flex items-center'>
        <button onClick={toggleSidebar} className='text-black p-3'>
          <AiOutlineMenu size={24} />
        </button>
      </div>
      {sidebarOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 ' onClick={toggleSidebar}>
          <div className='fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4 z-60 flex flex-col' onClick={(e) => e.stopPropagation()}>
            <Link to="/" className={getLinkClass('/')} onClick={toggleSidebar}>Home</Link>
            <Link to="/faculty" className={getLinkClass('/faculty')} onClick={toggleSidebar}>Faculty</Link>
            <Link to="/departments" className={getLinkClass('/departments')} onClick={toggleSidebar}>Departments</Link>
            <Link to="/resource" className={getLinkClass('/resource')} onClick={toggleSidebar}>Resources</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
