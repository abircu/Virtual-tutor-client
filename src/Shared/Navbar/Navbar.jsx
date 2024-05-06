import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo02.png";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const navOption = (
    <>
      <li>
        <Link to="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link to="/academic">
          <a>Academic</a>
        </Link>
      </li>
      <li>
        <Link to="/skill">
          {" "}
          <a>Skills</a>
        </Link>
      </li>
      <li>
        <Link to="/videos">
          {" "}
          <a>Videos</a>
        </Link>
      </li>

      <li>
        <Link to="/contact">
          {" "}
          <a>Contact</a>
        </Link>
      </li>

      {/* <li>
        <Link to="/register">
          {" "}
          <a>SignUp</a>
        </Link>
      </li> */}
      {user ? (
        <>
          <li>
            <Link to="/secret">
              {" "}
              <a>Secret</a>
            </Link>
          </li>
          <button
            onClick={handleLogOut}
            className="btn btn-ghost justify-center items-center text-xl font-bold"
          >
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">
              {" "}
              <a>Login</a>
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed  z-10 md:bg-black  md:bg-opacity-45  text-black md:text-white     ">
        {/* <div className="navbar-bg bg-black  opacity-15 "></div> */}
        <div className=" sm:navbar-center md:navbar-start">
          <div className="dropdown bg-white text-black ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a href="https://web.whatsapp.com/" className=" text-xl  uppercas  ">
            <img className="rounded-full w-16 h-16" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex text-white text-3xl">
          <ul className="menu menu-horizontal px-1  text-xl font-bold">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
