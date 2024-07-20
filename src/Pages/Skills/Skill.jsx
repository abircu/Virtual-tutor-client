import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../config/config";

const Skill = () => {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(`${baseUrl}/course/get/SKILL`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setSkill(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log("academic resposne", skill);
  return (
    <div className="py-20 min-h-screen">
      <p className="flex justify-center items-center text-center  text-3xl font-bold mt-10">
        Skills{" "}
      </p>
    </div>
  );
};

export default Skill;
