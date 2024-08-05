import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiUserCircleFill } from "react-icons/pi";
import axios from 'axios';

const HeaderL = () => {
  const [user, setUser] = useState(null); // State to store logged-in user's info
  const navigate = useNavigate();

  // Fetch user info on component mount
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user', { withCredentials: true });
        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className='w-[100%] flex font-medium gap-4 items-center justify-between bg-white border-2 border-solid border-b-[#C2C2C2]'>
      <div className='text-Dblue font-normal text-xl flex gap-1'>
        <Link to="/" className='p-3'>
          <h1 className='text-2xl font-bold'>K. K. Wagh</h1>
        </Link>
        <div className='flex justify-center items-center max-md:hidden'>
          <Link to="/" className='p-3 hover:bg-Lblue transition duration-300'>Home</Link>
          <Link to="/faculty" className='p-3 hover:bg-Lblue transition duration-300'>Faculty</Link>
          <Link to="/departments" className='p-3 hover:bg-Lblue transition duration-300'>Departments</Link>
          <Link to="/resource" className='p-3 hover:bg-Lblue transition duration-300'>Resources</Link>
        </div>
      </div>

      <div className='flex items-center gap-2'>
        {user && (
          <span className='text-lg mr-4'>{user.name || user.email}</span>
        )}
        <button
          onClick={handleLogout}
          className='flex justify-center items-center gap-2 text-black text-lg hover:bg-Dblue 
          hover:text-white px-4 py-[2px] transition duration-200 rounded-sm'
        >
          <PiUserCircleFill className='size-8' />
          Logout
        </button>
      </div>
    </div>
  );
};

export default HeaderL;
