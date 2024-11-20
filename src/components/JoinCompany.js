import React, { useState, useContext } from "react";
import api from "../api/axiosInstance";
import { AuthContext } from "../context/AuthContext";

const JoinCompany = () => {
  const [companyId, setCompanyId] = useState("");
  const { getAuthHeaders } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      await api.post(
        `/companies/${companyId}/access-request`,
        {},
        { headers: getAuthHeaders() }
      );
      alert("Access request sent. Please contact HR for approval.");
    } catch (err) {
      console.error(err);
      alert("Failed to send access request.");
    }
  };

  return (
    <div>
      <h2>Join a Company</h2>
      <input
        type="text"
        placeholder="Company ID"
        value={companyId}
        onChange={(e) => setCompanyId(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2"
      >
        Join
      </button>
    </div>
  );
};

export default JoinCompany;
