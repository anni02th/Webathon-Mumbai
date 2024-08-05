import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useAuth } from '../context/AuthContext'; // Ensure you have this hook

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const navigate = useNavigate(); 
  const { setUser } = useAuth();

  // Remove the isLoggedIn state and related effect
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigateToLastPage(); // If logged in, navigate to last page
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
        role,
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        setUser({ email, role, token: response.data.token }); // Ensure setUser updates the context
        alert('Logged in successfully!');
        navigateToLastPage(); // Navigate after successful login
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const navigateToLastPage = () => {
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage) {
      navigate(lastPage);
    } else {
      switch (role) {
        case 'Admin':
          navigate('/admin');
          break;
        case 'Student':
          navigate('/student');
          break;
        case 'Faculty':
          navigate('/facultypage');
          break;
        default:
          navigate('/');
      }
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-blue-900 max-sm:hidden "></div>
      <div className="w-3/4 flex flex-col items-center justify-center p-10 bg-white max-sm:w-full">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Login</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="relative w-full mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email or phone number
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border mb-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email or Phone Number"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="appearance-none w-full px-4 py-3 text-gray-700 bg-gray-200 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Admin">as Admin</option>
                <option value="Faculty">as Faculty</option>
                <option value="Student">as Student</option>
                <option value="Alumni">as Alumni</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                />
                <label className="ml-2 text-gray-700 text-sm font-bold">
                  Remember me
                </label>
              </div>
              <a className="text-gray-700 text-sm font-bold" href="#">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <button
              type="button"
              className="w-full flex bg-gray-200 justify-center hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSignUpClick}
            >
              <AiOutlineGoogle className="mr-2 m-1" />
              Login with Google
            </button>
          </form>
          <br />
          <p className="text-center text-gray-700 text-sm font-bold">
            Don't have an account?{' '}
            <button
              type="button"
              className="text-blue-500 hover:text-blue-700"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;