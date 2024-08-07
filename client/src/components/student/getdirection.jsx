import React, { useState } from 'react';
import axios from 'axios';

export default function GetDirection() {
  const [classroom, setClassroom] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleGetDirections = async () => {
    try {
      const response = await axios.get('/api/getdirections', { params: { classroom } });
      setLocation(response.data.location);
      setError(''); // Clear error if successful
    } catch (error) {
      setLocation('');
      setError(error.response?.data?.error || 'Failed to get directions');
    }
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold mb-4'>Get Directions</h1>
      <div className='flex flex-col gap-4'>
        <input
          type="text"
          placeholder="Enter Classroom"
          value={classroom}
          onChange={(e) => setClassroom(e.target.value)}
          className='p-2 border rounded-md'
        />
        <button onClick={handleGetDirections} className='bg-Dblue text-white p-2 rounded-md hover:bg-Dblue-dark'>
          Get Directions
        </button>
        {error && <p className='text-red-500 mt-2'>{error}</p>}
        {location && <p className='mt-2'>{location}</p>}
      </div>
    </div>
  );
}
