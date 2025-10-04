import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    setAuth(null);
    localStorage.removeItem("user"); // Remove auth from localStorage
    navigate("/");
  };

  const isEventPage =
    location.pathname !== "/" && !location.pathname.startsWith("/sign");

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/events", label: "Events" },
    { to: "/my-registration", label: "My Registration" },
  ];

  // Add admin panel link if user is admin
  if (auth && auth.isAdmin) {
    navLinks.push({ to: "/admin", label: "Admin Panel" });
  }

  return (
    <div
      className={`fixed w-full flex items-center justify-between py-4 px-6 z-50 ${
        isEventPage ? "bg-[#2a333b]" : "bg-white shadow"
      }`}
    >
      <div>
        <Link to="/">
          <img
            src={
              isEventPage
                ? "https://demo.egenslab.com/html/eventlab/assets/images/logo-v2.png"
                : "https://demo.egenslab.com/html/eventlab/assets/images/logo.png"
            }
            alt="Event Logo"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`${
              isEventPage ? "text-white" : "text-pink-600"
            } hover:text-pink-800`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex space-x-5 text-sm">
        {auth ? (
          <button
            onClick={handleLogout}
            className="bg-pink-600 hover:bg-pink-800 text-white py-1 px-4 rounded"
          >
            Logout
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>

      <div className="md:hidden">
        <Button
          type="text"
          icon={
            <MenuOutlined
              className={isEventPage ? "text-white" : "text-pink-600"}
            />
          }
          onClick={() => setOpen(true)}
        />
      </div>

      <Drawer
        title={
          <Link to="/" onClick={() => setOpen(false)}>
            <img
              src="https://demo.egenslab.com/html/eventlab/assets/images/logo.png"
              alt="logo"
            />
          </Link>
        }
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="flex flex-col space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-gray-700 text-lg hover:text-[#ce1446]"
            >
              {link.label}
            </Link>
          ))}

          {auth ? (
            <button
              onClick={() => {
                handleLogout();
                setOpen(false);
              }}
              className="bg-pink-600 hover:bg-pink-800 text-white text-center py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/signin"
                onClick={() => setOpen(false)}
                className="bg-pink-600 hover:bg-pink-800 text-white text-center py-2 rounded"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="bg-pink-600 hover:bg-pink-800 text-white text-center py-2 rounded"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
