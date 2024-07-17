import React, { useContext, useState } from "react";

import { CourseContext } from "../../Context/CourseContex";
import axios from "axios";
import { baseUrl } from "../../config/config";
import AuthContext from "../../Context/AuthProvider";

const CreateModule = () => {
  const { item } = useContext(CourseContext);
  const { auth } = useContext(AuthContext);
  const token = auth.user.jwtToken;
  const course = { id: item?.id };
  const [name, setNAme] = useState("");
  const [topics, setTopics] = useState("");
  const [contentSource, setContentSource] = useState("");
  const [contentName, setContenName] = useState("");
  const [publishingDateTime, setPublishDateAndTime] = useState("");
  const date = new Date();
  // console.log("jwt", courseTeacher);
  if (publishingDateTime == "") {
    setPublishDateAndTime(date);
  }

  const handleModuleCreate = (e) => {
    e.preventDefault();

    const allValue = {
      course,
      name,
      topics,
      contentName,
      publishingDateTime,
    };
    try {
      axios
        .post(`${baseUrl}/module/add`, allValue, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("create module", res.data);
        });
    } catch (error) {
      console.log(error);
    }
    console.log("dfjdkfjkd", allValue);
  };

  const submitFile = () => {
    const formData = new FormData();

    formData.append("file", contentSource);
    console.log(formData);

    axios
      .post(`${baseUrl}/files/upload/any-file`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setContenName(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  //   console.log("submit any file", contentName);

  const handleUploadChange = (e) => {
    setContentSource(e.target.files[0]);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto  pt-20">
      <div className="p-2 md:10 bg-slate-200 rounded-lg">
        <h1 className="uppercase text-center justify-center text-3xl font-semibold py-6 md:py-10">
          Add new course module in your {item?.title} course
        </h1>
        <div>
          <div action="">
            <div className="flex gap-6   flex-col my-10 justify-center items-center">
              <div className="flex flex-col gap-2 mt-4  w-full md:px-10 px-2">
                <label
                  htmlFor=""
                  className="text-indigo-600 font-bold text-xl uppercase"
                >
                  Module Name
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Course module name"
                  value={name}
                  onChange={(e) => setNAme(e.target.value)}
                  className="bg-white text-gray-400 px-2 py-1 font-semibold rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4  w-full md:px-10 px-2">
                <label
                  htmlFor=""
                  className="text-indigo-600 font-bold text-xl uppercase"
                >
                  Module Topics
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Course category"
                  value={topics}
                  onChange={(e) => setTopics(e.target.value)}
                  className="bg-white text-gray-400 px-2 py-1 font-semibold rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4  w-full md:px-10 px-2">
                <label
                  htmlFor=""
                  className="text-indigo-600 font-bold text-xl uppercase"
                >
                  Upload file
                </label>
                <div className="flex gap-10">
                  {" "}
                  <input
                    type="file"
                    name="file"
                    onChange={handleUploadChange}
                    className="bg-white text-indigo-600 px-2 py-2 font-semibold rounded-lg w-full"
                  />
                  <button
                    className="btn bg-gray-600 text-white rounded-lg hover:text-black"
                    onClick={submitFile}
                  >
                    Upload
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4 w-full md:px-10 px-2">
                <label
                  className="text-indigo-600 font-bold text-xl mb-2 uppercase"
                  htmlFor=""
                >
                  Publish date & Time
                </label>
                <input
                  className="px-4 py-1 rounded-lg"
                  type="datetime-local"
                  name="date&time"
                  value={publishingDateTime}
                  onChange={(e) => setPublishDateAndTime(e.target.value)}
                />
              </div>
            </div>

            <button
              className="btn btn-primary w-full text-xl font-semibold mt-20
                text-white uppercase"
              onClick={handleModuleCreate}
            >
              Create Module
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModule;
