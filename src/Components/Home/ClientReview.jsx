import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import client from "../../assets/home/review.jpg";
import Container from "../../Shared/Container/Container";

const ClientReview = () => {
  const reviews = [
    {
      name: "MR. AB J",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sequi iure harum asperiores minima. Officia!",
      image: client,
      date: "01/2/2024",
    },
    {
      name: "MR. AB J",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sequi iure harum asperiores minima. Officia!",
      image: client,
      date: "01/2/2024",
    },
    {
      name: "MR. AB J",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sequi iure harum asperiores minima. Officia!",
      image: client,
      date: "01/2/2024",
    },
    {
      name: "MR. AB J",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sequi iure harum asperiores minima. Officia!",
      image: client,
      date: "01/2/2024",
    },
  ];
  const customeSlider = useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Container>
        <h1 className="sm:text-5xl text-3xl font-semibold leading-normal tracking-normal text-sky-900 text-center">
          What our students are saying
        </h1>
        <p className="text-sky-900 font-semibold mt-2 px-2 md:px-52">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi
          officiis at. Perferendis eveniet quia ipsum nam distinctio,
          praesentium inventore blanditiis, ipsa fuga nostrum velit fugit
          consequatur. Non, quaerat perferendis.
        </p>
        <div className="py-10">
          <Slider {...settings} ref={customeSlider}>
            {reviews.map((review, i) => (
              <div
                className="h-auto rounded-xl border border-[#dfdfdf] p-5"
                key={i}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-1">
                    <MdOutlineStarPurple500 className="text-yellow-500 size-8" />
                    <MdOutlineStarPurple500 className="text-yellow-500 size-8" />
                    <MdOutlineStarPurple500 className="text-yellow-500 size-8" />
                    <MdOutlineStarPurple500 className="text-yellow-500 size-8" />
                    <MdOutlineStarPurple500 className="text-yellow-500 size-8" />
                  </div>
                  <p className="text-sm text-center font-normal tracking-wide leading-normal">
                    {review.description}
                  </p>
                  <img
                    src={review.image}
                    alt="review"
                    className="rounded-full h-1/6 w-1/6"
                  />
                  <div className="my-2">
                    <h5>{review.name}</h5>
                    <p>{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center space-x-2">
          <span
            className="w-10 h-10 flex justify-center items-center flex-shrink-0 font-normal rounded-full border border-black cursor-pointer hover:bg-[#0A0D10] text-black hover:text-white duration-500 ease-in-out"
            onClick={() => gotoPrev()}
          >
            <IoIosArrowBack className="h-5 w-5" />
          </span>
          <span
            className="w-10 h-10 flex justify-center items-center flex-shrink-0 font-normal rounded-full border border-black cursor-pointer hover:bg-[#0A0D10] text-black hover:text-white duration-500 ease-in-out"
            onClick={() => gotoNext()}
          >
            <IoIosArrowForward className="h-5 w-5" />
          </span>
        </div>
      </Container>
    </div>
  );
};

export default ClientReview;
