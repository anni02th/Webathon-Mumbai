import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import AdminPage from './components/admin/adminpage.jsx';
import StudentPage from './components/student/studentpage.jsx';
import FacultyPage from './components/faculty/facultypage.jsx';
import Faculty from './components/onHome/faculty.jsx';
import Department from './components/onHome/department.jsx';
import Resources from './components/onHome/resources.jsx';
import Contact from './components/contact.jsx';
import Signup from './components/login/signin.jsx';
import Login from './components/login/login.jsx';

import { AuthProvider } from "./components/context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AlumniForum from './components/alumnipage.jsx';
import StudyBuddy from './components/student/studybuddy.jsx';
import GPT from './components/student/gpt.jsx';
import Blog from './components/onHome/blog.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <AdminPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/student" 
            element={
              <ProtectedRoute allowedRoles={['Student']}>
                <StudentPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/facultypage" 
            element={
              <ProtectedRoute allowedRoles={['Faculty']}>
                <FacultyPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/alumni" 
            element={
              <ProtectedRoute allowedRoles={['Alumni']}>
                <AlumniForum />
              </ProtectedRoute>
            } 
          />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/departments" element={<Department />} />
          <Route path="/resource" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/studybuddy" element={<StudyBuddy />} />
          <Route path="/GPT" element={<GPT />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
