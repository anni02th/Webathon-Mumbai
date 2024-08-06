// components/pages/studentpage.jsx
import React, { useEffect, useState } from 'react';
import CollegeCompanion from './collegecomp';

const StudentPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the Flask backend
    fetch('http://127.0.0.1:5000/student')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className=''>
      <CollegeCompanion/>
      <h1>Student Page</h1>
      <p className='text-black'>{message}</p>
    </div>
  );
};

export default StudentPage;
