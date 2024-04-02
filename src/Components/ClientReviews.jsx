import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./ClientReviews.css";
import { Navigation } from "swiper/modules";

const ClientReviews = ({ review }) => {
  if (!review) {
    return null;
  }
  const { name, details, rating } = review;
  return (
    <div className="my-20">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientReviews;
