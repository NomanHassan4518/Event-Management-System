import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const AdminHeader = ({ onLogout }) => {
  return (
    <div
      className="relative w-full h-[300px] flex items-end"
      style={{
        backgroundImage: `url("https://demo.egenslab.com/html/eventlab/assets/images/backgrounds/breadcrumb-bg.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[#2a333b] bg-opacity-90"></div>

      <div className="relative z-10 text-white px-12 md:px-20 pb-10 w-full flex justify-between items-end">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-alice">Admin Panel</h1>
          <div className="flex items-center gap-3 text-sm mt-3 text-gray-200">
            <Link to="/" className="hover:text-[#ce1446] transition">
              Home
            </Link>
            <span>|</span>
            <span className="text-[#ce1446]">Admin Panel</span>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="flex items-center gap-2 bg-[#ce1446] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#a01034] transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
