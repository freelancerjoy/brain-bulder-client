import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveRoute/ActiveLink";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <Link to="/">All Toys</Link>
      </li>
      <li>
        <Link to="/">BLog</Link>
      </li>
    </>
  );
  return (
    <div className="bg-lime-100 py-5">
      <div class="navbar w-11/12 mx-auto ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">Brain Builders</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div class="navbar-end">
          <a class="btn rounded-full border-0 bg-green-500 px-8">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
