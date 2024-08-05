import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Attendance() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [date, setDate] = useState('');
  const [type, setType] = useState('lecture');
  const [students, setStudents] = useState([]);

  const fetchAttendanceData = () => {
    axios.get('/api/attendance')
      .then(response => {
        setAttendanceData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the attendance data!', error);
      });
  };

  const fetchStudentData = () => {
    axios.get('/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the students data!', error);
      });
  };

  useEffect(() => {
    fetchAttendanceData();
    fetchStudentData();
  }, []);

  const handleMarkAttendance = () => {
    const attendanceRecord = {
      date,
      type,
      students: students.map(student => ({
        id: student._id,
        name: student.name,
        present: document.getElementById(`present-${student._id}`).checked
      }))
    };

    axios.post('/api/attendance', attendanceRecord)
      .then(response => {
        setAttendanceData(prevData => [...prevData, response.data]);
      })
      .catch(error => {
        console.error('There was an error marking the attendance!', error);
      });
  };

  return (
    <div className='h-[100vh] p-4'>
      <h1 className='text-2xl mb-4'>Attendance Management</h1>
      
      <div className='mb-4'>
        <label className='block mb-2'>
          Date:
          <input 
            type='date' 
            value={date} 
            onChange={e => setDate(e.target.value)} 
            className='border p-2 rounded w-full'
          />
        </label>
        
        <label className='block mb-2'>
          Type:
          <select 
            value={type} 
            onChange={e => setType(e.target.value)} 
            className='border p-2 rounded w-full'
          >
            <option value='lecture'>Lecture</option>
            <option value='practical'>Practical</option>
          </select>
        </label>
      </div>
      
      <div className='mb-4'>
        <h2 className='text-xl mb-2'>Mark Attendance</h2>
        {students.map(student => (
          <div key={student._id} className='mb-2'>
            <label>
              <input 
                type='checkbox' 
                id={`present-${student._id}`}
                className='mr-2'
              />
              {student.name}
            </label>
          </div>
        ))}
        <button 
          onClick={handleMarkAttendance} 
          className='bg-blue-500 text-white p-2 rounded'
        >
          Mark Attendance
        </button>
      </div>
      
      <div>
        <h2 className='text-xl mb-2'>Attendance Records</h2>
        <button 
          onClick={fetchAttendanceData} 
          className='bg-gray-500 text-white p-2 rounded mb-4'
        >
          Refresh
        </button>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>Date</th>
              <th className='py-2 px-4 border-b'>Type</th>
              <th className='py-2 px-4 border-b'>Student</th>
              <th className='py-2 px-4 border-b'>Present</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map(record => (
              record.students.map(student => (
                <tr key={`${record.date}-${student.id}`}>
                  <td className='py-2 px-4 border-b'>{record.date}</td>
                  <td className='py-2 px-4 border-b'>{record.type}</td>
                  <td className='py-2 px-4 border-b'>{student.name}</td>
                  <td className='py-2 px-4 border-b'>{student.present ? 'Yes' : 'No'}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
