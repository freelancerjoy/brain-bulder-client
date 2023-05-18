import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) => {
          return isActive
            ? "font-bold text-green-500 border-dashed border-b-4 border-green-300"
            : "bg-black";
        }}>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
