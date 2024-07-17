import React from "react";
import { Link } from "react-router-dom";

const ShowCourse = ({ item }) => {
  console.log("show course data", item);
  return (
    <div className="pt-0 md:ml-10 m-2 p-2">
      <div className="flex justify-end my-2 ">
        <Link
          to={{
            pathname: "/createModule",
            state: { item: item },
          }}
        >
          <button className="btn btn-success uppercase top-0 ">
            Add module
          </button>
        </Link>
      </div>
      <div className="min-h-screen grid grid-cols-1 md:w-1/4 max-w-6xl mx-auto  "></div>
    </div>
  );
};

export default ShowCourse;
