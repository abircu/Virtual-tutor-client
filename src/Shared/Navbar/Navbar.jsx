import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo02.png";
import AuthContext from "../../Context/AuthProvider";

const Navbar = () => {
  const { auth, signOut } = useContext(AuthContext);

  const isAuthenticated = auth && auth.isAuthenticated;
  const user = isAuthenticated ? auth.user : null;

  const handleLogOut = () => {
    signOut();
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
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {isAuthenticated && (
              <>
                {user && user.role === "Teacher" && (
                  <li>
                    <Link to="/teacher-profile">Teacher Profile</Link>
                  </li>
                )}
                {user && user.role === "Student" && (
                  <li>
                    <Link to="/student-profile">Student Profile</Link>
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
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {isAuthenticated && (
            <>
              {user && user.role === "Teacher" && (
                <li>
                  <Link to="/teacher-profile">Teacher Profile</Link>
                </li>
              )}
              {user && user.role === "Student" && (
                <li>
                  <Link to="/student-profile">Student Profile</Link>
                </li>
              )}
              <li>
                <button onClick={handleLogOut} className="text-xl font-bold">
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
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
