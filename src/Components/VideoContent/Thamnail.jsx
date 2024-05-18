import React from "react";
import { Link, useLocation } from "react-router-dom";

const Thamnail = () => {
  const location = useLocation();
  console.log("location is", location);
  const { courses } = location.state.vedeo;
  console.log("course data", courses);

  return (
    <div className="max-w-6xl  mx-auto py-20">
      <div className="my-10">
        <h1 className="font-bold text-3xl py-6 md:py-10">
          Course Details page:
        </h1>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Link to={`/courses/${course.id}`} state={{ course: course }}>
            <div key={course.id} className="bg-indigo-500 rounded-lg p-2">
              <img src={course.thumbnail} alt="" className="p-2 " />
              <p className="text-xl font-semibold text-white">{course.name}</p>
              <div className="flex justify-center items-center">
                <button className="btn btn-success text-white my-6 px-6  ">
                  Play
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Thamnail;
