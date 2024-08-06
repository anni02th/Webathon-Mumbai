import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Attendance() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Set today's date by default
  const [type, setType] = useState('lecture');
  const [students, setStudents] = useState([]);

  // Function to fetch attendance data
  const fetchAttendanceData = () => {
    axios.get('/api/attendance')
      .then(response => {
        setAttendanceData(response.data);
      })
      .catch(error => {
        console.error('Error fetching attendance:', error);
        alert('Failed to fetch attendance data.');
      });
  };

  // Function to fetch student data
  const fetchStudentData = () => {
    axios.get('/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
        alert('Failed to fetch student data.');
      });
  };

  useEffect(() => {
    fetchAttendanceData();
    fetchStudentData();
  }, []);

  // Function to handle marking attendance
  const handleMarkAttendance = () => {
    const attendanceRecord = {
      date: date,
      type: type,
      students: students.map(student => ({
        id: student._id,
        present: document.getElementById(`present-${student._id}`).checked
      }))
    };

    axios.post('/api/attendance', attendanceRecord)
      .then(() => {
        fetchAttendanceData(); // Refresh attendance data after posting
        alert('Attendance marked successfully.');
      })
      .catch(error => {
        console.error('Error marking attendance:', error);
        alert('Failed to mark attendance.');
      });
  };

  return (
    <div className="h-[100vh] p-4">
      <h1 className="text-2xl mb-4">Attendance Management</h1>
      
      {/* Date and Type Selection */}
      <div className="mb-4">
        <input 
          type="date" 
          value={date} 
          onChange={e => setDate(e.target.value)} 
          className="border p-2 rounded mr-4"
        />
        <select 
          value={type} 
          onChange={e => setType(e.target.value)} 
          className="border p-2 rounded"
        >
          <option value="lecture">Lecture</option>
          <option value="practical">Practical</option>
        </select>
      </div>

      {/* Mark Attendance Section */}
      <div className="mb-4">
        <h2 className="text-xl mb-2">Mark Attendance</h2>
        {students.map(student => (
          <div key={student._id} className="mb-1">
            <label>
              <input type="checkbox" id={`present-${student._id}`} className="mr-2" />
              {student.name || 'Unnamed Student'}
            </label>
          </div>
        ))}
        <button 
          onClick={handleMarkAttendance} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Mark Attendance
        </button>
      </div>

      {/* Attendance Records */}
      <div>
        <h2 className="text-xl mb-2">Attendance Records</h2>
        <button 
          onClick={fetchAttendanceData} 
          className="mb-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          Refresh
        </button>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left">Date</th>
              <th className="px-6 py-3 bg-gray-50 text-left">Type</th>
              <th className="px-6 py-3 bg-gray-50 text-left">Student</th>
              <th className="px-6 py-3 bg-gray-50 text-left">Present</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {attendanceData.map((record, index) => (
              <tr key={index}>
                <td className="px-6 py-4">{record.date}</td>
                <td className="px-6 py-4">{record.type}</td>
                <td className="px-6 py-4">{record.student.name}</td>
                <td className="px-6 py-4">{record.student.present ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}