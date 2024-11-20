import React, { useState } from "react";
import api from "../../api/axiosInstance";

const UpvoteDownvote = ({ type, id, votes }) => {
  const [voteCount, setVoteCount] = useState(votes);

  const handleVote = async (voteType) => {
    try {
      const endpoint =
        voteType === "upvote"
          ? `/${type}s/${id}/upvote`
          : `/${type}s/${id}/downvote`;

      await api.post(endpoint);
      setVoteCount(voteType === "upvote" ? voteCount + 1 : voteCount - 1);
    } catch (err) {
      console.error("Failed to process vote:", err);
      alert("Failed to process your vote.");
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => handleVote("upvote")}
        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
      >
        Upvote
      </button>
      <span className="text-gray-700 font-semibold">{voteCount}</span>
      <button
        onClick={() => handleVote("downvote")}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        Downvote
      </button>
    </div>
  );
};

export default UpvoteDownvote;
