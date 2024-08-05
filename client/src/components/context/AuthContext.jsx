// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for token on initial load
    const token = localStorage.getItem('token');
    if (token) {
      // Here you might want to add a request to verify the token and fetch user data
      // For example, you can set user state after validating the token
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      // Assuming you have a backend endpoint to verify token and get user data
      const response = await axios.get('http://localhost:5000/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data); // Assuming response.data contains user information
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUser(null); // Clear user if there is an error
    }
  };

  const login = async (email, password, role) => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
        role,
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        setUser({ email, role, token: response.data.token });
        return true; // Login successful
      } else {
        return false; // Login failed
      }
    } catch (error) {
      console.error('Login error:', error);
      return false; // Login failed
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null); // Clear user state on logout
  };

  const value = {
    user,
    login,
    logout,
    setUser, // Expose setUser if needed in other components
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};