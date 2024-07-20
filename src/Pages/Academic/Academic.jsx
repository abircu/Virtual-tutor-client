import React, { useEffect, useState } from "react";
import Halmet from "../../Components/Halmet";
import Covered from "../../Shared/Covered";
import heroImg from "../../assets/home/home-hero.jpg";
import axios from "axios";
import { baseUrl } from "../../config/config";

const Academic = () => {
  const [academicCourse, setAcademicCourse] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`${baseUrl}/course/get/ACADEMIC`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setAcademicCourse(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log("academic resposne", academicCourse);
  return (
    <div>
      <Halmet pagename={"Academic"}></Halmet>
      <Covered
        Img={heroImg}
        title={"Explore your academic course"}
        description={
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
        }
        btnText={"Explore more"}
      ></Covered>
    </div>
  );
};

export default Academic;
