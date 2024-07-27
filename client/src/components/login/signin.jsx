import { useState } from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';

const Signin = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-blue-900"></div>
      <div className="w-3/4 flex flex-col items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {isSignUp ? 'Sign Up' : 'Login'}
          </h2>
          {!isSignUp && (
            <div className="relative w-full mb-4">
              <select
                className="appearance-none w-full px-4 py-3 text-gray-700 bg-gray-200 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
               <option value="as-Admin">as Admin</option>
               <option value="as-Faculty">as Faculty</option>
               <option value="as-Student">as Student</option>
               <option value="as-Alumni">as Alumni</option>
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
          <form className="space-y-4">
            {isSignUp && (
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
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Email or Phone Number"
                    />
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
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     placeholder="Password"
                  />
                  </div>
            {isSignUp && (
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
            {isSignUp && (
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
            {isSignUp ? 'Create Account' : 'Login'}
            </button>
            {!isSignUp && (
              <button
                type="button"
                className="w-full flex bg-gray-200 justify-center hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSignUpClick}
              >
                <AiOutlineGoogle className="mr-2 m-1" />
                Login in with google
              </button>
            )}
          </form> <br />
          {!isSignUp && (
            <p className="text-center text-gray-700 text-sm font-bold">
              Don't have an account?{' '}
              <button
                type="button"
                className="text-blue-500 hover:text-blue-700"
                onClick={handleSignUpClick}
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;