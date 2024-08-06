import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CommunityChat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch initial messages
    axios.get('/api/messages')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
        alert('Failed to fetch messages.');
      });
  }, []);

  const sendMessage = () => {
    if (newMessage) {
      axios.post('/api/messages', { message: newMessage })
        .then(response => {
          setMessages([...messages, response.data.message]);
          setNewMessage('');
        })
        .catch(error => {
          console.error('Error sending message:', error);
          alert('Failed to send message.');
        });
    }
  };

  return (
    <div className="h-[70vh] w-full p-4 relative">
      <div className='h-fit w-full absolute bottom-4 '>
      <div className="mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2 p-2 bg-gray-100 rounded">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          className="p-2 border rounded flex-grow"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </div>
      </div>
    </div>
  );
}
