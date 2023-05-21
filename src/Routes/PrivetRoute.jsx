import React, { useContext } from "react";
import { AuthContest } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContest);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
