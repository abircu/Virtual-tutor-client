import React from "react";
import Training from "../../assets/home/Training.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const VartualTutorInfo = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=" max-w-6xl mx-auto   py-20 p-2">
      <h1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="text-sky-900 text-4xl font-bold my-10   py-2 uppercase"
      >
        Who we are
      </h1>
      <div className="flex flex-col-reverse md:flex-row gap-6">
        <div className=" flex-1 grid  grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-100 rounded-lg p-2 shadow-lg shadow-slate-600">
            <h1 className="text-xl font-bold  text-black">Who we are</h1>
            <p>Virtual tutor is online based learning platform</p>
          </div>
          <div className="bg-slate-100 rounded-lg p-2 shadow-lg shadow-slate-600">
            <h1 className="text-xl font-bold text-black">What do we do</h1>
            <p>
              Virtual tutor provide academic and non academic courses for you
            </p>
          </div>
          <div className="bg-slate-100 rounded-lg p-2 shadow-lg shadow-slate-600">
            <h1 className="text-xl font-bold text-black">How do we help</h1>
            <p>
              You can learn your neccessary course throught over the internet.
            </p>
          </div>
          <div className="bg-slate-100 rounded-lg p-2 shadow-lg shadow-slate-600">
            <h1 className="text-xl font-bold text-black">Opportunity</h1>
            <p>
              Here we tracke your progress and take quiz provide you a grade for
              your certificte
            </p>
          </div>
          <div className="bg-slate-100 rounded-lg p-2 shadow-lg shadow-slate-600">
            <h1 className="text-xl font-bold text-black">Benefits</h1>
            <p>
              You can access all free version courses 100% charge free. And you
              can purchases any course.
            </p>
          </div>
          <div className="bg-slate-100 rounded-lg p-2 shadow-lg shadow-slate-600">
            <h1 className="text-xl font-bold text-black">
              Create success story
            </h1>
            <p>
              You can share your experience with others and create your success
              story
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src={Training} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VartualTutorInfo;
