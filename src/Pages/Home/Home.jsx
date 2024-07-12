import React, { useContext, useEffect } from "react";
import Bannner from "../../Components/Bannner";
import Halmet from "../../Components/Halmet";
import Hero_top from "../../Components/Hero_top";
import PopularCard from "../../Components/Home/PopularCard";
import AboutUs from "../../Components/Home/AboutUs";
import VartualTutorInfo from "../../Components/Home/VartualTutorInfo";
import Testimonials from "../../Components/Home/Testimonials";
import Faq from "../../Components/Home/Faq";
import AuthContext from "../../Context/AuthProvider";

const Home = ({ contetId }) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {});
  return (
    <div className="bg-slate-200">
      <Halmet pagename={"Home"}></Halmet>
      <Bannner contetId={"smoth"}></Bannner>
      <Hero_top id="smoth"></Hero_top>
      <PopularCard></PopularCard>
      <AboutUs></AboutUs>
      <VartualTutorInfo></VartualTutorInfo>
      <Faq></Faq>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
