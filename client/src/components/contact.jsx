import React, { useState } from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import { PiBuildingApartment } from 'react-icons/pi';
import { HiLocationMarker } from 'react-icons/hi';
import { IoCallSharp } from 'react-icons/io5';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    yourMess: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await axios.post('https://ombirla.pythonanywhere.com/send-mail', formData);
      alert('Mail sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        yourMess: '',
      });
    } catch (error) {
      console.error('There was an error sending the mail!', error);
      setError('There was an error sending the mail. Please try again later.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-full m-auto">
      <Header />
      <div className="flex flex-col h-[100vh] justify-center items-center p-4 m-4">
        <div className="flex flex-col justify-center items-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-center">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
        </div>
        <div className="flex w-full max-w-4xl justify-center items-center">
          <div className="w-full lg:w-2/3 p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-Dbblue focus:border-Dbblue sm:text-sm" />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-Dbblue focus:border-Dbblue sm:text-sm" />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-Dbblue focus:border-Dbblue sm:text-sm" />
                </div>
                <div className="flex-1">
                  <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">Phone No.</label>
                  <input type="tel" name="phoneNo" id="phoneNo" value={formData.phoneNo} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-Dbblue focus:border-Dbblue sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="yourMess" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="yourMess" id="yourMess" value={formData.yourMess} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-Dbblue focus:border-Dbblue sm:text-sm" rows="4"></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-Dblue hover:bg-Dbblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Dbblue" disabled={isSubmitting}>Submit</button>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
          </div>
          <div className="w-1/3 hidden lg:flex flex-col items-center justify-center">
            <div className="mb-4 flex flex-col m-auto items-center">
              <PiBuildingApartment className='w-[60px] h-[60px] bg-slate-300 p-2 rounded-lg'/>
              <h1 className="text-lg font-semibold">College info:</h1>
              <h5 className="text-center">K.K.Wagh College of Engineering Education and Research Nashik</h5>
            </div>
            <div className="mb-4 flex flex-col m-auto items-center">
              <HiLocationMarker className='w-[60px] h-[60px] bg-slate-300 p-2 rounded-lg'/>
              <h1 className="text-lg font-semibold">Address:</h1>
              <h5 className="text-center">Hirabai Haridas Vidyanagari, Mumbai Agra Road Amrutdham, Panchavati, Nashik, Maharashtra 422003</h5>
            </div>
            <div className="mb-4 flex flex-col m-auto items-center">
              <IoCallSharp className='w-[60px] h-[60px] bg-slate-300 p-2 rounded-lg'/>
              <h1 className="text-lg font-semibold">Call us:</h1>
              <h5 className="text-center"><a href="tel:02532512867" className='hover:text-Dblue font-medium'>to College</a> | <a href="tel:9356738604" className='hover:text-Dblue font-medium'>to Webadmin</a></h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
