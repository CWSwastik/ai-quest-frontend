import React, { useState, useContext } from "react";
import api from "../api/axiosInstance";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      console.log(res.data);
      login(res.data.access_token);
      alert("Login successful!");
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="p-6 bg-white shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full border p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
