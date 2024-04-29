import React from "react";
import ClientReview from "./ClientReview";

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="text-center justify-center items-center">
        <p className=" font-bold text-orange-600">Testimonials</p>

        <div>
          <ClientReview></ClientReview>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
