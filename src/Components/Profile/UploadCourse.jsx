import axios from "axios";
import React, { useContext, useState } from "react";
import { baseUrl } from "../../config/config";
import AuthContext from "../../Context/AuthProvider";

const UploadCourse = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [publishingDateTime, setPublishDateAndTime] = useState("");
  const { auth } = useContext(AuthContext);
  const jwtToken = auth.user.jwtToken;
  const id = auth.user.id;
  const date = new Date();
  // console.log("jwt", courseTeacher);
  if (publishingDateTime == "") {
    setPublishDateAndTime(date);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const allValue = {
      courseTeacher: { id },
      title,
      type,
      category,
      duration,
      description,
      price,
      offer,
      publishingDateTime,
      image,
      courseModuleRequests: [],
    };
    try {
      axios
        .post(`${baseUrl}/course/create`, allValue, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        .then((res) => {
          console.log("create course", res.data);
        });
    } catch (error) {
      console.log(error);
    }
    console.log("dfjdkfjkd", allValue);
  };
  const submitImge = () => {
    const formData = new FormData();

    formData.append("image", imageFile);
    console.log(formData);

    axios
      .post(`${baseUrl}/files/upload/image`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((res) => {
        setImage(res.data);
        console.log("submit", image);
      });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div className="py-20 min-h-screen bg-gradient-to-r from-indigo-500 ...">
      <h1 className="flex justify-center items-center text-5xl font-bold mt-20 uppercase ">
        Create new course
      </h1>
      <div className="max-w-6xl min-h-screen mx-auto rounded-2xl bg-slate-200 my-10">
        <div className="p-10">
          <div action="">
            <div className="flex gap-6  md:flex-row flex-col my-10 justify-center items-center">
              <div className="flex-1 flex-col">
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor=""
                    className="text-indigo-600 font-bold text-xl uppercase"
                  >
                    Course Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Course Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-white text-gray-400 px-2 py-1 font-semibold rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor=""
                    className="text-indigo-600 font-bold text-xl uppercase"
                  >
                    Image
                  </label>
                  <div className="flex gap-10">
                    {" "}
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={handleImageChange}
                      placeholder="Upload image"
                      className="bg-white text-indigo-600 px-2 py-1 font-semibold rounded-lg"
                    />
                    <button
                      className="btn bg-gray-600 text-white rounded-lg hover:text-black"
                      onClick={submitImge}
                    >
                      Upload
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor=""
                    className="text-indigo-600 font-bold text-xl uppercase"
                  >
                    Course Type
                  </label>
                  <select
                    name="option"
                    id="option"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className=" w-full  text-xl font-semibold px-3 rounded-lg py-1 "
                  >
                    <option className="text-xl text-gray-400" disabled value="">
                      Select course type
                    </option>
                    <option>SKILL</option>
                    <option>ACADEMIC</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor=""
                    className="text-indigo-600 font-bold text-xl uppercase"
                  >
                    Course Cetegory
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Course category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-white text-gray-400 px-2 py-1 font-semibold rounded-lg"
                  />
                </div>
              </div>
              <div className="flex-1 flex-col">
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor=""
                    className="text-indigo-600 font-bold text-xl uppercase"
                  >
                    Course Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Select course duration"
                    className="bg-white text-gray-400 px-2 py-1 font-semibold rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
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

                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor=""
                    className="text-indigo-600 font-bold text-xl uppercase"
                  >
                    Course Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="bg-white text-gray-400 px-2 py-1 font-semibold rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor=""
                    className="text-indigo-600 font-bold text-xl uppercase"
                  >
                    Offer
                  </label>
                  <input
                    type="number"
                    name="offer"
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    className="bg-white text-gray-400 px-2 py-1 font-semibold rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-evenly">
              <div className="flex flex-col gap-2 mt-4 mb-10">
                <label
                  htmlFor=""
                  className="text-indigo-600 font-bold text-xl uppercase"
                >
                  Course Description
                </label>
                <textarea
                  type="textarea"
                  name="description"
                  placeholder="Course desription"
                  rows={5}
                  cols={20}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-white text-gray-400 px-2 py-1 font-semibold rounded-lg"
                />
              </div>
              <button
                className="btn btn-primary w-full text-xl font-semibold mt-20
                text-white uppercase"
                onClick={handleFormSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCourse;
