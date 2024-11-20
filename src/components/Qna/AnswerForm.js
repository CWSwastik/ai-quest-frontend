import React, { useState } from "react";
import api from "../../api/axiosInstance";

const AnswerForm = ({ questionId }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      await api.post(`/questions/${questionId}/answers`, { answer: content });
      setContent("");
      alert("Answer submitted!");
    } catch (err) {
      console.error("Failed to submit answer:", err);
      alert("Failed to submit answer.");
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Your Answer</h3>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border rounded w-full p-2 my-2"
        rows="4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default AnswerForm;
