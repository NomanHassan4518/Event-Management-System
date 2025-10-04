import React from "react";
import {FaBookmark} from "react-icons/fa";

const RegistrationSidebar = () => {
  return (
    <div className="shadow">
      <div className="bg-white">
        <div className="flex items-center gap-2 mb-4 bg-[#ce1446] text-white py-3 px-4 font-alice">
          <FaBookmark className="text-xl" />
          <h4 className="font-bold text-2xl">Book This Event</h4>
        </div>

        <form className="space-y-4 px-4">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full border rounded px-4 py-2 text-sm focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded px-4 py-2 text-sm focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border rounded px-4 py-2 text-sm focus:outline-none"
          />
          <select className="w-full border rounded px-4 py-2 text-sm focus:outline-none">
            <option>Select Quantity</option>
            <option value="1">Quantity 1</option>
            <option value="2">Quantity 2</option>
            <option value="3">Quantity 3</option>
          </select>

          <button
            type="submit"
            className="w-full bg-[#080a0a] hover:bg-[#343d3d] text-white py-2 rounded-lg font-semibold transition !mb-4"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationSidebar;
