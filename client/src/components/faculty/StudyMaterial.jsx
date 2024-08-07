import React, { useState } from 'react';
import axios from 'axios';

export default function StudyMaterial() {
  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState('');
  const [unit, setUnit] = useState('');
  const [branch, setBranch] = useState('');
  const [uploadedBy, setUploadedBy] = useState('');
  const [div, setDiv] = useState('');
  const [year, setYear] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !subject || !unit || !branch || !uploadedBy || !div || !year) {
      alert("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('subject', subject);
    formData.append('unit', unit);
    formData.append('branch', branch);
    formData.append('uploaded_by', uploadedBy);
    formData.append('div', div);
    formData.append('year', year);

    try {
      const response = await axios.post('/api/upload_note', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error uploading note:', error);
      alert('Failed to upload note.');
    }
  };

  return (
    <div className='h-[100vh] w-fit'>
      <form onSubmit={handleSubmit} className='mx-4 flex flex-wrap gap-4 justify-center'>
        <div className='w-72 h-fit border-2 rounded-lg border-b-teal-600 border-b-4'>
          <div className='h-10 bg-teal-600 rounded-t-md p-4 flex items-center'>
            <h1 className='text-white text-xl font-medium'>Data Structures</h1>
          </div>
          <input type="file" onChange={handleFileChange} className='m-4' />
          <input type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} className='m-4' />
          <input type="text" placeholder="Unit" onChange={(e) => setUnit(e.target.value)} className='m-4' />
          <input type="text" placeholder="Branch" onChange={(e) => setBranch(e.target.value)} className='m-4' />
          <input type="text" placeholder="Uploaded By" onChange={(e) => setUploadedBy(e.target.value)} className='m-4' />
          <input type="text" placeholder="Division" onChange={(e) => setDiv(e.target.value)} className='m-4' />
          <input type="text" placeholder="Year" onChange={(e) => setYear(e.target.value)} className='m-4' />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">Upload Note</button>
        </div>
      </form>
    </div>
  );
}
