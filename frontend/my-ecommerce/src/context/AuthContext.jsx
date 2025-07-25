import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../API/api';
import { jwtDecode } from 'jwt-decode'; // You'll need to install this library

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken'));
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('authToken');
    if (!token) return null;
    try {
      return jwtDecode(token);
    } catch (e) {
      return null;
    }
  });

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
    delete api.defaults.headers.common['Authorization'];
  };

  useEffect(() => {
    if (authToken) {
      try {
        const decoded = jwtDecode(authToken);
        // Optional: Check if token is expired
        if (decoded.exp * 1000 < Date.now()) {
          logout();
        } else {
          setUser(decoded);
          localStorage.setItem('authToken', authToken);
          api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
        }
      } catch (e) {
        logout(); // Token is invalid
      }
    } else {
        logout();
    }
  }, [authToken]);

  const login = async (username, password) => {
    const response = await api.post('/login/', { username, password });
    if (response.data.access) {
      setAuthToken(response.data.access);
    }
    return response;
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
