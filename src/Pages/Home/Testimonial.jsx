import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "../../Components/ClientReviews.css";
import { Navigation } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("Reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-20">
      <SectionTitle
        subHeading={"what our client say"}
        heding={"testimonials"}
      ></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper p-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="w-[100%] text-center flex flex-col justify-center items-center my-10 p-10">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="text-orange-500  text">{review.name}</p>
              <p>{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
