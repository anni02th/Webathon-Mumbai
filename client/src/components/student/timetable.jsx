import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Timetable = () => {
  const [error, setError] = useState('');
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCalendar();
  }, []);

  const fetchCalendar = async () => {
    try {
      const response = await axios.get('/api/admin/acad_calendar');
      setCalendar(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching calendar:', error);
      setError('Failed to fetch calendar.');
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4'>
      <h1 className='text-4xl font-semibold mb-4'>Timetable</h1>
      <img src="/timetable.png" className="w-[100%] h-[100vh] object-contain object-top" />
      {error && <p className='text-red-500 mb-4'>{error}</p>}
      {calendar && calendar.filename ? (
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Current Academic Calendar</h2>
          <embed src={`/api/admin/acad_calendar/${calendar.filename}`} type="application/pdf" width="100%" height="600px" />
        </div>
      ) : (
        <p>No academic calendar uploaded.</p>
      )}
    </div>
  );
};

export default Timetable;
