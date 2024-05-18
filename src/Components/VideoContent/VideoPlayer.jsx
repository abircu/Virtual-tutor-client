import React from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import "./Player.css";

const VideoPlayer = () => {
  const location = useLocation();
  const { course } = location.state;

  return (
    <div className="py-20 ">
      <marquee
        className="text-3xl font-bold my-10"
        behavior="croll"
        direction="left"
      >
        {" "}
        Virtual tutor platforms are online-based learning platforms that provide
        students with access to educational resources and courses over the
        internet.
      </marquee>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        <div className=" flex-1 bg-slate-200  ">
          <ReactPlayer
            className="react-player"
            url={course.video_source}
            controls={true}
            width="100%"
            height="100%"
          ></ReactPlayer>
          <p className="text-xl font-bold ">{course.name}</p>
        </div>
        <div className=" flex-1 flex flex-col justify-between border-l-2 border-sky-700 pl-2 md:pl-4">
          <h1 className="p-3 text-2xl font-bold">comment here</h1>
          <div>
            <p className="text-slate-600 font-semibold border-b-2 border-black ">
              Add commnet
            </p>
            <div className="flex justify-center items-center mt-4">
              {" "}
              <textarea
                name="comment"
                id="comment"
                rows={2}
                className=" w-[80%] rounded-lg bg-slate-200 border-2 border-sky-400 "
              ></textarea>
              <button className="btn  btn-success text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-6xl mx-auto p-2 my-20">
        <p className="text-2xl font-bold">8 commments</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
