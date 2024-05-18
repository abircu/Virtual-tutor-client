import React from "react";
import VideoCatagory from "../../Components/VideoContent/VideoCatagory";
import Category from "../../Components/VideoContent/Category";

const VideoContent = () => {
  return (
    <div className="bg-sky-400 min-h-screen">
      <div className="max-w-6xl mx-auto py-20">
        <VideoCatagory></VideoCatagory>
        <Category></Category>
      </div>
    </div>
  );
};

export default VideoContent;
