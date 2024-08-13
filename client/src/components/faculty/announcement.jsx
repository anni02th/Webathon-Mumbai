import React, { useState } from 'react';
import axios from 'axios';

const Announcement = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const response = await axios.post('/api/announcements', { title, message });
      setStatus(response.data.msg || 'Announcement posted successfully!');
      setTitle('');
      setMessage('');
    } catch (error) {
      setStatus(`Error: ${error.response?.data.error || 'Error posting announcement.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container p-4 h-[100vh]'>
      <h2 className='text-2xl font-bold mb-4'>Post an Announcement</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
          className='p-2 border rounded'
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message'
          className='p-2 border rounded'
          rows='4'
          required
        />
        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white rounded'
          disabled={loading}
        >
          {loading ? 'Posting...' : 'Post Announcement'}
        </button>
        {status && <p className='mt-2'>{status}</p>}
      </form>
    </div>
  );
};

export default Announcement;
