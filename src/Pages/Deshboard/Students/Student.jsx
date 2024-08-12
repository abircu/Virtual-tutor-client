import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../../config/config";
import AuthContext from "../../../Context/AuthProvider";

const Student = ({ initialStudentInfo }) => {
  const [stuenInfo, setStudentInfo] = useState(initialStudentInfo || []);
  const { auth } = useContext(AuthContext);
  const token = auth?.user.jwtToken;
  // console.log(token);

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

  const handleStudentStatus = async (id, currentStatus) => {
    try {
      console.log("teeeee", id);
      console.log("staaaa", currentStatus);
      const response = await axios.patch(
        `${baseUrl}/student/set-status`,
        null,
        {
          params: { studentId: id, status: !currentStatus },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStudentInfo((prevStudentInfo) =>
        prevStudentInfo.map((student) =>
          student.id === id ? { ...student, active: !currentStatus } : student
        )
      );

      console.log("Response data:", response.data);
    } catch (err) {
      console.error("Error updating status:", err);
    }

    console.log("btn click");
  };

  return (
    <div className="min-h-screen  bg-gray-800 text-white">
      <div className="overflow-x-auto p-20">
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
            </tr>
          </thead>
          {stuenInfo.map((info) => (
            <tbody key={info?.id}>
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
                <td>{info?.totalEnrolledCourse}</td>

                <th>
                  {
                    <button
                      onClick={() => handleStudentStatus(info.id, info.active)}
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

export default Student;
