import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../config/config";
import AuthContext from "../../Context/AuthProvider";
import { CourseContext } from "../../Context/CourseContex";

const ShowCourse = ({ item, onSelectMod }) => {
  const { auth } = useContext(AuthContext);
  const { setCourseModule } = useContext(CourseContext);
  const [module, setModule] = useState([]);
  const [meetingData, setMeetingData] = useState({});
  // import { IoMdSend } from "react-icons/io";
  const token = auth.user.jwtToken;
  const id = item?.id;
  console.log("course id", id);

  const isStudent = auth.user.role === "STUDENT";

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get(`${baseUrl}/module/get-all/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setModule(response.data);
        setCourseModule(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchModules();
    }
  }, [id, token]);

  useEffect(() => {
    try {
      const response = axios
        .get(`${baseUrl}/meeting/get/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setMeetingData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [id, token]);

  console.log(" metting data", meetingData);

  return (
    <div className="pt-0 md:ml-10 m-2 p-2">
      <div>
        {/* <p className="text-sm font-bold">{meetingData.meetingTime}</p>
        <p>
          meeting Link:{" "}
          <span className="text-xs text-blue-700">
            {meetingData.meetingLink}
          </span>
        </p> */}
      </div>
      <div className="flex justify-center items-center my-2 gap-6 ">
        {!isStudent && (
          <Link
            to={{
              pathname: "/createModule",
              state: { item: item },
            }}
          >
            <button className="btn btn-success uppercase top-0">
              Add Module
            </button>
          </Link>
        )}
        <div>
          <Link to={`/videocall/:${item?.id}`} state={{ item: item }}>
            <button className="btn btn-success uppercase top-0 ">
              Create Meeting
            </button>
          </Link>
        </div>
        <div>
          {meetingData.meetingLink && (
            <a href={meetingData.meetingLink} target="_blank">
              <button className="btn btn-success uppercase top-0 ">
                {isStudent ? "Join Meeting" : "Start Meeting"}
              </button>
            </a>
          )}
        </div>
      </div>
      <div className="border-2 border-gray-400  py-3 max-w-full mx-auto px-10">
        <div className="py-2"></div>
        <div className="grid grid-cols-1 gap-6 ">
          {module.map((mod) => (
            <div
              key={mod.id}
              onClick={() => onSelectMod(mod)}
              className="card w-96  bg-gray-600 shadow-xl text-white"
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
    </div>
  );
};

export default ShowCourse;
