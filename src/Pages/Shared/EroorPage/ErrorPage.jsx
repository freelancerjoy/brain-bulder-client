import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div>
        <img
          className="float-right relative"
          src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=900&t=st=1684668695~exp=1684669295~hmac=c1c44653499027e3c391e69dacd3b1dd6813448b93333999c8fa6ec410fea85a"
          alt=""
        />
        <div className="top-1/2 mt-16 mx-auto lg:mt-0 absolute">
          <h1 className="text-2xl p-4 font-bold text-red-600">
            {error?.error?.message}
          </h1>
          <Link to="/">
            <button className="btn ml-4 md:ml-24  bg-red-500">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
