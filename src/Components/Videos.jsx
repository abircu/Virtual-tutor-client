import React, { useEffect, useState } from "react";
import axios from "axios";

import { baseUrl } from "../config/config";

const AllVideos = () => {
  const [allVideos, setAllVideos] = useState([]);
  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        const response = await axios.get(`${baseUrl}getallVideo`);
        const videos = response.data.data.video;
        setAllVideos(videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchAllVideos();
  }, []);

  return (
    <div className="my-6">
      <h1 className="text-2xl font-semibold mb-2">All Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {allVideos.map((video, index) => (
          <div
            key={index}
            onClick={() => handleClickVideo(video)}
            className="bg-slate-200 p-2 cursor-pointer"
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={video.link}
                alt={video.name}
                className="w-full h-[60%] object-cover"
              />
            </div>
            <div className="py-2">
              <p className="text-sm font-semibold">{video.name}</p>
              <p className="text-xs text-gray-600">{video.genre}</p>
              <p className="text-xs text-gray-600">{video.moral}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVideos;
