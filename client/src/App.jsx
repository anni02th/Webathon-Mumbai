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
          <Route path='/' element={ <Home />}></Route>
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
