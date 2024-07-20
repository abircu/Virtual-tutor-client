import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-full px-2 md:px-6 bg-gray-700">
        <ul className="menu text-xl text-white mt-10">
          <li className="py-3 border-b-2 border-white">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="py-3 border-b-2 border-white">
            <NavLink to="/deshboard/statistics">Statistics</NavLink>
          </li>
          <li className="py-3 border-b-2 border-white">
            <NavLink to="/deshboard/teacher">Teachers</NavLink>
          </li>
          <li className="py-3 border-b-2 border-white">
            <NavLink to="/deshboard/students">Students</NavLink>
          </li>
          <li className="py-3 border-b-2 border-white">
            <NavLink to="/deshboard/course">Courses</NavLink>
          </li>
          <li className="py-3 border-b-2 border-white">
            <NavLink to="/deshboard/admin">Admin</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
