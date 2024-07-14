import React, { useContext } from "react";
import AuthContext from "../../Context/AuthProvider";
import avatar from "../../assets/home/review.jpg";
import { Link } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import FontAowsame from "../../Shared/FontAowsame";

const TeacherProfile = () => {
  const [profileImage, setProfileImage] = "";

  const handleFileChange = (e) => {
    console.log("skdkd", e);
    setProfileImage(e.target.files[0]);
  };

  const { auth } = useContext(AuthContext);

  if (!auth || !auth.user) {
    return <div>Loading...</div>;
  }

  const { name, email, role, photo, message } = auth.user;

  return (
    <div className="py-20 min-h-screen bg-indigo-400 p-2">
      <div className="max-w-6xl mx-auto ">
        <div className="mt-20 flex justify-center items-center">
          <div className="relative ">
            <label className=" top-4  absolute  cursor-pointer text-white  text-3xl font-bold py-2 px-4 rounded mt-4">
              <FontAowsame icon={<GrEdit></GrEdit>} className=" " />
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
            </label>
          </div>
          {photo === null ? (
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
              <img src={photo} alt="Profile" className="profile-photo" />
            </>
          )}
        </div>
        <h1 className="mt-10 text-4xl text-center font-bold">Name: {name}</h1>
        <h1 className="mt-10 text-2xl text-center font-bold">Role: {role}</h1>
        <h1 className="mt-10 text-2xl text-center font-bold">Email: {email}</h1>

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
        <div className="py-10">
          <h1 className="text-2xl font-bold">Tacher Info:</h1>
          <p className="text-xl font-semibold mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet
            alias neque rerum voluptatem, a dicta quidem libero sunt vero,
            aperiam quasi, veritatis necessitatibus eos placeat quis esse minus
            iusto.
          </p>
          <h2 className="text-2xl font-bold mt-10">Skills</h2>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
