import React from 'react'
import HeaderL from '../HeaderL';
import Footer from '../footer';
import Sidebar from '../sidebar';
import Card from '../card';

const Adminpage = () => {
  return (
    <div>
      <HeaderL />
      <section className='flex h-[100vh]'>
        <Sidebar />
        <div className='flex p-4 gap-8 '>
          <Card heading = {'Departments'} srcimg="./public/admin1.png" />
          <Card heading = {'Faculty'} srcimg="./public/admin2.png" />
          <Card heading = {'Academic Calender'} srcimg="./public/admin3.png" />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Adminpage;