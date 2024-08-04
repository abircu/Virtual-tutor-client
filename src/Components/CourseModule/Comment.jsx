import React from "react";
import React, { useState } from "react";

// Reply Component
const Reply = ({ reply }) => {
  return (
    <div className="ml-6 mt-2">
      <div className="bg-gray-100 p-3 rounded-md shadow-sm">
        <div className="text-sm font-semibold">{reply.author}</div>
        <div className="text-sm text-gray-600">{reply.text}</div>
      </div>
    </div>
  );
};

const Comment = () => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState(comment.replies || []);

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      const newReply = {
        author: "Current User", // Placeholder for current user
        text: replyText.trim(),
      };
      setReplies([...replies, newReply]);
      setReplyText("");
      setShowReplyBox(false);
    }
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="font-bold">{comment.author}</div>
      <div className="text-gray-700">{comment.text}</div>
      <div className="mt-2">
        <button
          className="text-sm text-blue-500 hover:underline"
          onClick={() => setShowReplyBox(!showReplyBox)}
        >
          Reply
        </button>
      </div>
      {showReplyBox && (
        <div className="mt-2">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="3"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
          />
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleReplySubmit}
          >
            Submit
          </button>
        </div>
      )}
      <div className="mt-4">
        {replies.map((reply, index) => (
          <Reply key={index} reply={reply} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
