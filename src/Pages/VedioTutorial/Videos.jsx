import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../config/config";

const Videos = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/files/video/CloseYourEyes`,
          {
            responseType: "arraybuffer",
            headers: {
              Range: "bytes=0-",
            },
          }
        );

        const blob = new Blob([response.data], { type: "video/mp4" });
        const videoUrl = URL.createObjectURL(blob);
        console.log("video url", videoUrl);
        setVideo(videoUrl);
      } catch (err) {
        console.log("eerororrlddsd:", err);
      }
    };
    fetchVideo();
  }, []);

  return (
    <div className=" min-h-screen bg-slate-200  py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mt-10">
          Skill courses{video}
        </h1>
        <div className=" ">
          <video src={video} controls></video>
        </div>
      </div>
    </div>
  );
};

export default Videos;
