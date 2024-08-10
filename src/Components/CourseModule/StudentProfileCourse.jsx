import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../config/config";
import AuthContext from "../../Context/AuthProvider";
import { Link } from "react-router-dom";

const StudentProfileCourse = () => {
  const { auth } = useContext(AuthContext);
  const [course, setCourse] = useState([]);
  const userId = auth.user.id;
  const token = auth.user.jwtToken;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/course/get-all/${userId}`,
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
  console.log("student enroll courser", course);

  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 ">
        {course &&
          course.map((item) => (
            <div
              key={item?.id}
              className="card card-compact bg-base-100 w-96 shadow-xl mt-10 mb-10"
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
                <h2 className="card-title text-2xl font-semibold">
                  {item?.title}
                </h2>

                <div className="flex flex-row gap-3">
                  <div>
                    <p className="text-sm  text-black">
                      category: {item.category}
                    </p>
                    <p className="text-sm  text-black">
                      description: {item.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm  text-black">
                      Price: <span className="text-blue-700">{item.price}</span>{" "}
                      TK
                    </p>
                    <p className="text-sm  text-black">
                      Offer: <span className="text-blue-700">{item.offer}</span>{" "}
                      Tk
                    </p>
                  </div>
                </div>
                <div className="card-actions justify-end ">
                  {item && (
                    <Link
                      to={`/viewModule/:${item?.id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-primary">View module</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StudentProfileCourse;
