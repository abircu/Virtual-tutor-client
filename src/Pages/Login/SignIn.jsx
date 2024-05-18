import React, { useContext, useEffect, useRef, useState } from "react";
import heroBg from "../../assets/others/LoginBg.jpg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import AuthContext from "../../Context/AuthProvider";
import axios from "axios";
import { baseUrl } from "../../config/config";

const SignIn = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const response = await axios.post(
        `${baseUrl}/account/login`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response && response.data) {
        console.log("Login response:", response.data);

        const { jwtToken, jwtTokenType, ...user } = response.data;

        setAuth({
          isAuthenticated: true,
          user: user,
        });

        Swal.fire({
          title: "Login successfully",
          showClass: {
            popup: "animate__animated animate__fadeInUp animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutDown animate__faster",
          },
        });

        navigate(from, { replace: true });
      } else {
        throw new Error("Invalid resopose recive from server");
      }
    } catch (error) {
      console.error("Login failed:", error.response.data);

      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: "Invalid email or password. Please try again.",
      });
    }

    form.reset();
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    }
  };
  return (
    <div
      className="hero min-h-fit lg:min-h-screen bg-indigo-800 bg-fixed  bg-opacity-30"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <form
        onSubmit={handleLogin}
        className="max-w-6xl mx-auto bg-slate-200 bg-opacity-30 p-10 mt-20 lg:mt-0"
        action=""
      >
        <div className=" text-sky-500 text-3xl font-bold border-b-4  border-sky-500  ">
          <h1 className="text-center">Sign In</h1>
        </div>
        <div className="flex flex-col gap-6 mt-6">
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
          <div className="flex flex-col ">
            <label className="text-sky-500 font-medium text-xl" htmlFor="">
              <LoadCanvasTemplate className="" />
            </label>
            <input
              onBlur={handleValidateCaptcha}
              className="p-2 rounded-lg"
              type="text"
              ref={captchaRef}
              name="captcha"
              id=""
              placeholder="Type the text above"
              required
            />
          </div>
          <div>
            <input
              disabled={disable}
              className="text-center btn btn-outline  p-1 w-full border-b-4 border-white text-sky-800 text-xl font-semibold"
              type="submit"
              value="login"
            />

            <div className="text-sm text-center">
              <h1 className="text-sm text-orange-400 text-center mt-6 px-5">
                New here? Create a New Account
              </h1>
              <p className="mt-3">
                Or
                <NavLink
                  className="text-blue-800 font-semibold text-xl px-3"
                  to="/register"
                >
                  Register
                </NavLink>
              </p>
              <div className="flex gap-4 text-xl justify-center items-center mt-4">
                {/* <FaSquareFacebook onClick={handleFacebookLogin} />
                <FcGoogle onClick={handleGoogleLogin} />
                <FaGithub onClick={handleGithubLogin} /> */}
              </div>
              {/* dkkdf */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
