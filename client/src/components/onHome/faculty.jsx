import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header'
import Footer from '../footer'

export default function Faculty() {
    const [facultyList, setFacultyList] = useState([]);

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

    const card = (faculty) => (
        <div key={faculty.id} className='w-72 h-72 border-2 rounded-lg shadow-lg flex flex-col gap-2 justify-center items-center p-2'>
            <img src={faculty.imgsrc} alt={faculty.name} className='w-36 h-36 object-fill' />
            <h1 className='text-xl font-medium'>{faculty.name}</h1>
            <p className='text-slate-700'>{faculty.position}</p>
            <p className='text-slate-700 text-center'>{faculty.education}</p>
        </div>
    );

    return (
        <div>
            <Header/>
            <div className='w-[100%] mb-8'>
                <div className='w-[100%] h-20 bg-Dblue text-white flex flex-col justify-center items-center'>
                    <i className='text-xl text-white'>Department of</i>
                    <h1 className='text-3xl font-semibold text-white'>Computer Engineering</h1>
                </div>
                <div className='w-[100%] flex gap-16 mt-8 flex-wrap justify-center'>
                    {facultyList.map((faculty) => card(faculty))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}