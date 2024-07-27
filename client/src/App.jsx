import { useState } from 'react';
import './main.css';
import Footer from './components/footer'
import Hero from './components/page1'
import Header from './components/header'
import Page2 from './components/page2';
import Page3 from './components/page3';

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <main className="flex-grow">
        <Hero />
        <Page2 />
        <Page3 />
        {/* Additional page content can go here */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
