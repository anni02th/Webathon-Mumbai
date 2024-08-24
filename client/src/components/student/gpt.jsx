import React, { useState } from 'react';
import axios from 'axios';

export default function GPT() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const fetchResponse = async () => {
    setLoading(true); // Show the loader
    setResponse(''); // Clear previous response

    try {
      const formData = new FormData();
      formData.append('query', input);
      if (file) {
        formData.append('file', file);
      }

      const res = await axios.post('/api/personalizedgpt', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data.taskId) {
        const pollInterval = setInterval(async () => {
          try {
            const result = await axios.get(`/api/personalizedgpt/status/${res.data.taskId}`);
            if (result.data.status === 'completed') {
              clearInterval(pollInterval);
              setResponse(result.data.response);
              setLoading(false); // Hide the loader
            }
          } catch (error) {
            clearInterval(pollInterval);
            console.error('Error during polling:', error);
            setLoading(false); // Hide the loader in case of error
            alert('Failed to get response.');
          }
        }, 1000);
      } else {
        setLoading(false);
        alert('Failed to start task.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to get response.');
      setLoading(false); // Hide the loader in case of error
    }
  };

  return (
    <div className="h-[70vh] w-full p-4 flex flex-col items-center justify-center">
      <div className='h-full w-full flex items-center justify-center'>
        {loading && (
          <div className="flex items-center justify-center mt-4">
            <div className="w-8 h-8 border-4 border-t-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
        {response && !loading && (
          <div className="mt-4 p-2 bg-gray-100 rounded w-full">
            <h3 className="font-bold">Response:</h3>
            <p>{response}</p>
          </div>
        )}
      </div>
      <div className='flex justify-start items-center absolute'>
        <img src="" alt="" className='w-60'/>
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        rows="4"
        placeholder="Ask anything..."
      />
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button onClick={fetchResponse} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        Get Response
      </button>

    </div>
  );
}
