import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header'
import Footer from '../footer'


const Department = () => {


  const [departments, setDepartments] = useState([]);
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

  return (
    <div className='flex flex-col'>
      <Header />
      
      <div className='flex flex-col m-4 gap-4 max-w-[1000px] mx-auto'>
        {departments.map((dept, index) => (
          <div key={index} className='w-[100%] h-fit relative border-2 rounded-lg border-b-4 border-b-Dblue flex flex-col'>
            <div className='w-[100%] h-fit bg-Dblue overflow-hidden text-white p-2 rounded-t-lg'>
              <h1 className='text-xl text-white'>Department of</h1>
              <h1 className='sm:text-3xl text-2xl font-semibold text-white'>{dept.name}</h1>
            </div>
            <img 
              src={dept.image || `/department${index + 1}.png`} 
              alt={dept.name} 
              className='w-auto sm:h-64 h-[100%] m-2 object-contain sm:absolute sm:right-8 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:rounded-full'
            />
            <div className='sm:w-[65%] w-[100%] h-fit text-gray-700 p-4 mb-8 gap-2 flex flex-col font-medium'>
              <p>{dept.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Department;