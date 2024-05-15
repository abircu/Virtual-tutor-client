// import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PcourseDetails = () => {
  const location = useLocation();
  console.log("location is ", location);
  const { course } = location.state || {};
  const {
    course_id,
    course_type,
    name,
    price,
    publishing_date,
    rating,
    description,
    duration,
    enrollment_count,
    image,
    syllabus,
  } = course;

  return (
    <div className="min-h-screen py-10 md:py-20 bg-slate-200 ">
      <div className="max-w-6xl mx-auto py-10 p-2 ">
        <div className="flex items-center justify-center  flex-col">
          <h1 className="text-3xl font-bold text-sky-900">{description}</h1>
          <img
            className="   mt-6 rounded-lg mb-6 w-full object-cover"
            src={image}
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className=" col-span-2 md:col-span-3">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                <span className="text-sm font-bold text-sky-900 px-2">
                  Published:
                </span>
                {publishing_date}
              </p>

              <p className="text-sm text-red-600 mr-10">
                <span className="text-sm font-bold text-sky-900">Rating:</span>{" "}
                {rating}
              </p>
            </div>
            <h1 className="text-sky-900 text-xl font-semibold  mt-6">
              Course Name: {name}
            </h1>
            <h4 className="text-sky-900 text-xl font-semibold  my-6">
              Syllabus:{syllabus}
            </h4>
            <p className="text-sky-900 text-xl font-semibold">
              Course Type: {course_type}
            </p>
            <p className="text-xl text-indigo-800">
              <span className="text-xl font-bold text-sky-900">Duration:</span>{" "}
              {duration}
            </p>
            <p className="text-xl text-indigo-800">
              <span className="text-xl font-bold text-sky-900">
                Enrolment_count:
              </span>{" "}
              {enrollment_count}
            </p>

            <p className="text-xl text-indigo-800 ">
              <span className="text-xl font-bold text-sky-900 ">Price:</span>
              {price}$
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 border-l-2 border-sky-950 ">
            <div className="flex flex-col justify-center items-center">
              <img
                className=" w-40 h-40 rounded-full border-2 border-sky-900"
                src={course.instructor.profile}
                alt=""
              />
              <h1 className="text-sky-900 text-xl font-semibold">
                {" "}
                Instructor Name: {course.instructor.name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcourseDetails;
