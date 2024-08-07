import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function StudyBuddy() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('/api/notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const downloadNote = async (file_id, filename) => {
    try {
      const response = await axios.get(`/api/download_note/${file_id}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading note:', error);
    }
  };

  return (
    <div className='h-[100vh] w-fit'>
      <div className='mx-4 flex flex-wrap gap-4 justify-center'>
        {notes.map(note => (
          <div key={note.file_id} className={`w-72 h-fit flex flex-col border-2 rounded-lg border-b-${note.branch === 'Data Structures' ? 'teal' : note.branch === 'Operating Systems' ? 'rose' : 'Dbblue'}-600 border-b-4`}>
            <div className={`h-10 bg-${note.branch === 'Data Structures' ? 'teal' : note.branch === 'Operating Systems' ? 'rose' : 'Dbblue'}-600 rounded-t-md p-4 flex items-center`}>
              <h1 className='text-white text-xl font-medium'>{note.subject}</h1>
            </div>
            <div className='m-2 p-2 border-4 border-teal-600 rounded-md'>
              <p><strong>Unit:</strong> {note.unit}</p>
              <p><strong>Branch:</strong> {note.branch}</p>
              <p><strong>Uploaded By:</strong> {note.uploaded_by}</p>
              <p><strong>Division:</strong> {note.div}</p>
              <p><strong>Year:</strong> {note.year}</p>
            </div>
            <button 
              onClick={() => downloadNote(note.file_id, note.filename)} 
              className='p-2 bg-teal-600 rounded-sm m-2 self-end text-white'>
              Download Note
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
