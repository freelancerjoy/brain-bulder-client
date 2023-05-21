import React from "react";
import { NavLink } from "react-router-dom";

// Active route
const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) => {
          return isActive
            ? "font-bold text-green-500 border-dashed border-b-4 border-green-300"
            : "";
        }}>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
