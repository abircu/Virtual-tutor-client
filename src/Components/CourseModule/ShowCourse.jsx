import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../config/config";
import AuthContext from "../../Context/AuthProvider";

const ShowCourse = ({ item }) => {
  const { auth } = useContext(AuthContext);
  const [module, setModule] = useState("");
  const token = auth.user.jwtToken;
  // console.log("token", token);
  const id = item?.id;

  useEffect(() => {
    try {
      const response = axios
        .get(`${baseUrl}/module/get-all/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setModule(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log("course module", module);
  return (
    <div className="pt-0 md:ml-10 m-2 p-2">
      <div className="flex justify-center items-center my-2 ">
        <Link
          to={{
            pathname: "/createModule",
            state: { item: item },
          }}
        >
          <button className="btn btn-success uppercase top-0 ">
            Add module
          </button>
        </Link>
        <div>
          <button className=" btn btn-success upparcase">Start Meeting</button>
        </div>
      </div>
      <div className="grid grid-cols-1">
        {/* {module.map((mod) => (
          <div key={mod.id} className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        ))} */}
      </div>
      <div className="min-h-screen grid grid-cols-1 md:w-1/4 max-w-6xl mx-auto  "></div>
    </div>
  );
};

export default ShowCourse;
