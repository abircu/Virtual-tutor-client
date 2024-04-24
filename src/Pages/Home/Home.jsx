import React from "react";
import Bannner from "../../Components/Bannner";
import Halmet from "../../Components/Halmet";
import Hero_top from "../../Components/Hero_top";

const Home = () => {
  return (
    <div>
      <Halmet pagename={"Home"}></Halmet>
      <Bannner></Bannner>
      <Hero_top></Hero_top>
    </div>
  );
};

export default Home;
