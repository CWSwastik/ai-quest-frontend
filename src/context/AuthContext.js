import React, { createContext, useState, useEffect } from "react";
import api from "../api/axiosInstance";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);

  const login = (token) => {
    setAuth(token);
    localStorage.setItem("authToken", token);
    fetchUserDetails(token);
  };

  const logout = () => {
    setAuth(null);
    setUser(null);
    localStorage.removeItem("authToken");
  };

  const fetchUserDetails = async (token) => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const res = await api.get("/users/me", { headers });
      setUser(res.data);
    } catch (err) {
      console.error("Failed to fetch user details:", err);
    }
  };

  const getAuthHeaders = () => {
    return { Authorization: `Bearer ${auth}` };
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuth(token);
      fetchUserDetails(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, user, login, logout, getAuthHeaders }}>
      {children}
    </AuthContext.Provider>
  );
};
