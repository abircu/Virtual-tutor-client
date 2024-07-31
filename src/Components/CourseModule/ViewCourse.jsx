import React from "react";

const ViewCourse = ({ mod }) => {
  if (!mod) {
    console.log("emty mod");
  } else {
    console.log("the mod is", mod);
  }
  return (
    <div className="min-h-screen max-w-6xl mx-auto md:w-2/3 pt-20 md:ml-10 m-2  p-2 bg-gray-200"></div>
  );
};

export default ViewCourse;
