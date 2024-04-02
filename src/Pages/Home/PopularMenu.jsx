import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../../Components/MenuItem";

const PopularMenu = () => {
  const [menudata, setMenudata] = useState([]);
  useEffect(() => {
    fetch("Menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenudata(popularItems);
      });
  }, []);
  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle
        heding={"FROM OUR MENU"}
        subHeading={"check it out"}
      ></SectionTitle>
      <div className="   px-2 grid gap-10 grid-cols-1 md:grid-cols-2 my-10">
        {menudata.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-outline border-0 border-b-4 my-4  text-center">
          View All
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
