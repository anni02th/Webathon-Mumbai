import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('/api/announcements');
        setAnnouncements(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch announcements.');
        setLoading(false);
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) return <div className='h-[100vh]'>Loading...</div>;
  if (error) return <div className='h-[100vh]'>{error}</div>;

  return (
    <div className='h-[100vh] p-4'>
      <h2 className='text-2xl font-bold mb-4'>Announcements</h2>
      {announcements.length === 0 ? (
        <p>No announcements available.</p>
      ) : (
        <ul>
          {announcements.map((announcement, index) => (
            <li key={index} className='mb-4 p-4 border border-gray-200 rounded'>
              <h3 className='text-xl font-semibold'>{announcement.title}</h3>
              <p>{announcement.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
