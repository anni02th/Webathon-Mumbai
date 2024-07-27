import React from 'react'
import Page1 from './lander/page1'
import Page2 from './lander/page2';
import Page3 from './lander/page3';
import Page4 from './lander/page4';
import Page5 from './lander/page5';
import Page6 from './lander/page6';
import Header from './header';
import Footer from './footer';

const Home = () => {
   return (
     <div className='min-h-screen flex flex-col bg-[#EAEAEA]'>
       <Header/>
       <main className="flex-grow">
        <Page1 />
        <Page2 />
        <Page3/>
        <Page4 />
        <Page5 />
        <Page6 />
       </main>
       <Footer/>
     </div>
   );
 }

export default Home