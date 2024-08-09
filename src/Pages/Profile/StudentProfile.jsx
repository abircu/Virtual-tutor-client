import React, { useContext, useState } from "react";
import AuthContext from "../../Context/AuthProvider";
import avatar from "../../assets/home/review.jpg";
import axios from "axios";
import { baseUrl } from "../../config/config";
import StudentProfileCourse from "../../Components/CourseModule/StudentProfileCourse";

const StudentProfile = () => {
  const [spPhoto, setSpPhoto] = useState("");
  const { auth, setAuth } = useContext(AuthContext);
  const token = auth.user.jwtToken;
  const id = auth.user.id;
  const prevuser = auth.user;
  const { name, email, role, message, photo } = auth.user;

  if (!auth || !auth.user) {
    return <div>Loading...</div>;
  }

  // update student photo

  const handleStudentProfile = async (e) => {
    e.preventDefault();
    const studentValue = { id, photo: spPhoto };
    try {
      const response = await axios.patch(
        `${baseUrl}/student/update`,
        studentValue,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAuth((auth) => ({
        ...auth,
        user: {
          ...auth.user,
          photo: response.data.photo,
        },
      }));
      console.log("student profile update", response.data.photo);
    } catch (error) {
      console.error("Update API error:", error);
    }
  };

  const handleImageChange = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setSpPhoto(reader.result);
      console.log(spPhoto);
    };

    reader.onerror = (error) => {
      console.log("error: ", error);
    };
  };

  return (
    <div className="py-20 bg-gradient-to-tr bg-slate-100 from-sky-200 ">
      <div
        className="border-b-4  pb-6 border-gray-500
      "
      >
        <div className=" flex justify-center items-center mt-20">
          {photo ? (
            <img
              src={photo}
              alt="Profile"
              className="profile-photo h-40 w-40 rounded-full"
            />
          ) : (
            <img
              src={avatar}
              alt="Profile"
              className="profile-photo h-40 w-40 rounded-full"
            />
          )}
          <div className=" ">
            <button
              className="text-sm font-extrabold text-sky-700"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Edit
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className="flex flex-col mb-14">
                  <label htmlFor="image" className="text-xl font-bold mb-2">
                    Choose an image:
                  </label>
                  <div className="flex">
                    <input
                      type="file"
                      id="image"
                      name="file"
                      accept="image/gif, image/jpeg, image/png"
                      onChange={handleImageChange}
                      className="px-3 rounded-lg py-1"
                    />
                    {photo == "" || photo == null ? (
                      " "
                    ) : (
                      <img
                        className="rounded-full"
                        width={40}
                        height={40}
                        src={photo}
                      />
                    )}
                    <button
                      onClick={handleStudentProfile}
                      className="text-xl font-bold text-sky-800 ml-4"
                    >
                      Upload
                    </button>
                  </div>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <h1 className="mt-10 text-4xl text-center font-bold"> {name}</h1>
        <h1 className="mt-6 text-2xl text-center font-bold"> {role}</h1>
        <h1 className="mt-6 text-2xl text-center font-bold"> {email}</h1>
      </div>
      <div>
        <div className=" flex items-center justify-center">
          <h1 className="text-gray-600 shadow-lg shadow-blue-50 text-3xl font-bold p-3">
            My Course
          </h1>
        </div>
        <div>
          <StudentProfileCourse></StudentProfileCourse>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
