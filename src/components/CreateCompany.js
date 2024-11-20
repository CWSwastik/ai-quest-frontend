import React, { useState, useContext } from "react";
import api from "../api/axiosInstance";
import { AuthContext } from "../context/AuthContext";

const CreateCompany = () => {
  const [name, setName] = useState("");
  const { getAuthHeaders } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      const res = await api.post(
        "/companies",
        { name, ai_answer_enabled: true },
        { headers: getAuthHeaders() }
      );
      alert("Company created successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to create company.");
    }
  };

  return (
    <div>
      <h2>Create a Company</h2>
      <input
        type="text"
        placeholder="Company Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Create
      </button>
    </div>
  );
};

export default CreateCompany;
