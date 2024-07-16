import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthProvider";
import axios from "axios";
import { baseUrl } from "../../config/config";

const MyCourse = () => {
  const [course, setCourse] = useState("");
  const { auth } = useContext(AuthContext);
  const userId = auth.user.id;
  const token = auth.user.jwtToken;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/teacher/get/all-course/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCourse(response.data);
        console.log("course resoponse ", course);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [baseUrl, userId, token, setCourse]);
  return (
    <div className="bg-gradient-to-tr from-indigo-600 to-sky-400 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="text-center justify-center uppercase text-3xl font-semibold mb-2">
          my courses
        </h1>
        <div className="bg-gray-200 rounded-lg p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img
                src="http://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
