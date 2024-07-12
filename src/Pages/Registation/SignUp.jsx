import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import signUp from "../../assets/others/Registration.jpg";
import Halmet from "../../Components/Halmet";
import { baseUrl } from "../../config/config";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.countries.value;

    try {
      const response = await axios
        .post(`${baseUrl}/account/signup`, {
          name,
          email,
          password,
          role,
        })
        .then((data = response.data) => {
          console.log("Registration successful", data);
          Swal.fire({
            title: "Registered succesfully",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
        });
      navigate(from, { replace: true });
      from.reset();
    } catch (err) {
      console.log("request failed", err);
    }
  };

  return (
    <>
      <Halmet pagename={"SignUp"}></Halmet>
      <div
        className="hero min-h-fit lg:min-h-screen bg-indigo-800 bg-fixed  bg-opacity-30"
        style={{
          backgroundImage: `url(${signUp})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <form
          onSubmit={handleRegister}
          className="max-w-6xl mx-auto bg-slate-200 bg-opacity-30 p-10 mt-20 lg:mt-0"
          action=""
        >
          <div className=" w-72 lg:w-96 text-sky-500 text-3xl font-bold border-b-4  border-sky-500  ">
            <h1 className="text-center">Sign Up</h1>
          </div>
          <div className="flex flex-col gap-6 mt-6 ">
            <div className="flex flex-col w-full">
              <label className="text-sky-500 font-medium text-xl">Name</label>
              <input
                className="p-2 rounded-lg"
                type="text"
                name="name"
                id=""
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                for="countries"
                className="text-sky-500 font-medium text-xl"
              >
                Select an option
              </label>
              <select id="countries" className="bg-gray-50 p-2 rounded-lg ">
                <option selected>Choise your option</option>
                <option value="STUDENT">Student</option>
                <option value="TEACHER">Teacher</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sky-500 font-medium text-xl" htmlFor="">
                Email
              </label>
              <input
                className="p-2 rounded-lg"
                type="email"
                name="email"
                id=""
                placeholder="Enter your email "
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sky-500 font-medium text-xl" htmlFor="">
                Password
              </label>
              <input
                className="p-2 rounded-lg"
                type="password"
                name="password"
                id=""
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <input
                className="text-center btn btn-outline  p-1 w-full border-b-4 border-white text-sky-800 text-xl font-semibold"
                type="submit"
                value="register"
              />
              <div className="text-sm text-center">
                <h1 className="text-sm text-orange-400 text-center mt-6 px-5">
                  Already registered?
                </h1>
                <p className="mt-3">
                  Go to
                  <NavLink
                    to="/login"
                    className="text-xl font-semibold text-blue-600"
                  >
                    log in
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
