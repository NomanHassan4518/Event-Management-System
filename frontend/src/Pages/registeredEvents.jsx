import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useLoading } from "../Context/LoadingContext";

const MyRegistration = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const { setLoading } = useLoading();
  const navigate = useNavigate();

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
        navigate("/my-registration");
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch your registrations");
      } finally {
        setLoading(false);
      }
    };

    fetchRegisteredEvents();
  }, [setLoading, navigate]);

  return (
    <div>
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

        <div className="relative z-10 text-white px-4 sm:px-8 md:px-20 pb-6 sm:pb-8 md:pb-12 font-alice">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            My Registrations
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm mt-2 text-gray-200">
            <Link to="/" className="hover:text-[#ce1446] transition">
              Home
            </Link>
            <span>|</span>
            <span className="text-[#ce1446]">My Registrations</span>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 py-8">
        {registeredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {registeredEvents.map((reg) => (
              <div
                key={reg._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col"
              >
                <img
                  src={reg.eventId?.image}
                  alt={reg.eventId?.title}
                  className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover"
                />

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold truncate text-[#2d373c] font-alice">
                    {reg.eventId?.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mt-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-[#ce1446]" />
                      {new Date(reg.eventId?.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUsers className="text-[#ce1446]" />
                      {reg.seatsBooked} seats
                    </span>
                  </div>

                  {/* Optional: View Details */}
                  {/* <Link
                    to={`/event/${reg.eventId?._id}`}
                    className="mt-auto inline-block bg-[#ce1446] text-white px-4 py-2 rounded-md hover:bg-[#a61139] transition text-sm text-center"
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
