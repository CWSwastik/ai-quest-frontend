import React, { useState } from "react";
import api from "../api/axiosInstance";

const AskQuestionPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        title,
        description,
        tags: tags.split(",").map((tag) => tag.trim()),
      };

      await api.post("/questions", payload);
      alert("Question posted successfully!");
      setTitle("");
      setDescription("");
      setTags("");
    } catch (error) {
      console.error("Failed to post the question:", error);
      alert("Failed to post the question.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Ask a Question</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded w-full p-2"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="border rounded w-full p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post Question
        </button>
      </form>
    </div>
  );
};

export default AskQuestionPage;
