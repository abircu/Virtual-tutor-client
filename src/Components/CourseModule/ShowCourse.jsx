import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../config/config";
import AuthContext from "../../Context/AuthProvider";

const ShowCourse = ({ item, onSelectMod }) => {
  const { auth } = useContext(AuthContext);
  const [module, setModule] = useState([]);
  const token = auth.user.jwtToken;
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
  // console.log("course module", module);
  return (
    <div className="pt-0 md:ml-10 m-2 p-2">
      <div className="flex justify-center items-center my-2 gap-6 ">
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
          <button className=" btn btn-success upparcase text-sm">
            Start Meeting
          </button>
        </div>
      </div>
      <div className="border-2 border-gray-400 px-2 py-3 max-w-full mx-auto">
        <div className="py-2">
          <p className="text-2xl font-semibold">advance java</p>
          <p className="text-xl border-b-2 border-gray-500 pb-2">
            abu taher sir
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 ">
          {module.map((mod) => (
            <div
              key={mod.id}
              onClick={() => onSelectMod(mod)}
              className="card w-full  bg-gray-600 shadow-xl text-white"
            >
              {" "}
              <div className="card-body ">
                <div className=" leading-tight">
                  <h2 className="card-title">{mod.name}</h2>
                </div>
                <div>
                  <h1 className="text-sm font-semibold">Module: {mod.id}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="min-h-screen grid grid-cols-1 md:w-1/4 max-w-6xl mx-auto  "></div> */}
    </div>
  );
};

export default ShowCourse;
