import React from 'react'
import HeaderL from '../HeaderL'
import Footer from '../footer'
import Sidebar from '../sidebar'
import Card from '../card';

const FacultyPage = () => {
  return (
    <div>
      <HeaderL />
      <section className='flex h-[100vh]'>
        <Sidebar />
        <div className='flex p-4 gap-8 '>
          <Card heading={"Upload Study Material"} srcimg="./public/faculty1.png" />
          <Card heading={"Update Attendance"} srcimg="./public/faculty2.png" /> 
          <Card heading={"View Time Table"} srcimg="./public/faculty3.png" />
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default FacultyPage