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
        .get(
          `${baseUrl}/course/get-category`,
          {
            params: { category: "ACADEMIC" },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setAcademicCourse(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log("academic resposne", academicCourse);
  const handleEnroll = () => console.log("course enroll");
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
      <div className="min-h-screen max-w-7xl mx-auto py-10">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
          {academicCourse.map((course) => (
            <div className="card card-compact w-96 shadow-xl h-[400px] bg-gray-200 pt-4">
              <figure>
                <img
                  className="rounded-lg "
                  src={`${baseUrl}/files/image/${course?.image}`}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p className="text-xl text-sky-600 font-semibold">
                  {course.title}
                </p>
                <div className="flex gap-3">
                  <p className="text-xl text-sky-600 font-semibold">
                    {course.type}
                  </p>
                  <div>
                    <p>price: {course.price}</p>
                    <p>Offer: {course.offer}</p>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={handleEnroll}
                    className="btn btn-primary uppercase"
                  >
                    Enroll now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academic;
