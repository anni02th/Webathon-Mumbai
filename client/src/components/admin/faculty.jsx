import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Header from '../header';
import Footer from '../footer';

const Faculty = () => {
  const { token } = useContext(AuthContext);
  const [facultyData, setFacultyData] = useState([]);
  const [newFaculty, setNewFaculty] = useState({ name: '', position: '', education: '', email: '', imgsrc: '' });
  const [deleteFacultyEmail, setDeleteFacultyEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFacultyData();
  }, [token]);

  const fetchFacultyData = async () => {
    try {
      const response = await axios.get('/api/admin/faculty', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setFacultyData(response.data);
    } catch (error) {
      console.error('Error fetching faculty data:', error);
      setError('Failed to fetch faculty data.');
    }
  };

  const handleAddFaculty = async () => {
    try {
      await axios.post('/api/admin/faculty', newFaculty, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchFacultyData();
      setNewFaculty({ name: '', position: '', education: '', email: '', imgsrc: '' });
    } catch (error) {
      console.error('Error adding faculty:', error);
      setError('Failed to add faculty.');
    }
  };

  const handleDeleteFaculty = async () => {
    try {
      await axios.delete('/api/admin/faculty', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: { email: deleteFacultyEmail }
      });
      fetchFacultyData();
      setDeleteFacultyEmail('');
    } catch (error) {
      console.error('Error deleting faculty:', error);
      setError('Failed to delete faculty.');
    }
  };

  const card = (imgsrc, name, position, education) => (
    <div className='w-72 h-80 border-2 rounded-lg shadow-lg flex flex-col gap-2 justify-center items-center p-4 bg-white'>
      <img src={imgsrc} alt={name} className='w-36 h-36 object-cover rounded-full' />
      <h1 className='text-xl font-medium text-gray-800'>{name}</h1>
      <p className='text-slate-700'>{position}</p>
      <p className='text-slate-600 text-center'>{education}</p>
    </div>
  );

  return (
    <div className='flex flex-col m-4 gap-4 max-w-[1000px] self-center'>
      {error && <p className='text-red-500 mb-4'>{error}</p>}
      {facultyData.length > 0 ? (
        facultyData.map((department, index) => (
          <div key={index} className='mb-12'>
            <div className='w-full h-20 bg-Dblue text-white flex flex-col justify-center items-center mb-4'>
              <i className='text-xl text-white'>Department of</i>
              <h1 className='text-3xl font-semibold text-white'>{department.name}</h1>
            </div>
            <div className='w-full flex gap-8 mt-8 flex-wrap justify-center'>
              {department.faculty.map((facultyMember) => (
                <div key={facultyMember.email}>
                  {card(facultyMember.imgsrc, facultyMember.name, facultyMember.position, facultyMember.education)}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className='text-gray-700'>No faculty data available.</p>
      )}

      <div className='mb-12'>
        <h3 className='text-2xl font-semibold text-Dblue mb-4'>Add Faculty</h3>
        <div className='flex flex-col gap-4'>
          <input
            type="text"
            placeholder="Name"
            value={newFaculty.name}
            onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })}
            className='p-2 border rounded-md'
          />
          <input
            type="text"
            placeholder="Position"
            value={newFaculty.position}
            onChange={(e) => setNewFaculty({ ...newFaculty, position: e.target.value })}
            className='p-2 border rounded-md'
          />
          <input
            type="text"
            placeholder="Education"
            value={newFaculty.education}
            onChange={(e) => setNewFaculty({ ...newFaculty, education: e.target.value })}
            className='p-2 border rounded-md'
          />
          <input
            type="email"
            placeholder="Email"
            value={newFaculty.email}
            onChange={(e) => setNewFaculty({ ...newFaculty, email: e.target.value })}
            className='p-2 border rounded-md'
          />
          <input
            type="text"
            placeholder="Image Source"
            value={newFaculty.imgsrc}
            onChange={(e) => setNewFaculty({ ...newFaculty, imgsrc: e.target.value })}
            className='p-2 border rounded-md'
          />
          <button onClick={handleAddFaculty} className='bg-Dblue text-white p-2 rounded-md hover:bg-Dblue-dark'>
            Add
          </button>
        </div>
      </div>

      <div>
        <h3 className='text-2xl font-semibold text-Dblue mb-4'>Delete Faculty</h3>
        <div className='flex flex-col gap-4'>
          <input
            type="email"
            placeholder="Faculty Email to Delete"
            value={deleteFacultyEmail}
            onChange={(e) => setDeleteFacultyEmail(e.target.value)}
            className='p-2 border rounded-md'
          />
          <button onClick={handleDeleteFaculty} className='bg-red-600 text-white p-2 rounded-md hover:bg-red-700'>
            Delete
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faculty;
