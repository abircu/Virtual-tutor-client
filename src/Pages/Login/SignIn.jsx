import React, { useEffect, useRef, useState } from "react";
import heroBg from "../../assets/others/heroBg.jpg";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const SignIn = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("login data", email, password);
  };
  const handleFacebookLogin = async () => {
    console.log("facebook login clicked");
    try {
      const response = await axios.post(`${baseUrl}signup`, {});
      console.log("registration succesfulll", response.data);
    } catch (error) {
      console.log("registration failed", error.response.data);
    }
  };

  const handleGoogleLogin = () => {
    console.log("facebook login clicked");
    // call api same formate of handlefacebooklogin
  };
  const handleGithubLogin = () => {
    console.log("facebook login clicked");
    // call api same formate of handlefacebooklogin
  };
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
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
              className="p-2 rounded-lg"
              type="text"
              ref={captchaRef}
              name="captcha"
              id=""
              placeholder="Type the text above"
              required
            />
            <button
              onClick={handleValidateCaptcha}
              className="btn btn-outline btn-xs mt-3 text-white"
            >
              Validate
            </button>
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
                  signIn
                </NavLink>
                with
              </p>
              <div className="flex gap-4 text-xl justify-center items-center mt-4">
                <FaSquareFacebook onClick={handleFacebookLogin} />
                <FcGoogle onClick={handleGoogleLogin} />
                <FaGithub onClick={handleGithubLogin} />
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
