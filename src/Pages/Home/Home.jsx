import React from "react";
import Bannner from "../../Components/Bannner";
import CatoryContent from "../../Components/CatoryContent";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testimonial from "./Testimonial";
import Halmet from "../../Components/Halmet";
import Covered from "../../Shared/Covered";
import heroImg from "../../assets/home/home-hero.jpg";

const Home = () => {
  return (
    <div>
      <Halmet pagename={"Home"}></Halmet>
      <Bannner></Bannner>
      {/* <Covered
        Img={heroImg}
        title={"Explore your academic course"}
        description={
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
        }
        btnText={"Explore more"}
      ></Covered> */}
      <CatoryContent></CatoryContent>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
