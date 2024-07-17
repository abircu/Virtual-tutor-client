import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import ViewCourse from "./ViewCourse";
import ShowCourse from "./ShowCourse";
import { CourseContext } from "../../Context/CourseContex";

const ViewModule = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const { setItem } = useContext(CourseContext);
  setItem(item);

  return (
    <div>
      <div className="pt-20">
        <marquee
          className="text-4xl font-bold py-10 text-gray-800"
          behavior="croll"
          direction="left"
        >
          {" "}
          Virtual tutor platforms are online-based learning platforms that
          provide students with access to educational resources and courses over
          the internet.
        </marquee>
      </div>
      <div className=" min-h-screen flex flex-col md:flex-row ">
        <ViewCourse item={item}></ViewCourse>
        <ShowCourse item={item}></ShowCourse>
      </div>
    </div>
  );
};

export default ViewModule;