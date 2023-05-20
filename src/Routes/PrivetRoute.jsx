import React, { useContext } from "react";
import { AuthContest } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContest);
  const location = useLocation();

  if (loading) {
    return <h1>loading</h1>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
