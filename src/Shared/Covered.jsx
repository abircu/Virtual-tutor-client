import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Covered = ({ Img, title, description, btnText, btnID }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="hero min-h-fit lg:h-[700px]"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundPosition: "fixet",
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div
        data-aos="zoom-in-up"
        className="hero-content w-full py-[20%] bg-black bg-opacity-25 lg:py-0 text-center text-neutral-content"
      >
        <div className="max-w-md p-7 text-white">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className="mb-5 text-5xl font-bold"
          >
            {title}
          </h1>
          <p data-aos="fade-left" data-aos-duration="2000" className="mb-5">
            {description}
          </p>
          <button
            data-aos="flip-right"
            className="btn btn-outline border-white border-b-4 text-white"
            id={btnID}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Covered;
