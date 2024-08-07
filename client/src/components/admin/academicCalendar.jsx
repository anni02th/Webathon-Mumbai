import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calendar = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCalendar();
  }, []);

  const fetchCalendar = async () => {
    try {
      const response = await axios.get('/api/admin/acad_calendar'); // Adjust this endpoint based on your needs
      setCalendar(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching calendar:', error);
      setError('Failed to fetch calendar.');
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/api/admin/acad_calendar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchCalendar();
      setFile(null);
      setError('');
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Failed to upload file.');
    }
  };

  const handleDelete = async (filename) => {
    try {
      await axios.delete(`/api/admin/acad_calendar/${filename}`);
      fetchCalendar();
    } catch (error) {
      console.error('Error deleting file:', error);
      setError('Failed to delete file.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4'>
      {error && <p className='text-red-500 mb-4'>{error}</p>}

      <div className='mb-4'>
        <h2 className='text-2xl font-semibold'>Upload Academic Calendar</h2>
        <input type='file' onChange={handleFileChange} className='mt-2 mb-2' />
        <button onClick={handleUpload} className='bg-blue-500 text-white p-2 rounded-md'>
          Upload
        </button>
      </div>

      {calendar ? (
        <div className='mt-4'>
          <h2 className='text-2xl font-semibold'>Current Academic Calendar</h2>
          <embed src={`/api/admin/acad_calendar/${calendar.filename}`} type="application/pdf" width="100%" height="600px" />
          <div className='mt-4'>
            <a href={`/api/admin/acad_calendar/${calendar.filename}`} className='text-blue-500' download>
              Download Current Calendar
            </a>
            <button onClick={() => handleDelete(calendar.filename)} className='bg-red-500 text-white p-2 rounded-md ml-4'>
              Delete
            </button>
          </div>
        </div>
      ) : (
        <p>No academic calendar uploaded.</p>
      )}
    </div>
  );
};

export default Calendar;
