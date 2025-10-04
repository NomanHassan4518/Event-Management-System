import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const EditEventForm = () => {
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

  const location = useLocation()
  const event = location.state.event

  const categories = ["Business", "Technology", "Marketing", "Design"];
  const speakers = ["John Smith", "Emma Johnson", "Sophia Lee"];
  const sponsors = ["Event Lab", "Tech Corp"];

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title || "",
        desc: event.desc || "",
        image: event.image || "",
        date: event.date || "",
        seats: event.seats || "",
        location: event.location || "",
        category: event.category || "",
        speakers: event.speakers || [],
        sponsor: event.sponsor || "",
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSpeaker = (speaker) => {
    setFormData((prev) => ({
      ...prev,
      speakers: prev.speakers.includes(speaker)
        ? prev.speakers.filter((s) => s !== speaker)
        : [...prev.speakers, speaker],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
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
            <h1 className="text-3xl md:text-4xl font-bold font-alice">
              Edit Event
            </h1>
            <div className="flex items-center gap-3 text-sm mt-3 text-gray-200">
              <Link to="/" className="hover:text-[#ce1446] transition">
                Home
              </Link>
              <span>|</span>
              <span className="text-[#ce1446]">Edit Event</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 px-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Edit Event
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

          <div className="grid grid-cols-2 gap-3">
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

          <div className="grid grid-cols-2 gap-3">
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

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Speakers
            </label>
            <div className="flex flex-wrap gap-3">
              {speakers.map((speaker, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.speakers.includes(speaker)}
                    onChange={() => toggleSpeaker(speaker)}
                  />
                  <span>{speaker}</span>
                </label>
              ))}
            </div>
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
            className="bg-[#ce1446] text-white px-6 py-2 rounded-lg shadow hover:bg-[#a01034] transition"
          >
            Update Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEventForm;
