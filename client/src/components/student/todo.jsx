import React, { useState } from 'react';

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='min-h-[100vh] h-fit flex justify-center '>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-2xl h-fit '>
        <div className='flex mb-4'>
          <input
            type='text'
            value={newTask}
            onChange={handleInputChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            placeholder='Add a new task'
          />
          <button
            onClick={handleAddTask}
            className='ml-2 bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
          >
            Add
          </button>
        </div>
        <ul className='list-disc pl-5'>
          {tasks.map((task, index) => (
            <li key={index} className='flex items-center mb-2'>
              <input
                type='checkbox'
                checked={task.completed}
                onChange={() => handleToggleTask(index)}
                className='form-checkbox h-5 w-5 text-indigo-600'
              />
              <span
                className={`ml-2 ${task.completed ? 'line-through text-gray-500' : ''}`}
              >
                {task.text}
              </span>
              <button
                onClick={() => handleDeleteTask(index)}
                className='ml-auto bg-red-600 text-white py-1 px-2 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm'
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
