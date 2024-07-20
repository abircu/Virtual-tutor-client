import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthProvider";
import axios from "axios";
import { baseUrl } from "../../config/config";
import { Link } from "react-router-dom";

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
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // console.log("course resoponse ", course);
  return (
    <div className="bg-gradient-to-tr from-indigo-600 to-sky-400 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="text-center justify-center uppercase text-3xl font-semibold mb-2">
          my courses
        </h1>
        <div className="bg-gray-200 rounded-lg p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {course &&
            course.map((item) => (
              <div
                key={item?.id}
                className="card bg-base-100 image-full w-96  h-64 shadow-xl mt-10"
              >
                <figure>
                  <img
                    className="  object-contain"
                    style={{ objectFit: "cover" }}
                    src={`${baseUrl}/files/image/${item?.image}`}
                    alt=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item?.Type}</h2>
                  <p>{item?.title}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/viewModule/:${item?.id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-primary">View Course</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
