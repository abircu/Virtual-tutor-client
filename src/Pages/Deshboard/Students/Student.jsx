import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../../config/config";
import AuthContext from "../../../Context/AuthProvider";

const Student = () => {
  const [stuenInfo, setStudentInfo] = useState("");
  const { auth } = useContext(AuthContext);
  const token = auth?.user.jwtToken;
  console.log(token);

  useEffect(() => {
    try {
      const response = axios
        .get(`${baseUrl}/dash-board/get/students-info`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setStudentInfo(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log("studentinfo", stuenInfo);

  return (
    <div className="min-h-screen  bg-gray-800 text-white">
      {stuenInfo?.map((info) => (
        <div key={info?.id} className="overflow-x-auto p-20">
          <table className="table">
            <thead>
              <tr className="text-white text-sm font-semibold ">
                <th>
                  <p>SN</p>
                </th>
                <th>Name</th>
                <th>Gender</th>
                <th>Language</th>
                <th>Country</th>
                <th>Enroll course</th>
                <th>Active Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <label>
                    <p>{info?.id}</p>
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{info?.firstName}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{info?.gender}</td>
                <td>{info?.language}</td>
                <td>{info?.country}</td>
                <td>{info?.totalEnrolledCourse}</td>

                <th>
                  <button className="btn btn-ghost btn-xs bg-blue-300">
                    details
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Student;
