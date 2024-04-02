import React from "react";

const SectionTitle = ({ heding, subHeading }) => {
  return (
    <div className=" mx-auto  flex flex-col justify-center items-center text-center">
      <p className="text-[#D99904] text-xs ">---{subHeading}---</p>
      <h3 className="text-2xl mt-2 uppercase border-y-4 py-4 w-[90%] md:w-[20%]">
        {heding}
      </h3>
    </div>
  );
};

export default SectionTitle;
