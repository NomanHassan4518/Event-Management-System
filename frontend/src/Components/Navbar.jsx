import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isEventPage =
    location.pathname !== "/" && !location.pathname.startsWith("/sign")

  return (
    <div className="absolute w-full flex items-center justify-between py-4 px-8 z-50">
      <div>
        {isEventPage ? (
          <Link to="/">
            <img
              src="https://demo.egenslab.com/html/eventlab/assets/images/logo-v2.png"
              alt="Event Logo"
            />
          </Link>
        ) : (
          <Link to="/">
            <img
              src="https://demo.egenslab.com/html/eventlab/assets/images/logo.png"
              alt="Main Logo"
            />
          </Link>
        )}
      </div>

      <div className="space-x-7 text-sm font-medium">
        <Link
          to="/"
          className={`${
            isEventPage ? "text-white" : "text-pink-600"
          } hover:text-pink-800`}
        >
          Home
        </Link>
        <Link
          to="/events"
          className={`${
            isEventPage ? "text-white" : "text-pink-600"
          } hover:text-pink-800`}
        >
          Events
        </Link>
        <Link
          to="/my-registration"
          className={`${
            isEventPage ? "text-white" : "text-pink-600"
          } hover:text-pink-800`}
        >
          My Registration
        </Link>
        <Link
          to="/admin"
          className={`${
            isEventPage ? "text-white" : "text-pink-600"
          } hover:text-pink-800`}
        >
          Admin Panel
        </Link>
      </div>

      <div className="space-x-5 text-sm">
        <Link
          to="/signin"
          className="bg-pink-600 hover:bg-pink-800 text-white py-1 px-4 rounded"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-pink-600 hover:bg-pink-800 text-white py-1 px-4 rounded"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
