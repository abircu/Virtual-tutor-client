import { FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Hero_top = ({ sectionID }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id={sectionID} className=" w-full">
      <div className="max-w-6xl mx-auto py-20">
        <div>
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-sky-900 text-4xl font-bold my-10   py-2 uppercase"
          >
            What we offer.
          </h1>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className=" flex gap-3  items-center justify-center text-center bg-purple-400 text-2xl p-3 py-6 rounded-lg text-white font-bold"
          >
            <p>On Goinging Course</p>
            <FaArrowRight className="hover:text-purple-800"></FaArrowRight>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex gap-3  items-center justify-center text-center bg-orange-400 text-2xl p-3 py-6 rounded-lg text-white font-bold"
          >
            {" "}
            <p>Pre recorded courses</p>
            <FaArrowRight className="hover:text-purple-800"></FaArrowRight>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex gap-3  items-center justify-center text-center bg-red-400 text-2xl p-3  py-6 rounded-lg  text-white font-bold"
          >
            <p>Live class Opportunity</p>
            <FaArrowRight className="hover:text-purple-800"></FaArrowRight>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex gap-3  items-center justify-center text-center bg-sky-400 text-2xl p-3 py-6 rounded-lg text-white font-bold"
          >
            <p>Discussion</p>
            <FaArrowRight className="hover:text-purple-800"></FaArrowRight>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex gap-3  items-center justify-center text-center bg-blue-400 text-2xl p-3  py-6 rounded-lg text-white font-bold"
          >
            <p>Academic Course</p>
            <FaArrowRight className="hover:text-purple-800"></FaArrowRight>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex gap-3  items-center justify-center text-center bg-green-400 text-2xl p-3 py-6 rounded-lg text-white font-bold"
          >
            <p>Skill Development Course</p>
            <FaArrowRight className="hover:text-purple-800"></FaArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_top;
