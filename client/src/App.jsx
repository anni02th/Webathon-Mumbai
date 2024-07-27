import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './main.css';
import Home from './components/Home';
import Signin from './components/login/signin';

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-[#EAEAEA]'>
      <BrowserRouter>

        <Routes>
<<<<<<< HEAD
          <Route path='/' element={ <Home />}></Route>
=======

          <Route path="/" element={ <Home />}></Route>
>>>>>>> 500fde8f23afd69cc2515e6da1f87195292b5cef
          <Route path="/signin" element={<Signin />}></Route>
          {/* <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/resetPassword/:token" element={<ResetPassword />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route> */}

        </Routes>

      </BrowserRouter>
      </div>
  );
}

export default App;
