import React, { useContext, useEffect, useState } from "react";
import AuthContext, { AuthProvider } from "../../Context/AuthProvider";
import Select from "react-select";
import axios from "axios";
import { baseUrl } from "../../config/config";
import { render } from "react-dom";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { auth, loading } = useContext(AuthContext);
  const [firstName, setFistName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [degree, setDegree] = useState("");
  const [bio, setText] = useState("");
  const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [id, setId] = useState("");
  const [photo, setPhoto] = useState(null);

  const skillOptions = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "C++", label: "C++" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "Django", label: "Django" },
    { value: "Flask", label: "Flask" },
    { value: "SQL", label: "SQL" },
    { value: "NoSQL", label: "NoSQL" },
  ];

  useEffect(() => {
    if (auth.user) {
      setFistName(auth.user.name || "");
      setEmail(auth.user.email || "");
      setRole(auth.user.role || "");
      setId(auth.user.id || " ");
    }
  }, [auth]);

  if (loading) {
    return <div>...Loading</div>;
  }

  if (!auth.isAuthenticated || !auth.user) {
    return <div>...Loading</div>;
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const { jwtToken } = auth.user;

    const allValues = {
      id,
      firstName,
      role,
      email,
      photo,
      degree,
      bio,
      skills,
      language,
      phone,
      gender,
      city,
      country,
    };

    try {
      const response = await axios.patch(
        `${baseUrl}/teacher/update`,
        allValues,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      // Reset state values after successful submission
      setFistName("");
      setRole("");
      setEmail("");
      setPhoto(null);
      setDegree("");
      setText("");
      setSkills([]);
      setLanguage("");
      setPhone("");
      setGender("");
      setCountry("");
      setCity("");
      Swal.fire("profile update succesfully");
      // Optionally, perform additional actions upon successful update
    } catch (error) {
      console.error("Update API error:", error);
      // Handle error state or show error message to the user
    }
  };

  const handleSkillsChange = (selectedOptions) => {
    setSkills(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };
  const handleImageChange = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setPhoto(reader.result);
      console.log(photo);
    };

    reader.onerror = (error) => {
      console.log("error: ", error);
    };
  };

  return (
    <div className="bg-indigo-400 py-20 p-2 min-h-screen ">
      <div className="max-w-6xl mx-auto items-center justify-center">
        <form
          onSubmit={handleUpdateProfile}
          className=" p-2 md:p-6 mt-10 shadow-xl shadow-black rounded-lg"
        >
          <div className="flex md:flex-row flex-col mt-10 gap-10">
            <div className="flex-1">
              <div className="flex flex-col mb-14">
                <label htmlFor="name" className="text-xl font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={firstName}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg w-full bg-white py-2 px-3"
                />
              </div>
              <div className="flex flex-col my-14">
                <label htmlFor="role" className="text-xl font-bold mb-2">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="rounded-lg w-full bg-white py-2 px-3"
                />
              </div>
              <div className="flex flex-col my-14">
                <label htmlFor="email" className="text-xl font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg w-full bg-white py-2 px-3"
                />
              </div>
              <div className="flex flex-col my-14">
                <label htmlFor="email" className="text-xl font-bold mb-2">
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="rounded-lg w-full bg-white py-2 px-3"
                />
              </div>
              <div className="flex flex-col my-14">
                <label htmlFor="email" className="text-xl font-bold mb-2">
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="rounded-lg w-full bg-white py-2 px-3"
                />
              </div>
            </div>
            <div className="flex-1">
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
                      height={360}
                      src={photo}
                    />
                  )}
                </div>
                {/* <button className="text-sm font-bold text-sky-800">
                  Upload
                </button> */}
              </div>
              <div className="flex flex-col mb-14">
                <label htmlFor="option" className="text-xl font-bold mb-2">
                  Select your academic degree
                </label>
                <select
                  name="option"
                  id="option"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className=" w-full  text-xl font-semibold px-3 rounded-lg py-1 "
                >
                  <option disabled value="">
                    Select your academic degree
                  </option>
                  <option>BSc in Computer Science and Engineering</option>
                  <option>BSc in Electrical and Electronics Engineering</option>
                  <option>BSc in Mechanical Engineering</option>
                  <option>BSc in Civil Engineering</option>
                  <option>BSc in Textile Engineering</option>
                  <option>BSc in Marine Engineering</option>
                  <option>BSc in Mathematics</option>
                  <option>BSc in Physics</option>
                  <option>BSc in Chemistry</option>
                  <option>BA in Bangla</option>
                  <option>BA in English</option>
                  <option>BA in Social Science</option>
                  <option>BBA in Economics</option>
                  <option>BBA in Finance</option>
                  <option>BBA in Marketing</option>
                  <option>BBA in Accounting</option>
                </select>
              </div>
              <div className="flex flex-col mb-14">
                <label htmlFor="skills" className="text-xl font-bold mb-2">
                  Skills
                </label>
                <Select
                  isMulti
                  name="skills"
                  options={skillOptions}
                  className="basic-multi-select rounded-lg my-1"
                  classNamePrefix="select"
                  onChange={handleSkillsChange}
                />
              </div>
              <div className="flex flex-col mb-14">
                <label htmlFor="image" className="text-xl font-bold mb-2">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={phone}
                  placeholder="Enter your phone number"
                  onChange={(e) => setPhone(e.target.value)}
                  className="ounded-lg w-full bg-white py-2 px-3"
                />
              </div>
              <div className="flex flex-col mb-14">
                <label htmlFor="name" className="text-xl font-bold mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="rounded-lg w-full bg-white py-2 px-3 uppercase"
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="" className="text-xl font-bold mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full py-2 px-2 rounded-lg bg-white uppercase"
            />
          </div>
          <div className="flex flex-col mb-14">
            <label htmlFor="text" className="text-xl font-bold mb-2">
              Your Info:
            </label>
            <textarea
              name="text"
              id="text"
              rows={6}
              value={bio}
              onChange={(e) => setText(e.target.value)}
              className="rounded-lg px-3"
            ></textarea>
          </div>
          <div className="flex justify-center items-center text-center">
            <input
              type="submit"
              value="Update"
              className="text-xl font-semibold btn btn-outline"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
