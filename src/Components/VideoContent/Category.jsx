import React, { useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [vedios, setVideos] = useState([]);
  fetch("./Videos.json")
    .then((res) => res.json())
    .then((data) => setVideos(data))
    .catch((err) => console.log(err));
  return (
    <div>
      <h1 className="my-10 text-white font-bold text-3xl ">
        Explore Course Category:
      </h1>

      <div className="grid grid-gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {vedios.map((video) => (
          <Link to={`/category/${video.id}`} state={{ vedeo: video }}>
            <div
              key={video.id}
              className="bg-slate-200 rounded-lg py-3 w-44 px-2 h-20 shadow-lg shadow-indigo-700 hover:shadow-lg hover:shadow-indigo-200"
            >
              {" "}
              <h1 className="text-xl font-semibold">{video.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
