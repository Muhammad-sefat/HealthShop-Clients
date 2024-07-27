import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white" : ""
          }
        >
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/shop"}
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white" : ""
          }
        >
          <a>Shop</a>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/join-us"}
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white" : ""
          }
        >
          <a>Join Us</a>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/language"}
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white" : ""
          }
        >
          <a>Language</a>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-50 px-5 rounded">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-2xl font-semibold rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlink}
          </ul>
        </div>
        <Link to={"/"} className="text-xl md:text-3xl font-bold">
          Health<span className="text-blue-600">Shop</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium space-x-2">
          {navlink}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/signin"}>
          <button>SignIn</button>
        </Link>
        {/* <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-medium bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Update Profile</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
