import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";

// Dummy registered events (replace with API call or props later)
const registeredEvents = [
  {
    id: 1,
    title: "AI & Web Development Bootcamp",
    date: "Nov 10, 2025",
    seats: 180,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    title: "Digital Marketing Expo",
    date: "Dec 5, 2025",
    seats: 300,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    title: "Digital Marketing Expo",
    date: "Dec 5, 2025",
    seats: 300,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
  },
];

const MyRegistration = () => {
  return (
    <div>
      <div
        className="relative w-full h-[400px] flex items-end"
        style={{
          backgroundImage: `url("https://demo.egenslab.com/html/eventlab/assets/images/backgrounds/breadcrumb-bg.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[#2a333b] bg-opacity-90"></div>

        <div className="relative z-10 text-white px-20 pb-12 font-alice">
          <h1 className="text-4xl md:text-5xl font-bold">My Registrations</h1>
          <div className="flex items-center gap-3 text-sm mt-3 text-gray-200">
            <Link to="/" className="hover:text-[#ce1446] transition">
              Home
            </Link>
            <span>|</span>
            <span className="text-[#ce1446]">My Registrations</span>
          </div>
        </div>
      </div>

      <div className="p-16">
        {registeredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {registeredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold truncate text-[#2d373c] font-alice">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-6 text-gray-500 text-sm mt-3">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#ce1446]" /> {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaUsers className="text-[#ce1446]" /> {event.seats} seats
                    </span>
                  </div>

                  <Link
                    to={`/event/${event.id}`}
                    className="inline-block mt-5 bg-[#ce1446] text-white px-6 py-2 rounded-md hover:bg-[#a61139] transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            You haven’t registered for any events yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyRegistration;
