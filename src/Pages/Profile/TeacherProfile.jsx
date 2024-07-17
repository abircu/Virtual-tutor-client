import React, { useContext, useEffect, useState } from "react";

import avatar from "../../assets/home/review.jpg";
import { Link } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import FontAowsame from "../../Shared/FontAowsame";
import axios from "axios";
import { baseUrl } from "../../config/config";
import AuthContext from "../../Context/AuthProvider";

const TeacherProfile = () => {
  const { auth } = useContext(AuthContext);
  const [update, setUpdate] = useState(null);
  const [profileImage, setProfileImage] = "";
  const token = auth.user.jwtToken;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/teacher/get/${auth.user.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUpdate(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [baseUrl, auth.id, token, setUpdate]);

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  if (!auth || !auth.user) {
    return <div>Loading...</div>;
  }

  const { name, email, role, photo, message, id } = auth.user;

  return (
    <div className="py-20 min-h-screen bg-indigo-400 p-2">
      <div className="max-w-6xl mx-auto ">
        <div className="mt-20 flex justify-center items-center">
          {update?.photo === null ? (
            <>
              <img
                src={avatar}
                alt="Profile"
                className="profile-photo  w-40 h-40 rounded-full"
              />
              {/* hdkdjfld */}
            </>
          ) : (
            <>
              <img
                src={update?.photo}
                alt="Profile"
                className="w-40 h-40 rounded-full"
              />
            </>
          )}
        </div>
        <h1 className="mt-10 text-4xl text-center font-bold"> {name}</h1>

        {/* <h1 className="mt-10 text-2xl text-center font-bold">id: {id}</h1> */}

        <div className="py-10">
          <div className="flex flex-col md:flex-row  gap-4  justify-center items-center ">
            <Link to="/update-profile">
              <button className=" px-6 py-3 text-white text-xl font-semibold bg-black rounded-bl-full rounded-tr-full hover:bg-slate-200 hover:text-indigo-800 ">
                Update Profile
              </button>
            </Link>
            <Link to="/mycourse">
              <button className=" px-6 py-3 text-white text-xl font-semibold bg-black rounded-bl-full rounded-tr-full hover:bg-slate-200 hover:text-indigo-800 ">
                My courses
              </button>
            </Link>
            <Link to="/uploadcourse">
              <button className=" px-6 py-3 text-white text-xl font-semibold bg-black rounded-bl-full rounded-tr-full hover:bg-slate-200 hover:text-indigo-800 ">
                Course Upload
              </button>
            </Link>
          </div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="flex-1 ">
            <div className="py-10">
              <h1 className="text-xl font-semibold">Tacher Info:</h1>
              <p className="">{update?.bio}</p>
              <h1 className="text-xl font-semibold mt-10">Degree</h1>
              <p>{update?.degree}</p>
              <h2 className="text-xl font-semibold mt-10">Skills</h2>
              <p className="flex flex-col">
                {update?.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </p>
            </div>
          </div>
          <div className="flex-1  flex-col border-l-2 border-gray-600 pl-10 ">
            <h1 className="text-xl font-semibold mt-10">Language:</h1>
            <p>{update?.language}</p>
            <h1 className="text-xl font-semibold mt-10">Contact:</h1>
            <div className="flex flex-col">
              <p className=" flex gap-2">
                gmail:
                <p>{email}</p>
              </p>
              <p className=" flex gap-2">
                Mobail:<p>{update?.phone}</p>
              </p>
            </div>

            <h1 className="text-xl font-semibold">Gender:</h1>
            <p>{update?.gender}</p>
            <h1 className="text-xl font-semibold">City:</h1>
            <p>{update?.city}</p>
            <h1 className="text-xl font-semibold">Country:</h1>
            <p>{update?.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
