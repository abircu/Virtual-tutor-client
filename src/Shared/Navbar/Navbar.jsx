import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/home/logo02.png";
import AuthContext from "../../Context/AuthProvider";
import axios from "axios";
import { baseUrl } from "../../config/config";
import Swal from "sweetalert2";
const Navbar = () => {
  const navigate = useNavigate();

  const { auth, signOut } = useContext(AuthContext);

  const isAuthenticated = auth && auth.isAuthenticated;
  const user = isAuthenticated ? auth.user : null;
  const token = auth?.user?.jwtToken;
  // console.log("jwt token ", token);

  const handleLogOut = async () => {
    try {
      axios
        .post(`${baseUrl}/account/logout`, {
          token,
        })
        .then((res) => res.data);
      signOut();
      Swal.fire("logout succes ");
      navigate("/");
    } catch (err) {
      console.log("catch vale", err);
    }
  };

  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-45 text-white justify-between mx-auto">
      <div className="navbar-center lg:navbar-center">
        <div className="dropdown bg-white text-black">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/academic">Academic</Link>
            </li>
            <li>
              <Link to="/skill">Skills</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {isAuthenticated && (
              <>
                {user && user.role === "TEACHER" && (
                  <li>
                    <Link to="/teacher-profile">Teacher Profile</Link>
                  </li>
                )}
                {user && user.role === "STUDENT" && (
                  <li>
                    <Link to="/student-profile">Student Profile</Link>
                  </li>
                )}
                {user && user.role === "ADMIN" && (
                  <li>
                    <Link to="/deshboard/statistics">ADMIN</Link>
                  </li>
                )}

                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-ghost justify-center items-center text-xl font-bold"
                  >
                    Log Out
                  </button>
                </li>
              </>
            )}
            {!isAuthenticated && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <a href="https://web.whatsapp.com/" className="text-xl uppercase">
          <img className="rounded-full w-16 h-16" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex text-3xl">
        <ul className="menu menu-horizontal px-1 font-bold text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/academic">Academic</Link>
          </li>
          <li>
            <Link to="/skill">Skills</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {isAuthenticated && (
            <>
              {user && user.role === "TEACHER" && (
                <li>
                  <Link to="/teacher-profile">Teacher Profile</Link>
                </li>
              )}
              {user && user.role === "STUDENT" && (
                <li>
                  <Link to="/student-profile">Student Profile</Link>
                </li>
              )}
              {user && user.role === "ADMIN" && (
                <li>
                  <Link to="/deshboard/statistics">ADMIN</Link>
                </li>
              )}
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end pr-10">
        {isAuthenticated && (
          <li style={{ listStyle: "none" }}>
            <button
              onClick={handleLogOut}
              className="text-xl font-bold btn btn-outline text-white"
            >
              Log Out
            </button>
          </li>
        )}
        {!isAuthenticated && (
          <li style={{ listStyle: "none" }} className="text-xl">
            <Link to="/login">
              <button className="btn btn-outline tex-3xl font-bold text-white px-4">
                Login
              </button>
            </Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default Navbar;
