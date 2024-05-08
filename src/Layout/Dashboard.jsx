import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-full bg-indigo-600">
        <ul className="menu text-2xl text-white">
          <li>
            <NavLink to="/deshboard/cart">My card</NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/userhome">User Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
