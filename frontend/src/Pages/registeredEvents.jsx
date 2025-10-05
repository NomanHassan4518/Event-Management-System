import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import {useLoading} from "../Context/LoadingContext"

const MyRegistration = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const {setLoading} = useLoading()

 useEffect(() => {
  const fetchRegisteredEvents = async () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser?.id) return;

    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://event-management-system-z1ji.vercel.app/api/registration/${storedUser.id}`
      );
      setRegisteredEvents(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch your registrations");
    } finally {
      setLoading(false);
    }
  };

  fetchRegisteredEvents();
}, [setLoading]);



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
            {registeredEvents.map((reg) => (
              <div
                key={reg._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={reg.eventId?.image}
                  alt={reg.eventId?.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold truncate text-[#2d373c] font-alice">
                    {reg.eventId?.title}
                  </h3>

                  <div className="flex items-center gap-6 text-gray-500 text-sm mt-3">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#ce1446]" />{" "}
                      {new Date(reg.eventId?.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaUsers className="text-[#ce1446]" />{" "}
                      {reg.seatsBooked} seats
                    </span>
                  </div>

                  {/* <Link
                    to={`/event/${reg.eventId?._id}`}
                    className="inline-block mt-5 bg-[#ce1446] text-white px-6 py-2 rounded-md hover:bg-[#a61139] transition"
                  >
                    View Details
                  </Link> */}
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
