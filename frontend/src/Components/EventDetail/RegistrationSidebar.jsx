import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const RegistrationSidebar = ({ eventId }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    seatsBooked: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        userId: user?.id,
        eventId: eventId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        seatsBooked: Number(formData.seatsBooked),
      };

      console.log("Submitting:", payload);

      await axios.post(
        "https://event-management-system-z1ji.vercel.app/api/registration",
        payload
      );
      toast.success("Event booked successfully");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to book event");
    }
  };

  return (
    <div className="shadow">
      <div className="bg-white">
        <div className="flex items-center gap-2 mb-4 bg-[#ce1446] text-white py-3 px-4 font-alice">
          <FaBookmark className="text-xl" />
          <h4 className="font-bold text-2xl">Book This Event</h4>
        </div>

        <form className="space-y-4 px-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 text-sm focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 text-sm focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 text-sm focus:outline-none"
            required
          />
          <select
            name="seatsBooked"
            value={formData.seatsBooked}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 text-sm focus:outline-none"
          >
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
