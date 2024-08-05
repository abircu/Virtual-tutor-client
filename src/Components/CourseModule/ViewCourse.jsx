import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { baseUrl } from "../../config/config";
import axios from "axios";
import CommentCard from "./Comment";
import { IoMdSend } from "react-icons/io";
import AuthContext from "../../Context/AuthProvider";

const ViewCourse = ({ mod }) => {
  // const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { auth } = useContext(AuthContext);
  const user = auth.user;
  const senderId = user.id;
  const senderRole = user.role;
  const token = user.jwtToken;
  const message = comments;

  let parentMessageId = comments.id;
  console.log("parent", parentMessageId);

  console.log("discussion", message);
  const [replies, setReplies] = useState({});
  if (!mod) {
    console.log("emty mod");
  } else {
    console.log("the mod is", mod);
  }
  const id = mod?.id;

  const isPdf = mod.contentName && mod.contentName.endsWith(".pdf");
  const handleSubmitQuestion = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/discussion/get-all/${id}`,
          {
            params: { moduleId: mod.id },
          }
        );
        console.log("reo", response.data);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [mod.id]);
  console.log("comments get", comments);

  // Handle new comment submission
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/discussion/save`,
        {
          courseModule: { id: id },
          senderId,
          senderRole,
          message,
          parentMessageId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments([...comments, response.data]);
      setNewComment(""); // Clear the input field
      return response.data;
    } catch (error) {
      console.error("Error submitting comment or reply:", error);
    }
  };
  // function for replaying
  const handleReplySubmit = async (parentMessageId, replyText) => {
    if (!replyText.trim()) return;

    try {
      const response = await axios.post(
        `${baseUrl}/discussion/save`,
        {
          parentMessageId,
          senderId,
          senderRole,
          message: replyText,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the comments state with the new reply
      setComments(
        comments.map((comment) =>
          comment.id === parentMessageId
            ? { ...comment, replies: [...comment.replies, response.data] }
            : comment
        )
      );
    } catch (error) {
      console.error("Error submitting reply:", error);
    }
  };
  return (
    <div className="min-h-screen max-w-6xl mx-auto md:w-2/3 pt-20 md:ml-10 m-2  p-2 bg-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col  gap-6">
        {isPdf ? (
          <div>
            <iframe
              src={`${baseUrl}/files/pdf/${mod.contentName}`}
              width="100%"
              height="600px"
              title="PDF Viewer"
            ></iframe>
          </div>
        ) : (
          <div key={mod?.id} className=" flex-1 bg-slate-200  ">
            <ReactPlayer
              className="react-player"
              url={`${baseUrl}/files/video/${mod?.contentName}`}
              controls={true}
              width="100%"
              height="100%"
            ></ReactPlayer>
            <p className="text-xl font-bold "></p>
          </div>
        )}

        <div className=" flex-1 flex flex-col justify-between border-l-2 border-sky-700 pl-2 md:pl-4">
          <h1 className="p-3 text-2xl font-bold">Discussion</h1>
          <div>
            <p className="text-slate-600 font-semibold  text-xl ">Add</p>
            {/* comment and replies */}
            <div className="mb-10">
              {/* Display all comments */}
              {comments.map((comment) => (
                <div key={comment.id} className="mb-6">
                  <div className="flex items-start">
                    <img
                      src={
                        comment.userPhoto || "https://via.placeholder.com/50"
                      }
                      alt="User"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div className="flex flex-col bg-white p-3 rounded-md shadow-sm w-full">
                      <div className="font-bold">{comment.author}</div>
                      <p className="text-gray-700 mt-2">{comment.message}</p>
                      <div>
                        {/* Reply section */}
                        <ReplySection
                          parentMessageId={comment.id}
                          onReplySubmit={handleReplySubmit}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Display replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="ml-12 mt-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex items-start mt-4">
                          <img
                            src={
                              reply.userPhoto ||
                              "https://via.placeholder.com/50"
                            }
                            alt="User"
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <div className="flex flex-col bg-gray-100 p-2 rounded-md shadow-sm w-full">
                            <div className="text-sm font-semibold">
                              {reply.author}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {reply.message}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Input for new comments */}
              <div className="flex mt-4">
                <input
                  type="text"
                  value={newComment}
                  className="px-3 py-2 border border-gray-300 rounded-lg rounded-r-none w-full"
                  placeholder="Add a comment"
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                  onClick={handleSubmit}
                  className="btn text-4xl text-blue-700 bg-gray-100 rounded-lg rounded-l-none px-4 py-2"
                >
                  <IoMdSend />
                </button>
              </div>
            </div>
            {/* comment section end */}
          </div>
        </div>
      </div>
    </div>
  );
};

// add replay
const ReplySection = ({ parentMessageId, onReplySubmit }) => {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleReplySubmit = () => {
    onReplySubmit(parentMessageId, replyText);
    setReplyText(""); // Clear the reply input field
    setShowReplyBox(false); // Hide reply box after submitting
  };

  return (
    <div>
      <button
        className="text-sm text-blue-500 hover:underline mt-2"
        onClick={() => setShowReplyBox(!showReplyBox)}
      >
        Reply
      </button>

      {showReplyBox && (
        <div className="flex mt-3 ml-12">
          <input
            type="text"
            value={replyText}
            className="px-3 py-2 border border-gray-300 rounded-lg rounded-r-none w-full"
            placeholder="Write a reply..."
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button
            onClick={handleReplySubmit}
            className="btn text-4xl text-blue-700 bg-gray-100 rounded-lg rounded-l-none px-4 py-2"
          >
            <IoMdSend />
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewCourse;
