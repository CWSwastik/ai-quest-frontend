import React from "react";
import { useParams } from "react-router-dom";
import QuestionDetail from "../components/Qna/QuestionDetail";

const QuestionDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <QuestionDetail questionId={id} />
    </div>
  );
};

export default QuestionDetailPage;
