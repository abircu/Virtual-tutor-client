import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ViewCourse from "./ViewCourse";
import ShowCourse from "./ShowCourse";
import { CourseContext } from "../../Context/CourseContex";

const ViewModule = () => {
  const location = useLocation();
  const { item } = location.state || {};

  const { setItem } = useContext(CourseContext);
  setItem(item);
  console.log("item", item);
  const [selectedMod, setSelectedMod] = useState("");
  useEffect(() => {
    if (
      item &&
      Array.isArray(item.courseModules) &&
      item.courseModules.length > 0
    ) {
      const defaultModuleId = item.courseModules[0]; // default to first module ID
      setSelectedMod(defaultModuleId);
    }
  }, [item]);

  const handleSelectMod = (mod) => {
    setSelectedMod(mod);
  };
  console.log("select", selectedMod);
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
        <ViewCourse mod={selectedMod}></ViewCourse>
        <ShowCourse item={item} onSelectMod={handleSelectMod}></ShowCourse>
      </div>
    </div>
  );
};

export default ViewModule;
