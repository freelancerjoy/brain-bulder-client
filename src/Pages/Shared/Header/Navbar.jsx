import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveRoute/ActiveLink";
import { AuthContest } from "../../../Provider/AuthProvider";
import logo from "../../../../public/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContest);

  const navItems = (
    <>
      <li>
        <ActiveLink to="/">
          <button>Home</button>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="/alltoy">All Toy</ActiveLink>
      </li>

      {user && (
        <>
          <li>
            <ActiveLink to="/mytoy">My Toy</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/addtoy">Add Toy</ActiveLink>
          </li>
        </>
      )}
      <li>
        <ActiveLink to="/blog">BLog</ActiveLink>
      </li>
    </>
  );
  return (
    <div className="bg-lime-00 py-5 ">
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  tabIndex="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
              {navItems}
              {user && (
                <li>
                  <button
                    onClick={logOut}
                    className="btn rounded-full mt-1 text-white border-0 bg-green-500 ">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
          <img className="lg:w-64 w-52" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <>
              <img
                title={user?.displayName}
                className="w-14 h-14 rounded-full mr-4"
                src={user?.photoURL}
                alt="User pictre"
              />
              <button
                onClick={logOut}
                className="btn rounded-full hidden lg:block border-0 bg-green-500 px-8">
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn rounded-full border-0 bg-green-500 px-8">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
