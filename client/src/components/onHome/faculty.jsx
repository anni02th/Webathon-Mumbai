import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const Faculty = () => {
    const [facultyData, setFacultyData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/faculty')
            .then(response => {
                setFacultyData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

  const card = (imgsrc, name, position, education) => (
    <div className='w-72 h-80 border-2 rounded-lg shadow-lg flex flex-col gap-2 justify-center items-center p-4 bg-white'>
      <img src={imgsrc} alt={name} className='w-36 h-36 object-cover rounded-full' />
      <h1 className='text-xl font-medium text-gray-800'>{name}</h1>
      <p className='text-slate-700'>{position}</p>
      <p className='text-slate-600 text-center'>{education}</p>
    </div>
  );

    return (
        <div>
            <Header />
            <div className='w-[100%] mb-8'>
                <div className='w-[100%] h-20 bg-Dblue flex flex-col justify-center items-center'>
                    <i className='text-xl text-white'>Department of</i>
                    <h1 className='text-3xl font-semibold text-white'>Computer Engineering</h1>
                </div>
                <div className='w-[100%] flex gap-16 mt-8 flex-wrap justify-center '>
                    {facultyData.map((faculty, index) => card(faculty.imgsrc, faculty.name, faculty.position, faculty.education))}
                </div>
              ))}
            </div>
            <Footer />
        </div>
    );
};

export default Faculty;
