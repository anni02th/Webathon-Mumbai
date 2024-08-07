import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Faculty() {
    const [facultyList, setFacultyList] = useState([]);
    const [editFaculty, setEditFaculty] = useState(null);
    const [formData, setFormData] = useState({ id: '', imgsrc: '', name: '', position: '', education: '' });

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
        setFormData({ id: '', imgsrc: '', name: '', position: '', education: '' });
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
            setFormData({ id: '', imgsrc: '', name: '', position: '', education: '' });
        } catch (error) {
            console.error('Error saving faculty:', error);
        }
    };

    const card = (faculty) => (
        <div key={faculty.id} className='w-72 h-72 border-2 rounded-lg shadow-lg flex flex-col gap-2 justify-center items-center p-2'>
            <img src={faculty.imgsrc} alt="" className='w-36 h-36 object-fill' />
            <h1 className='text-xl font-medium'>{faculty.name}</h1>
            <p className='text-slate-700'>{faculty.position}</p>
            <p className='text-slate-700 text-center' >{faculty.education}</p>
            <button onClick={() => handleEditClick(faculty)} className='text-blue-500'>Edit</button>
            <button onClick={() => handleDeleteClick(faculty.id)} className='text-red-500'>Delete</button>
        </div>
    );

    return (
        <div>
            <div className='w-[100%] mb-8'>
                <div className='w-[100%] h-20 bg-Dblue text-white flex flex-col justify-center items-center'>
                    <i className='text-xl text-white'>Department of</i>
                    <h1 className='text-3xl font-semibold text-white'>Computer Engineering</h1>
                </div>
                <div className='w-[100%] flex gap-16 mt-8 flex-wrap justify-center'>
                    {facultyList.map((faculty) => card(faculty))}
                </div>
            </div>

            <button onClick={handleAddClick} className='bg-green-500 text-white mb-4'>Add New Faculty</button>

            <form onSubmit={handleFormSubmit} className='flex flex-col gap-4'>
                <input type='text' name='imgsrc' value={formData.imgsrc} onChange={handleInputChange} placeholder='Image Source' required />
                <input type='text' name='name' value={formData.name} onChange={handleInputChange} placeholder='Name' required />
                <input type='text' name='position' value={formData.position} onChange={handleInputChange} placeholder='Position' required />
                <input type='text' name='education' value={formData.education} onChange={handleInputChange} placeholder='Education' required />
                <button type='submit' className='bg-blue-500 text-white'>{editFaculty ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
}