import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    { label: 'Robotics And Automation', value: 'Robotics And Automation' }
];

export default function Faculty() {
    const [facultyList, setFacultyList] = useState([]);
    const [editFaculty, setEditFaculty] = useState(null);
    const [formData, setFormData] = useState({ id: '', imgsrc: '', name: '', position: '', education: '', department: '' });

    useEffect(() => {
        fetchFaculty();
    }, []);

    const fetchFaculty = async () => {
        try {
            const response = await axios.get('/api/admin/faculty');
            setFacultyList(response.data);
        } catch (error) {
            console.error('Error fetching faculty:', error);
        }
    };

    const handleEditClick = (faculty) => {
        setEditFaculty(faculty);
        setFormData(faculty);
    };

    const handleAddClick = () => {
        setEditFaculty(null);
        setFormData({ id: '', imgsrc: '', name: '', position: '', education: '', department: '' });
    };

    const handleDeleteClick = async (id) => {
        try {
            await axios.delete('/api/admin/faculty', { data: { id } });
            fetchFaculty();
        } catch (error) {
            console.error('Error deleting faculty:', error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editFaculty) {
                // Update existing faculty
                await axios.put('/api/admin/faculty', formData);
            } else {
                // Add new faculty
                await axios.post('/api/admin/faculty', formData);
            }
            fetchFaculty();
            setEditFaculty(null);
            setFormData({ id: '', imgsrc: '', name: '', position: '', education: '', department: '' });
        } catch (error) {
            console.error('Error saving faculty:', error);
        }
    };

    const card = (faculty) => (
        <div key={faculty.id} className='w-full h-32 border-2 rounded-lg shadow-lg flex items-center gap-4 p-4 bg-white'>
            <img src={faculty.imgsrc} alt={faculty.name} className='w-24 h-24 object-cover rounded-full' />
            <div className='flex-1'>
                <h1 className='text-xl font-medium text-gray-800'>{faculty.name}</h1>
                <p className='text-slate-700'>{faculty.position}</p>
                <p className='text-slate-600'>{faculty.education}</p>
                <p className='text-slate-600'>{faculty.department}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <button onClick={() => handleEditClick(faculty)} className='text-blue-500 hover:underline'>Edit</button>
                <button onClick={() => handleDeleteClick(faculty.id)} className='text-red-500 hover:underline'>Delete</button>
            </div>
        </div>
    );

    return (
        <div>
            <div className='w-full mb-8'>
                <div className='w-full h-20 bg-Dblue text-white flex flex-col justify-center items-center'>
                    <i className='text-xl text-white'>Page of</i>
                    <h1 className='text-3xl font-semibold text-white'>Faculty Management</h1>
                </div>
                <div className='w-full flex flex-col gap-4 mt-8'>
                    {facultyList.map(faculty => card(faculty))}
                </div>
            </div>

            <div className='flex justify-center mb-8'>
                <button onClick={handleAddClick} className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>Add New Faculty</button>
            </div>

            <form onSubmit={handleFormSubmit} className='flex flex-col gap-4 max-w-md mx-auto mb-8'>
                <input
                    type='text'
                    name='imgsrc'
                    value={formData.imgsrc}
                    onChange={handleInputChange}
                    placeholder='Image Source'
                    className='p-2 border rounded-md'
                    required
                />
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Name'
                    className='p-2 border rounded-md'
                    required
                />
                <input
                    type='text'
                    name='position'
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder='Position'
                    className='p-2 border rounded-md'
                    required
                />
                <input
                    type='text'
                    name='education'
                    value={formData.education}
                    onChange={handleInputChange}
                    placeholder='Education'
                    className='p-2 border rounded-md'
                    required
                />
                <select
                    name='department'
                    value={formData.department}
                    onChange={handleInputChange}
                    className='p-2 border rounded-md'
                    required
                >
                    <option value='' disabled>Select Department</option>
                    {departments.map((dept) => (
                        <option key={dept.value} value={dept.value}>
                            {dept.label}
                        </option>
                    ))}
                </select>
                <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
                    {editFaculty ? 'Update' : 'Add'}
                </button>
            </form>
        </div>
    );
}