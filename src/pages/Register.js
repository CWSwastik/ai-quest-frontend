import React, { useState } from "react";
import api from "../api/axiosInstance";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", formData);
      alert("Registration successful! Please login.");
    } catch (err) {
      console.error(err);
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="p-6 bg-white shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border p-2"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border p-2"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
