import React, { useEffect, useState } from "react";
import api from "../../api/axiosInstance";
import AnswerForm from "./AnswerForm";
import CommentsList from "./CommentsList";
import UpvoteDownvote from "./UpvoteDownvote";

const QuestionDetail = ({ questionId }) => {
  const [question, setQuestion] = useState(null);

  const fetchQuestion = async () => {
    try {
      const res = await api.get(`/questions/${questionId}`);
      res.data.question.answers = res.data.answers;
      res.data.question.id = res.data.question._id;
      setQuestion(res.data.question);
    } catch (err) {
      console.error("Failed to fetch question:", err);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, [questionId]);

  if (!question) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold">{question.title}</h1>
      <p className="text-gray-600">{question.description}</p>
      <div className="my-4">
        <UpvoteDownvote
          type="question"
          id={question.id}
          votes={question.upvotes}
        />
      </div>
      <h2 className="text-xl font-semibold mt-6">Answers</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={async () => {
          try {
            await api.post(`/questions/${questionId}/generate-answer`);
            fetchQuestion();
          } catch (err) {
            console.error("Failed to generate AI answer:", err);
          }
        }}
      >
        Generate AI Answer
      </button>
      {question.answers.map((answer) => (
        <div
          key={answer.id}
          className={`border rounded-lg p-4 my-4 hover:shadow-md ${
            answer.is_ai ? "bg-yellow-100" : ""
          }`}
        >
          <p>{answer.answer}</p>
          {answer.is_ai && (
            <p className="text-sm text-gray-500">Answer by AI Bot</p>
          )}
          <UpvoteDownvote type="answer" id={answer.id} votes={answer.upvotes} />
          <CommentsList answerId={answer.id} comments={answer.comments} />
        </div>
      ))}
      <AnswerForm questionId={question.id} />
    </div>
  );
};

export default QuestionDetail;
