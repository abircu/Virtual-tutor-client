import React, { useContext } from "react";
import AuthContext from "../../Context/AuthProvider";
import avatar from "../../assets/home/review.jpg";

const TeacherProfile = () => {
  const { auth } = useContext(AuthContext);

  if (!auth || !auth.user) {
    return <div>Loading...</div>;
  }

  const { name, email, role, photo, message } = auth.user;

  return (
    <div className="py-20 min-h-screen">
      <div className=" mt-20 flex justify-center items-center">
        {photo === null ? (
          <>
            <img
              src={avatar}
              alt="Profile"
              className="profile-photo  w-40 h-40 rounded-full"
            />
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
      <button className="">Update Profile</button>
    </div>
  );
};

export default TeacherProfile;
