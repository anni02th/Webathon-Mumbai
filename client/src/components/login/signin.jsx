import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';

const Signin = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialMode = queryParams.get('mode') === 'signup';

  const [isSignUpState, setIsSignUpState] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Admin');
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsSignUpState(true);
  };

  const handleSignInClick = () => {
    setIsSignUpState(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Replace this mock authentication logic with your actual API call
    if (email === 'admin@example.com' && password === 'adminpass' && role === 'Admin') {
      navigate('/admin');
    } else if (email === 'student@example.com' && password === 'studentpass' && role === 'Student') {
      navigate('/student');
    } else if (email === 'faculty@example.com' && password === 'facultypass' && role === 'Faculty') {
      navigate('/facultypage');
    } 
    else {
      alert('Invalid credentials or role');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-blue-900 max-sm:hidden "></div>

      <div className="w-3/4 flex flex-col items-center justify-center p-10 bg-white max-sm:w-full">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 ">
            {isSignUpState ? 'Sign Up' : 'Login'}
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            {isSignUpState && (
              <>
                <div className="flex gap-4">
                  <div className="w-full">
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-full">
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
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Email or Phone Number"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="date"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Date of birth (MM/DD/YY)
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
              </>
            )}
            {!isSignUpState && (
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
                /> <br />
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
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            )}
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
            {isSignUpState && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Confirm Password"
                />
              </div>
            )}
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
              <a
                className="text-gray-700 text-sm font-bold"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            {isSignUpState && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                />
                <label className="ml-2 text-gray-700 text-sm font-bold">
                  I agree to all the <a href="#">Terms and Privacy policy</a>
                </label>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isSignUpState ? 'Create Account' : 'Login'}
            </button>
            {!isSignUpState && (
              <button
                type="button"
                className="w-full flex bg-gray-200 justify-center hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSignUpClick}
              >
                <AiOutlineGoogle className="mr-2 m-1" />
                Login with Google
              </button>
            )}
          </form>
          <br />
          {!isSignUpState && (
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
          )}
          {isSignUpState && (
            <p className="text-center text-gray-700 text-sm font-bold">
              Already have an account?{' '}
              <button
                type="button"
                className="text-blue-500 hover:text-blue-700"
                onClick={handleSignInClick}
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
