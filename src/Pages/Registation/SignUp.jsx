import register from "../../assets/others/register.jpg";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const SignUp = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("input field", name, email, password);
  };
  return (
    <div
      className="hero min-h-fit lg:min-h-screen bg-indigo-800 bg-fixed  bg-opacity-30"
      style={{
        backgroundImage: `url(${register})`,
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
                <NavLink to="/login">Go to log in</NavLink>
              </p>
              <div className="flex gap-4 text-xl justify-center items-center mt-4">
                <FaSquareFacebook />
                <FcGoogle />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
