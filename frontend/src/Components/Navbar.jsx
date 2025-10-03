import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="absolute w-full flex items-center justify-between py-4 px-8 z-50">
      <div>
        {location.pathname === "/events" ? (
          <img
            src="https://demo.egenslab.com/html/eventlab/assets/images/logo-v2.png"
            alt=""
          />
        ) : (
          <img
            src="https://demo.egenslab.com/html/eventlab/assets/images/logo.png"
            alt=""
          />
        )}
      </div>
      <div className="space-x-7 text-sm">
        <Link
          to="/"
          className={`${
            location.pathname === "/events" ? "text-white" : "text-pink-600"
          } hover:text-pink-800`}
        >
          Home
        </Link>
        <Link
          to="/events"
          className={`${
            location.pathname === "/events" ? "text-white" : "text-pink-600"
          } hover:text-pink-800`}
        >
          Events
        </Link>
        <Link
          to=""
          className={`${
            location.pathname === "/events" ? "text-white" : "text-pink-600"
          } hover:text-pink-800`}
        >
          My Registration
        </Link>
        <Link
          to=""
          className={`${
            location.pathname === "/events" ? "text-white" : "text-pink-600"
          } hover:text-pink-800`}
        >
          Admin Panel
        </Link>
      </div>
      <div className="space-x-5 text-sm">
        <button className="bg-pink-600 hover:bg-pink-800 text-white py-1 px-4 rounded">
          Sign In
        </button>
        <button className="bg-pink-600 hover:bg-pink-800 text-white py-1 px-4 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
