import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-bold ml-1 ${isActive ? "text-green-400 border border-green-500" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            `font-bold ml-1 ${isActive ? "text-green-400 border border-green-500" : ""}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"pages to read"}
          className={({ isActive }) =>
            `font-bold ml-1 ${isActive ? "text-green-400 border border-green-500" : ""}`
          }
        >
          Pages to read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">

   
    <div className="navbar w-[85%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
          >
            {links}
          </ul>
        </div>
        <h1 className="text-2xl font-bold text-black">Book Vibe</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <button className="btn text-white font-bold bg-[#23BE0A]">
          Sign In
        </button>
        <button className="btn text-white font-bold bg-[#59C6D2]">
          Sign Up
        </button>
      </div>
    </div>
     </div>
  );
};

export default Navbar;
