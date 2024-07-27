import { useState } from 'react';
import './main.css';
import Header from './components/header'
import Landerpage from './components/landerpage';
import Footer from './components/footer'


function App() {
  return (
    <div className='min-h-screen flex flex-col bg-[#EAEAEA]'>
      <Header/>
      <main className="flex-grow">
        <Landerpage />
        {/* Additional page content can go here */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
