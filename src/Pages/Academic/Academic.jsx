import React from "react";
import Halmet from "../../Components/Halmet";
import Covered from "../../Shared/Covered";
import heroImg from "../../assets/home/home-hero.jpg";

const Academic = () => {
  return (
    <div>
      <Halmet pagename={"Academic"}></Halmet>
      <Covered
        Img={heroImg}
        title={"Explore your academic course"}
        description={
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
        }
        btnText={"Explore more"}
      ></Covered>
    </div>
  );
};

export default Academic;
