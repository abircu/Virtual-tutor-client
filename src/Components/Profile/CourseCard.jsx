import React from "react";
import { baseUrl } from "../../config/config";

const CourseCard = ({ Type, title, image, handleClick }) => {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl mt-10">
      <figure>
        <img src={`${baseUrl}/files/image/${image}`} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Type}</h2>
        <p>{title}</p>
        <div className="card-actions justify-end">
          <button onClick={handleClick} className="btn btn-primary">
            View Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
