import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../config/config";
import Halmet from "../../Components/Halmet";
import Covered from "../../Shared/Covered";
import heroImg from "../../assets/home/home-hero.jpg";
import AuthContext from "../../Context/AuthProvider";
import Swal from "sweetalert2";
const Skill = () => {
  const { auth } = useContext(AuthContext);
  const studentId = auth.user.id;
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(
          `${baseUrl}/course/get-category`,
          {
            params: { category: "SKILL" },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setSkill(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log("Skill resposne", skill);

  const handleEnroll = async (id) => {
    try {
      const response = await axios.get(
        `${baseUrl}/course/buy/${studentId}/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      Swal.fire("Course enroll succesfully");
    } catch (err) {
      console.log(err);
    }
    console.log("couserID:", id);
  };
  return (
    <div className="py-20 min-h-screen">
      <Halmet pagename={"Academic"}></Halmet>
      <Covered
        Img={heroImg}
        title={"Explore your skill based course"}
        description={
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
        }
        btnText={"Explore more"}
        btnID={"skill"}
      ></Covered>
      <div id="skill" className="min-h-screen max-w-7xl mx-auto py-10">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
          {skill.map((singleSkill) => (
            <div className="card card-compact w-96 shadow-xl h-[400px] bg-gray-200 pt-4 mt-10">
              <figure>
                <img
                  className="rounded-lg w-full object-cover "
                  src={`${baseUrl}/files/image/${singleSkill?.image}`}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p className="text-xl text-sky-600 font-semibold">
                  {singleSkill.title}
                </p>
                <div className="flex gap-3">
                  <p className="text-xl text-sky-600 font-semibold">
                    {singleSkill.type}
                  </p>
                  <div className="text-sky-600">
                    <p>price: {singleSkill.price}</p>
                    <p>Offer: {singleSkill.offer}</p>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleEnroll(singleSkill.id)}
                    className="btn btn-primary uppercase"
                  >
                    Enroll now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
