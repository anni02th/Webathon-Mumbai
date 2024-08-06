import React, { useState } from 'react';
import axios from 'axios';

export default function GPT() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const fetchResponse = () => {
    axios.post('/api/gpt', { input })
      .then(res => {
        setResponse(res.data.response);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to get response.');
      });
  };

  return (
    <div className="h-[100vh] p-4">
      <h1 className="text-2xl mb-4">Ask GPT</h1>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        rows="4"
        placeholder="Ask anything..."
      />
      <button
        onClick={fetchResponse}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Response
      </button>
      {response && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <h3 className="font-bold">Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
