import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { baseUrl } from "../../config/config";
import axios from "axios";

const ViewCourse = ({ mod }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [activeReplyIndex, setActiveReplyIndex] = useState(null);
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

  // Handle new comment submission
  const handleSubmit = async (payload) => {
    try {
      const response = await axios.post(
        `${baseUrl}/discussion/save${id}`,
        payload
      );
      return response.data;
    } catch (error) {
      console.error("Error submitting comment or reply:", error);
    }
  };

  const handleAddComment = async () => {
    if (comment.trim() !== "") {
      const newComment = await handleSubmit({
        moduleId: mod.id,
        text: comment,
      });
      setComments([...comments, newComment]);
      setComment(""); // Clear input field after submission
    }
  };
  // Handle reply submission
  const handleReplySubmit = async (index, replyText) => {
    const commentId = comments[index].id;
    const newReply = await handleSubmit({
      commentId,
      text: replyText,
    });
    setReplies((prevReplies) => ({
      ...prevReplies,
      [index]: [...(prevReplies[index] || []), newReply],
    }));
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
          <h1 className="p-3 text-2xl font-bold">Question</h1>
          <div>
            <p className="text-slate-600 font-semibold border-b-2 border-black ">
              Add question
            </p>
            {/* comment and replies */}
            <div>
              {comments.map((comment, index) => (
                <div
                  key={comment.id}
                  className="mb-4 p-2 border border-gray-200 rounded"
                >
                  <div className="flex gap-6 items-center">
                    <p>{comment.text}</p>
                    <button
                      onClick={() => {
                        setActiveReplyIndex(
                          activeReplyIndex === index ? null : index
                        );
                        const reply = prompt("Enter your reply:");
                        if (reply) {
                          handleReplySubmit(index, reply);
                        }
                      }}
                      className="text-blue-500 hover:underline"
                    >
                      Reply ({(replies[index] || []).length})
                    </button>
                  </div>
                  {replies[index] && (
                    <div className="ml-4 mt-2">
                      {replies[index].map((reply) => (
                        <p key={reply.id} className="text-gray-600">
                          {reply.text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* comment section end */}
            <div className="flex justify-center items-center mt-4">
              <textarea
                name="comment"
                id="comment"
                rows={2}
                className="w-[80%] rounded-lg rounded-r-none bg-slate-200 border-2 border-sky-400"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button
                onClick={handleAddComment}
                className="btn btn-success text-white rounded-l-none py-1"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
