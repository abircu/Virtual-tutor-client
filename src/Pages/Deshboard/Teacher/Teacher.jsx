import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../Context/AuthProvider";
import axios from "axios";
import { baseUrl } from "../../../config/config";

const Teacher = () => {
  const { auth } = useContext(AuthContext);
  const [teacherInfo, setTeacherInfo] = useState([]);
  const token = auth?.user.jwtToken;

  useEffect(() => {
    try {
      const response = axios
        .get(`${baseUrl}/dash-board/get/teachers-info`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setTeacherInfo(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log("teacher info", teacherInfo);
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="overflow-x-auto p-20">
        <table className="table">
          <thead>
            <tr className="text-white text-sm font-semibold ">
              <th>
                <p>ID</p>
              </th>
              <th>Name</th>
              <th>Gender</th>
              <th>Language</th>
              <th>Country</th>
              <th>Total Course</th>
              <th>Total Sell</th>
              <th>Active Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {teacherInfo.map((info) => (
            <tbody key={info.id}>
              <tr>
                <th>
                  <label>
                    <p>{info.id}</p>
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={info?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{info?.firstName}</div>
                      <div className="text-sm opacity-50">{info.email}</div>
                    </div>
                  </div>
                </td>
                <td>{info?.gender}</td>
                <td>{info?.language}</td>
                <td>{info?.country}</td>
                <td>{info?.totalCourse}</td>
                <td>{info?.totalSell}</td>
                <th>
                  {info?.active ? (
                    <button className=" text-green-700">Active</button>
                  ) : (
                    <button className="  text-red-600">Block</button>
                  )}
                </th>
                <th>
                  <button className="btn btn-xs bg-red-500 text-white">
                    Remove
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Teacher;
