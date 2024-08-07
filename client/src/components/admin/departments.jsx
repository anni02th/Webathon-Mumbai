import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Department = () => {
  const [departments, setDepartments] = useState([]);
  const [newDepartment, setNewDepartment] = useState({ name: '', description: '', image: '' });
  const [deleteDepartmentName, setDeleteDepartmentName] = useState('');

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('/api/admin/departments');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const handleAddDepartment = async () => {
    try {
      await axios.post('/api/admin/departments', newDepartment);
      fetchDepartments();
      setNewDepartment({ name: '', description: '', image: '' });
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };

  const handleDeleteDepartment = async () => {
    try {
      await axios.delete('/api/admin/departments', { data: { name: deleteDepartmentName } });
      fetchDepartments();
      setDeleteDepartmentName('');
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  return (
    <div className='flex flex-col m-4 gap-4 max-w-[1000px] mx-auto'>
      {/* Display Departments */}
      <div className='flex flex-wrap gap-4'>
        {departments.map((dept, index) => (
          <div key={index} className='w-full md:w-1/3 lg:w-1/4 border-2 rounded-lg border-b-4 border-b-Dblue flex flex-col relative'>
            <div className='w-full bg-Dblue text-white p-2 rounded-t-lg'>
              <h1 className='text-xl'>Department of</h1>
              <h2 className='text-2xl md:text-3xl font-semibold'>{dept.name}</h2>
            </div>
            <img 
              src={dept.image || `/department${index + 1}.png`} 
              alt={dept.name} 
              className='w-full h-auto md:h-64 object-cover rounded-b-lg'
            />
            <div className='p-4 text-gray-700'>
              <p>{dept.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Department Form */}
      <div className='border-2 rounded-lg border-b-4 border-b-Dblue p-4'>
        <h3 className='text-xl text-Dblue mb-2'>Add Department</h3>
        <input
          type="text"
          placeholder="Department Name"
          value={newDepartment.name}
          onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
          className='p-2 border rounded-md mb-2 w-full'
        />
        <textarea
          placeholder="Description"
          value={newDepartment.description}
          onChange={(e) => setNewDepartment({ ...newDepartment, description: e.target.value })}
          className='p-2 border rounded-md mb-2 w-full'
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newDepartment.image}
          onChange={(e) => setNewDepartment({ ...newDepartment, image: e.target.value })}
          className='p-2 border rounded-md mb-2 w-full'
        />
        <button onClick={handleAddDepartment} className='bg-Dblue text-white p-2 rounded-md hover:bg-Dblue-dark'>
          Add
        </button>
      </div>

      {/* Delete Department Form */}
      <div className='border-2 rounded-lg border-b-4 border-b-Dblue p-4'>
        <h3 className='text-xl text-Dblue mb-2'>Delete Department</h3>
        <input
          type="text"
          placeholder="Department Name to Delete"
          value={deleteDepartmentName}
          onChange={(e) => setDeleteDepartmentName(e.target.value)}
          className='p-2 border rounded-md mb-2 w-full'
        />
        <button onClick={handleDeleteDepartment} className='bg-red-600 text-white p-2 rounded-md hover:bg-red-700'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Department;
