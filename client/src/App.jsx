import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Signin from './components/login/signin.jsx';
import AdminPage from './components/admin/adminpage.jsx';
import StudentPage from './components/student/studentpage.jsx';
import FacultyPage from './components/faculty/facultypage.jsx';
import Faculty from './components/onHome/faculty.jsx';
import Department from './components/onHome/department.jsx';
import Resources from './components/onHome/resources.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/facultypage" element={<FacultyPage />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/resource" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
