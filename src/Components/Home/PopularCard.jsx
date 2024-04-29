import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const PopularCard = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("./PopularCorse.json")
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center justify-center items-center">
        <p className=" font-bold text-orange-600">Only the best</p>
        <h1 className=" text-sky-900 text-4xl font-bold">
          {" "}
          Our popular courses
        </h1>
        <p className="text-sky-900 font-semibold mt-2 px-2 md:px-52">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi
          officiis at. Perferendis eveniet quia ipsum nam distinctio,
          praesentium inventore blanditiis, ipsa fuga nostrum velit fugit
          consequatur. Non, quaerat perferendis.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 pb-10 ">
        {course.map((course) => (
          <div
            key={course.course_id}
            className="p-4 flex flex-col items-center justify-center"
          >
            <div>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="w-64  h-36 border border-gray-200 rounded-lg overflow-hidden"
              >
                <img src={course.image} className="w-full h-auto" />
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="p-4 w-64"
            >
              <p className="text-xl font-semibold text-sky-800">
                {course.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCard;
