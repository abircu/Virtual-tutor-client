import { FaArrowRight } from "react-icons/fa";

const Hero_top = () => {
  return (
    <div className="bg-slate-200 w-full">
      <div className="max-w-6xl mx-auto py-20">
        <div>
          <h1 className="text-purple-800 text-3xl font-semibold my-10   py-2 uppercase">
            What we offer.
          </h1>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className=" flex gap-3  items-center justify-center bg-purple-400 text-2xl p-3 py-6 rounded-lg text-white font-bold">
            <p>Lorem, ipsum dolor.</p>
            <FaArrowRight className="hover:text-purple-800"></FaArrowRight>
          </div>
          <div className="flex gap-3  items-center bg-orange-400 text-2xl p-3 py-6 rounded-lg text-white font-bold">
            {" "}
            <p>Lorem, ipsum dolor.</p>
            <FaArrowRight className="hover:text-purple-800"></FaArrowRight>
          </div>
          <div className="flex gap-3  items-center bg-red-400 text-2xl p-3  py-6 rounded-lg  text-white font-bold">
            <p>Lorem, ipsum dolor.</p>
            <FaArrowRight className="hover:text-purple-800"></FaArrowRight>
          </div>
          <div className="flex gap-3  items-center bg-sky-400 text-2xl p-3 py-6 rounded-lg text-white font-bold">
            <p>Lorem, ipsum dolor.</p>
            <FaArrowRight className="hover:text-purple-800"></FaArrowRight>
          </div>
          <div className="flex gap-3  items-center bg-blue-400 text-2xl p-3  py-6 rounded-lg text-white font-bold">
            <p>Lorem, ipsum dolor.</p>
            <FaArrowRight className="hover:text-purple-800"></FaArrowRight>
          </div>
          <div className="flex gap-3  items-center bg-green-400 text-2xl p-3 py-6 rounded-lg text-white font-bold">
            <p>Lorem, ipsum dolor.</p>
            <FaArrowRight className="hover:text-purple-800"></FaArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_top;
