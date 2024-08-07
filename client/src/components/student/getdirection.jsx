import React, { useState } from 'react';
import axios from 'axios';

export default function GetDirection() {
  const [classroom, setClassroom] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetDirections = async () => {
    setLoading(true);
    setError('');
    setLocation('');

    try {
      const response = await axios.get('/api/getdirections', { params: { classroom } });
      setLocation(response.data.location);
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to get directions');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-[70vh] flex flex-col relative'>
      <div className='w-full h-full flex justify-center items-center '>
        <img src="/getdirections.jpg" alt="" className='w-80' />
      </div>
      <div className='flex flex-col gap-4 p-8 w-full h-fit bottom-8'>
        {error && <p className='text-red-500 mt-2'>{error}</p>}
        {location && <p className='mt-2 text-green-500 font-bold text-lg'>{location}</p>}
        <input
          type="text"
          placeholder="Enter Classroom"
          value={classroom}
          onChange={(e) => setClassroom(e.target.value)}
          className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Dblue'
          aria-label="Classroom input"
        />
        <button
          onClick={handleGetDirections}
          className='bg-Dblue text-white p-2 rounded-md hover:bg-Dblue-dark focus:outline-none focus:ring-2 focus:ring-Dblue'
          aria-label="Get Directions button"
        >
          {loading ? 'Loading...' : 'Get Directions'}
        </button>

      </div>
    </div>
  );
}
