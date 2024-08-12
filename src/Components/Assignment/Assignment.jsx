import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Assignment = () => {
  const location = useLocation();
  const { mod } = location.state || {};
  const [assignment, setAssignment] = useState("");
  console.log("data in assigment page", mod);
  return (
    <div className="min-h-screen py-20 bg-base-300">
      <p className=" flex justify-center items-center mx-auto mt-10 text-3xl font-bold text-center border-b-4  border-sky-400 w-[80%] ">
        WelCome to Virtual tutor Assignment section
      </p>
      <div>
        <div>
          <label htmlFor="">Upload Assignment</label>\
          <input type="file" name="" id="" />
        </div>
        <div>
          <img src={""} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Assignment;
