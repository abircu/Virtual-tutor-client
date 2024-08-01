import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../config/config";

const AboutUs = () => {
  const [homeInfo, setHomeInfo] = useState("");
  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    const response = async () => {
      try {
        const res = await axios.get(`${baseUrl}/dash-board/get/home`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setHomeInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    response();
  }, []);
  useEffect(() => {
    console.log("home info", homeInfo);
  }, [homeInfo]);
  return (
    <div className="max-w-6xl mx-auto mt-10 py-10 px-2">
      <div className="text-center justify-center items-center">
        <p className=" font-bold text-orange-600">Our services</p>
        <h1 className=" text-sky-900 text-4xl font-bold">
          {" "}
          Learn with virtual tutor to make yourself proffessional
        </h1>
        <p className="text-sky-900 font-semibold mt-2 px-2 md:px-52">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi
          officiis at. Perferendis eveniet quia ipsum nam distinctio,
          praesentium inventore blanditiis, ipsa fuga nostrum velit fugit
          consequatur. Non, quaerat perferendis. Lorem, ipsum dolor.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
        <div className=" bg-slate-100  rounded-lg  p-5 shadow-black shadow-lg  hover:shadow-indigo-500">
          <div className=" flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-bold text-sky-950">
              {homeInfo.totalStudents}
            </p>
            <p className="text-xl text-black font-semibold">Students</p>
          </div>
        </div>
        <div className="bg-slate-100  rounded-lg  p-5 shadow-black shadow-lg hover:shadow-indigo-500">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-bold text-sky-950">
              {homeInfo.totalTeachers}
            </p>
            <p className="text-xl text-black font-semibold">Teachers</p>
          </div>
        </div>
        <div className="bg-slate-100  rounded-lg  p-5 shadow-black shadow-lg hover:shadow-indigo-500">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-bold text-sky-950">
              {homeInfo.totalModules}
            </p>
            <p className="text-xl text-black font-semibold">
              Learning programms
            </p>
          </div>
        </div>
        <div className="bg-slate-100  rounded-lg  p-5 shadow-black shadow-lg hover:shadow-indigo-500">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-bold text-sky-950">
              {homeInfo.totalSkillCourses}
            </p>
            <p className="text-xl text-black font-semibold">Skill training</p>
          </div>
        </div>
        <div className="bg-slate-100  rounded-lg  p-5 shadow-black shadow-lg hover:shadow-indigo-500">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-3xl font-bold text-sky-950">
              {homeInfo.totalAcademicCourses}
            </p>
            <p className="text-xl text-black font-semibold">academic course</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
