import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthProvider";
import Select from "react-select";

const UpdateProfile = () => {
  const { auth, loading } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState(null);
  const [option, setOption] = useState("");
  const [text, setText] = useState("");
  const [skills, setSkills] = useState([]);

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
      setName(auth.user.name || "");
      setEmail(auth.user.email || "");
      setRole(auth.user.role || "");
    }
  }, [auth]);

  if (loading) {
    return <div>...Loading</div>;
  }

  if (!auth.isAuthenticated || !auth.user) {
    return <div>...Loading</div>;
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const role = form.role.value;
    const email = form.email.value;
    const image = form.image.files[0];
    const option = form.option.value;
    const text = form.text.value;
    const allValues = { name, role, email, image, option, text, skills };
    console.log("Update profile information is", allValues);
    form.reset();
  };
  const handleSkillsChange = (selectedOptions) => {
    setSkills(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };

  return (
    <div className="bg-indigo-400 py-20 p-2 min-h-screen">
      <div className="max-w-6xl mx-auto items-center justify-center">
        <form
          onSubmit={handleUpdateProfile}
          className=" p-2 md:p-6 mt-10 shadow-lg shadow-black"
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
                  value={name}
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
                  readOnly
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col mb-14">
                <label htmlFor="image" className="text-xl font-bold mb-2">
                  Photo
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="px-3 rounded-lg py-1"
                />
              </div>
              <div className="flex flex-col mb-14">
                <label htmlFor="option" className="text-xl font-bold mb-2">
                  Select your academic degree
                </label>
                <select
                  name="option"
                  id="option"
                  value={option}
                  onChange={(e) => setOption(e.target.value)}
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
            </div>
          </div>
          <div className="flex flex-col mb-14">
            <label htmlFor="text" className="text-xl font-bold mb-2">
              Your Info:
            </label>
            <textarea
              name="text"
              id="text"
              rows={4}
              value={text}
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
