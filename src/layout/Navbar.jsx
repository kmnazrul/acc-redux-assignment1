import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  // console.log("🚀 ~ file: Navbar.jsx:8 ~ Navbar ~ user", user);
  const [signOut] = useSignOut(auth);

  let activeClassName = "btn btn-outline btn-success";
  let inActiveClassName = "btn btn-ghost";

  const navItems = (
    <>
      <li className="m-1 ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? activeClassName : inActiveClassName
          }
        >
          Home{" "}
        </NavLink>
      </li>
      {/* <li className="m-1">
        <NavLink
          to={"blogs"}
          className={({ isActive }) =>
            isActive ? activeClassName : inActiveClassName
          }
        >
          Blogs
        </NavLink>
      </li> */}
      <li className="m-1">
        <NavLink
          to={"new"}
          className={({ isActive }) =>
            isActive ? activeClassName : inActiveClassName
          }
        >
          New Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar z-50 bg-gradient-to-r from-amber-500 via-amber-300 to-lime-500 sticky top-0 rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-b from-amber-500 via-amber-300 to-lime-400 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-stone-500 font-bold text-2xl"
        >
          TECH TRENDS
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal rounded px-2 ">{navItems}</ul>
      </div>
      <div className="navbar-end mr-3">
        {user ? (
          <>
            <p className="mr-1 text-zinc-100">({user?.displayName})</p>
            <button
              className="btn btn-outline glass"
              onClick={async () => {
                const success = await signOut();
                if (success) {
                  alert("You are signed out");
                }
              }}
            >
              Sign out
            </button>
          </>
        ) : (
          <Link to={"/login"} className="btn btn-outline  glass">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
