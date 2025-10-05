import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoading } from "../../Context/LoadingContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    image: "",
    date: "",
    seats: "",
    location: "",
    category: "",
    speakers: [],
    sponsor: "",
  });

  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const categories = ["Business", "Technology", "Marketing", "Sport"];
  const sponsors = ["Event Lab", "Tech Corp"];
  const speakers = JSON.parse(localStorage.getItem("speakers"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSpeaker = (speakerId) => {
    setFormData((prev) => ({
      ...prev,
      speakers: prev.speakers.includes(speakerId)
        ? prev.speakers.filter((id) => id !== speakerId)
        : [...prev.speakers, speakerId],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post(
        "https://event-management-system-z1ji.vercel.app/api/event",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success("Event add successfully!");
      console.log(response.data);

      setFormData({
        title: "",
        desc: "",
        image: "",
        date: "",
        seats: "",
        location: "",
        category: "",
        speakers: [],
        sponsor: "",
      });

      navigate("/events");
    } catch (error) {
      console.error(
        "Error creating event:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Failed to create event.");
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="mt-5 px-4 sm:px-8 md:px-12 pb-12">
     <div
  className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] flex items-end"
  style={{
    backgroundImage: `url("https://demo.egenslab.com/html/eventlab/assets/images/backgrounds/breadcrumb-bg.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>
  <div className="absolute inset-0 bg-[#2a333b] bg-opacity-90"></div>
  <div className="relative z-10 text-white px-4 sm:px-8 md:px-20 pb-6 sm:pb-8 md:pb-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-alice">
       Add New Event
      </h1>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm mt-2 text-gray-200">
        <Link to="/" className="hover:text-[#ce1446] transition">
          Home
        </Link>
        <span>|</span>
        <span className="text-[#ce1446]">Add New Event</span>
      </div>
    </div>
  </div>
</div>


      <div className="mt-5 px-12 pb-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Event
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ce1446] outline-none"
            required
          />

          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Event Description"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ce1446] outline-none"
            rows="4"
            required
          />

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ce1446] outline-none"
            required
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ce1446] outline-none"
              required
            />
            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              placeholder="Available Seats"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ce1446] outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Event Location"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ce1446] outline-none"
              required
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ce1446] outline-none"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap gap-3">
            {speakers?.map((speaker) => (
              <label
                key={speaker._id}
                className="flex items-center gap-2 cursor-pointer text-sm"
              >
                <input
                  type="checkbox"
                  checked={formData.speakers.includes(speaker._id)}
                  onChange={() => toggleSpeaker(speaker._id)}
                />
                <span>{speaker.name}</span>
              </label>
            ))}
          </div>

          <select
            name="sponsor"
            value={formData.sponsor}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ce1446] outline-none"
          >
            <option value="">Select Sponsor</option>
            {sponsors.map((sponsor, idx) => (
              <option key={idx} value={sponsor}>
                {sponsor}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-[#ce1446] text-white px-6 py-2 rounded-lg shadow hover:bg-[#a01034] transition w-full sm:w-auto"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEventForm;
