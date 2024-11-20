import React, { useState } from "react";
import api from "../../api/axiosInstance";

const CommentsList = ({ answerId, comments }) => {
  const [newComment, setNewComment] = useState("");

  const addComment = async () => {
    try {
      await api.post(`/answers/${answerId}/comments`, { comment: newComment });
      setNewComment("");
      alert("Comment added!");
    } catch (err) {
      console.error("Failed to add comment:", err);
      alert("Failed to add comment.");
    }
  };

  return (
    <div className="mt-4">
      <h4 className="text-md font-semibold">Comments</h4>
      {comments.map((comment) => (
        <p key={comment.id} className="text-sm text-gray-600">
          {comment.content}
        </p>
      ))}
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="border rounded w-full p-2 my-2"
        rows="2"
      />
      <button
        onClick={addComment}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Comment
      </button>
    </div>
  );
};

export default CommentsList;
