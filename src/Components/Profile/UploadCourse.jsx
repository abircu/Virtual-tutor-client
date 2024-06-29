import React, { useState } from "react";

const UploadCourse = () => {
  const [data, setData] = useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefualt();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const type = form.type.value;
    const category = form.category.value;
  };
  return (
    <div className="py-20 min-h-screen bg-gradient-to-r from-indigo-500 ...">
      <h1 className="flex justify-center items-center text-3xl font-bold mt-20 ">
        Upload a new course
      </h1>
      <div className="max-w-6xl min-h-screen mx-auto rounded-2xl bg-slate-200 my-10">
        <div className="p-10">
          <form action="" onSubmit={handleFormSubmit}>
            <div className="flex gap-6 my-10 justify-center items-center">
              <div className="flex-1 flex-col">
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor=""
                    className="text-indigo-600 font-bold text-xl"
                  >
                    Course Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Course Title"
                    className="bg-white text-gray-400 px-2 py-1 font-semibold rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label htmlFor="" className="text-gray-400 font-bold text-xl">
                    Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    placeholder="Upload image"
                    className="bg-white text-blue-600 px-2 py-1 font-semibold rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor=""
                    className="text-indigo-600 font-bold text-xl"
                  >
                    Course Type
                  </label>
                  <input
                    type="text"
                    name="type"
                    placeholder="Select course type"
                    className="bg-white text-gray-400 px-2 py-1 font-semibold rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor=""
                    className="text-indigo-600 font-bold text-xl"
                  >
                    Course Cetegory
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Course category"
                    className="bg-white text-gray-400 px-2 py-1 font-semibold rounded-lg"
                  />
                </div>
              </div>
              <div className="flex-1 flex-col">right half</div>
            </div>

            <input
              className="btn btn-primary w-full text-xl font-semibold text-white"
              type="submit"
              name="submit"
              value={"Uploade"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadCourse;
