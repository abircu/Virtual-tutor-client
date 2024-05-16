import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Context/AuthProvider";

const PrivetRoutes = ({ children }) => {
  const { auth, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <span className="loading loading-dots loading-lg pt-20 pl-10"></span>
    );
  }
  if (auth.user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoutes;
