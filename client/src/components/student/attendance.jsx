import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const token = localStorage.getItem('token'); // Assumes token is stored in local storage
        const response = await axios.get('/api/attendance', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAttendanceData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching attendance:', error);
        setError('Failed to fetch attendance data.');
        setLoading(false);
      }
    };

    fetchAttendanceData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="h-[100vh]">
      <h1 className="text-2xl mb-4">Attendance Records</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left">Date</th>
            <th className="px-6 py-3 bg-gray-50 text-left">Type</th>
            <th className="px-6 py-3 bg-gray-50 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td className="px-6 py-4">{record.date}</td>
              <td className="px-6 py-4">{record.type}</td>
              <td className="px-6 py-4">{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
