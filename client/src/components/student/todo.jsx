import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to fetch tasks
  const fetchTasks = () => {
    axios.get('/api/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
        alert('Failed to fetch tasks.');
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = () => {
    if (newTask) {
      axios.post('/api/tasks', { task: newTask })
        .then(() => {
          fetchTasks();
          setNewTask('');
        })
        .catch(error => {
          console.error('Error adding task:', error);
          alert('Failed to add task.');
        });
    }
  };

  const removeTask = (id) => {
    axios.delete(`/api/tasks/${id}`)
      .then(() => {
        fetchTasks();
      })
      .catch(error => {
        console.error('Error removing task:', error);
        alert('Failed to remove task.');
      });
  };

  return (
    <div className="h-[100vh] p-4">
      <h1 className="text-2xl mb-4">To-Do List</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          className="border p-2 rounded flex-grow mr-2"
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task._id} className="flex justify-between items-center mb-2">
            <span>{task.task}</span>
            <button
              onClick={() => removeTask(task._id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
