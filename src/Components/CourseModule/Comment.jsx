import React, { useState, useEffect } from "react";
import axios from "axios";

// API endpoints (replace with your actual API endpoints)
const COMMENTS_API = "https://api.example.com/comments";
const POST_COMMENT_API = "https://api.example.com/comments";
const POST_REPLY_API = "https://api.example.com/replies";

const CommentCard = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(COMMENTS_API);
        setComments(response.data);
      } catch (error) {
        console.error("Failed to fetch comments", error);
      }
    };

    fetchComments();
  }, []);

  const handleCommentSubmit = async () => {
    if (newComment.trim()) {
      const newCommentData = {
        author: "Current User", // This should be dynamic based on the logged-in user
        text: newComment.trim(),
        userPhoto: "https://via.placeholder.com/150", // Placeholder image
        replies: [],
        likes: 0,
      };

      try {
        // POST new comment to server
        await axios.post(POST_COMMENT_API, newCommentData);
        setComments([...comments, newCommentData]);
        setNewComment("");
      } catch (error) {
        console.error("Failed to post comment", error);
      }
    }
  };

  const handleReplySubmit = async (commentId, replyText, setReplies) => {
    if (replyText.trim()) {
      const newReply = {
        author: "Current User", // This should be dynamic based on the logged-in user
        text: replyText.trim(),
        userPhoto: "https://via.placeholder.com/150", // Placeholder image
      };

      try {
        // POST new reply to server
        await axios.post(POST_REPLY_API, { commentId, ...newReply });
        setReplies((prevReplies) => [...prevReplies, newReply]);
      } catch (error) {
        console.error("Failed to post reply", error);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Comments</h1>

      {/* Comment Input Box */}
      <div className="mb-6">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md"
          rows="3"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleCommentSubmit}
        >
          Add Comment
        </button>
      </div>

      {/* Comment Cards */}
      {comments.map((comment, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col"
        >
          <div className="flex items-center">
            <img
              src={comment.userPhoto}
              alt="User"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="font-bold">{comment.author}</div>
          </div>
          <div className="text-gray-700 mt-2">{comment.text}</div>
          <div className="flex justify-between mt-4">
            <div className="flex items-center space-x-4">
              <button className="text-sm text-blue-500 hover:underline">
                Reply
              </button>
              <button className="text-sm text-gray-500 hover:underline">
                Like {comment.likes > 0 && `(${comment.likes})`}
              </button>
            </div>
          </div>

          {/* Reply Input and List */}
          <Replies commentId={comment.id} replies={comment.replies} />
        </div>
      ))}
    </div>
  );
};

const Replies = ({ commentId, replies }) => {
  const [replyText, setReplyText] = useState("");
  const [allReplies, setReplies] = useState(replies || []);

  return (
    <div className="ml-10 mt-4">
      {allReplies.map((reply, index) => (
        <div key={index} className="flex items-center mt-4">
          <img
            src={reply.userPhoto}
            alt="User"
            className="w-8 h-8 rounded-full mr-3"
          />
          <div className="flex flex-col bg-gray-100 p-2 rounded-md shadow-sm w-full">
            <div className="text-sm font-semibold">{reply.author}</div>
            <div className="text-sm text-gray-600 mt-1">{reply.text}</div>
          </div>
        </div>
      ))}

      {/* Reply Input Box */}
      <div className="flex mt-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="2"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Write a reply..."
        />
        <button
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={() =>
            handleReplySubmit(commentId, replyText, setReplies, setReplyText)
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
