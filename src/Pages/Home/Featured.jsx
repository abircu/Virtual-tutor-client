import SectionTitle from "../../Components/SectionTitle";
import FeaturedImg from "../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="max-w-6xl mx-auto bg-fixed bg-slate-500 bg-opacity-25 featured-item py-10 ">
      <SectionTitle
        subHeading={"check it out"}
        heding={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex text-white bg-slate-500 bg-opacity-40 justify-center py-8 px-16 items-center space-y-3">
        <div>
          <img src={FeaturedImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 28 2024</p>
          <h4 className="uppercase">WHERE CAN I GET SOME?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className=" btn btn-outline  border-0 text-blue-800 font-bold  border-b-4">
            Oroder now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
