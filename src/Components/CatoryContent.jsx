import React from "react";
import CatogorySwiper from "./CatogorySwiper";
import SectionTitle from "./SectionTitle";

const CatoryContent = () => {
  return (
    <div>
      <SectionTitle
        subHeading="From 11:00am to 10:00pm"
        heding="ORDER ONLINE"
      ></SectionTitle>
      <div>
        <CatogorySwiper></CatogorySwiper>
      </div>
    </div>
  );
};

export default CatoryContent;
