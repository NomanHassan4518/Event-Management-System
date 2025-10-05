import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-end"
      style={{
        backgroundImage: `url("https://demo.egenslab.com/html/eventlab/assets/images/backgrounds/breadcrumb-bg.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2a333b] bg-opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 sm:px-8 md:px-20 pb-6 sm:pb-8 md:pb-12 font-alice w-full">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Event Detail
        </h1>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm mt-2 sm:mt-3 text-gray-200">
          <Link to="/" className="hover:text-[#ce1446] transition">
            Home
          </Link>
          <span>|</span>
          <span className="text-[#ce1446]">Event Detail</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
