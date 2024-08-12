import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../Context/AuthProvider";
import axios from "axios";
import { baseUrl } from "../../../config/config";

const Teacher = ({ initialTeacherInfo }) => {
  const { auth } = useContext(AuthContext);
  const [teacherInfo, setTeacherInfo] = useState(initialTeacherInfo || []);
  const token = auth?.user.jwtToken;
  const id = teacherInfo?.id;
  const active = teacherInfo?.active;

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
  console.log(" techer ingotrdjfkldf", teacherInfo);

  const handleActiveStatus = async (id, currentStatus) => {
    try {
      console.log("teeeee", id);
      console.log("staaaa", currentStatus);
      const response = await axios.patch(
        `${baseUrl}/teacher/set-status`,
        null,
        {
          params: { teacherId: id, status: !currentStatus },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTeacherInfo((prevTeacherInfo) =>
        prevTeacherInfo.map((teacher) =>
          teacher.id === id ? { ...teacher, active: !currentStatus } : teacher
        )
      );

      console.log("Response data:", response.data);
    } catch (err) {
      console.error("Error updating status:", err);
    }

    console.log("btn click");
  };

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
                  {
                    <button
                      onClick={() => handleActiveStatus(info.id, info.active)}
                      key={info.id}
                      className={`btn btn-sm btn-ghost ${
                        info?.active ? " text-green-700" : "text-red-500"
                      }`}
                    >
                      {info?.active ? "Active" : "block"}
                    </button>
                  }
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
