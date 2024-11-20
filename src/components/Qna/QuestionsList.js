import React, { useEffect, useState } from "react";
import api from "../../api/axiosInstance";
import { Link } from "react-router-dom";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const res = await api.get("/questions");
      setQuestions(res.data);
    } catch (err) {
      console.error("Failed to fetch questions:", err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Questions</h1>
      <Link
        to="/questions/new"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Ask a Question
      </Link>
      <ul className="space-y-4">
        {questions.map((question) => (
          <li
            key={question._id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <Link to={`/questions/${question._id}`}>
              <h2 className="text-lg font-semibold">{question.title}</h2>
              <p className="text-sm text-gray-500">{question.description}</p>
              <p className="text-sm text-gray-400">
                Tags: {question.tags.join(", ")}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsList;
