import React, { useContext } from "react";
import AuthContext from "../../Context/AuthProvider";

const StudentProfile = () => {
  const { auth } = useContext(AuthContext);

  if (!auth || !auth.user) {
    return <div>Loading...</div>;
  }

  const { name, email, role, photo, message } = auth.user;

  return (
    <div className="py-20">
      <img src={photo} alt="Profile" className="profile-photo" />
      <h1 className="mt-20 text-4xl text-center font-bold">Name: {name}</h1>
      <h1 className="mt-10 text-2xl text-center font-bold">Role: {role}</h1>
      <h1 className="mt-10 text-2xl text-center font-bold">Email: {email}</h1>
      <p className="mt-10 text-lg text-center">{message}</p>
    </div>
  );
};

export default StudentProfile;
