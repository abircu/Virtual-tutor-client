import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../../config/config";
import AuthContext from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
const Courses = ({ initialCourseInfo }) => {
  const { auth } = useContext(AuthContext);
  const token = auth.user.jwtToken;
  const [course, setCourse] = useState(initialCourseInfo || []);

  useEffect(() => {
    try {
      const response = axios
        .get(`${baseUrl}/dash-board/get/courses-info`)
        .then((res) => {
          setCourse(res.data);
        });
    } catch (err) {
      console.log("course api err", err);
    }
  }, []);
  const handleCourseStatus = async (id, currentStatus) => {
    try {
      console.log("teeeee", id);
      console.log("staaaa", currentStatus);
      const response = await axios.patch(`${baseUrl}/course/set-status`, null, {
        params: { courseId: id, status: !currentStatus },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setCourse((prevCourseInfo) =>
        prevCourseInfo.map((course) =>
          course.id === id ? { ...course, active: !currentStatus } : course
        )
      );
      console.log("Response data:", response.data);
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  // course remove
  const handleDeletecourse = (id) => {
    try {
      const respons = axios.delete(`${baseUrl}/course/delete/${id}`);
      if (respons) {
        setCourse((prevCourses) => prevCourses.filter((c) => c.id !== id));
      }
      Swal.fire("course Deleted");
    } catch (err) {
      console.log(err);
    }
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
              <th>Category</th>
              <th>Price</th>
              <th>Offer</th>
              <th>Total Enroll</th>
              <th>Active Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {course?.map((info) => (
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
                          src={`${baseUrl}/files/image/${info?.image}`}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{info?.title}</div>
                    </div>
                  </div>
                </td>
                <td>{info?.category}</td>
                <td>{info?.price}</td>
                <td>{info?.offer}</td>
                <td>{info?.totalStudents}</td>

                <th>
                  {
                    <button
                      onClick={() => handleCourseStatus(info.id, info.active)}
                      key={info.id}
                      className={`btn btn-sm btn-ghost ${
                        info?.active ? " text-green-700" : "text-red-500"
                      }`}
                    >
                      {info?.active ? "Active" : "block"}
                    </button>
                  }
                </th>
                <th>
                  <button
                    key={info.id}
                    onClick={() => handleDeletecourse(info.id)}
                    className="btn btn-xs bg-red-500 text-white"
                  >
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

export default Courses;
