import Covered from "../Shared/Covered";
import heroImage from "../assets/home/hero_image.jpg";

const Bannner = () => {
  return (
    <Covered
      Img={heroImage}
      title={"Virtual tutor "}
      description={
        "Unlimited access to 7,000+ world-class courses, hands-on projects, and job-ready certificate programs—all included in your subscription"
      }
      btnText={"Get started"}
    ></Covered>
  );
};

export default Bannner;
