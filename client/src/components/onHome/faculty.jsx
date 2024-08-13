import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header';
import Footer from '../footer';
import './style.css'; // Ensure you have the CSS file for styles

const departments = [
  { label: 'Artificial Intelligence And Data Science', value: 'Artificial Intelligence And Data Science' },
  { label: 'Civil Engineering', value: 'Civil Engineering' },
  { label: 'Chemical Engineering', value: 'Chemical Engineering' },
  { label: 'Computer Engineering', value: 'Computer Engineering' },
  { label: 'Computer Science And Design', value: 'Computer Science And Design' },
  { label: 'Electrical Engineering', value: 'Electrical Engineering' },
  { label: 'Electronics & Telecommunication Engineering', value: 'Electronics & Telecommunication Engineering' },
  { label: 'Information Technology', value: 'Information Technology' },
  { label: 'Mechanical Engineering', value: 'Mechanical Engineering' },
  { label: 'Robotics And Automation', value: 'Robotics And Automation' },
];

const Faculty = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedDepartment) {
      fetchFacultyData(selectedDepartment);
    }
  }, [selectedDepartment]);

  const fetchFacultyData = async (department) => {
    try {
      const response = await axios.get(`/api/admin/faculty?department=${department}`);
      setFacultyData(response.data);
    } catch (error) {
      console.error('Error fetching faculty data:', error);
      setError('Failed to fetch faculty data.');
    }
  };

  return (
    <div>
      <Header />
      <div className='w-full h-fit mb-8 flex flex-col'>
        {error && <p className='text-red-500 mb-4 text-center'>{error}</p>}
        <div className='w-full h-20 bg-Dblue text-white flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-semibold text-white'>Select a Department</h1>
        </div>
        <div className='w-full flex justify-center items-center mt-4'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {departments.map((department) => (
              <div
                key={department.value}
                onClick={() => setSelectedDepartment(department.value)}
                className={`w-48 h-28 border-2 rounded-lg shadow-lg flex flex-col justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-300 hover:border-blue-500 hover:shadow-2xl ${
                  selectedDepartment === department.value
                    ? 'bg-blue-300 border-blue-500 shadow-2xl'
                    : 'bg-white'
                }`}
              >
                <h2 className='text-lg font-medium text-gray-800 text-center p-2'>{department.label}</h2>
              </div>
            ))}
          </div>
        </div>
        {selectedDepartment && (
          <div className='mt-12'>
            <h2 className='text-2xl font-bold text-center mb-8'>Faculty Members - {selectedDepartment}</h2>
            <div className='w-full flex gap-8 flex-wrap justify-center'>
              {facultyData
                .filter((faculty) => faculty.department === selectedDepartment)
                .map((faculty) => (
                  <div key={faculty.id} className='w-80 h-96 border-2 rounded-lg shadow-lg flex flex-col p-4 bg-white'>
                    <div className='flex flex-col items-center mb-4'>
                      <img src={faculty.imgsrc} alt={faculty.name} className='w-48 h-48 object-cover rounded-full mr-4' />
                      <div className='flex flex-col text-center mt-2 gap-2'>
                        <h1 className='text-xl font-medium text-gray-800'>{faculty.name}</h1>
                        <p className='text-slate-700'>{faculty.position}</p>
                        <p className='text-slate-600'>{faculty.education}</p>
                      </div>
                    </div>
                    <p className='text-slate-600 font-medium text-center'>{faculty.department}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Faculty;