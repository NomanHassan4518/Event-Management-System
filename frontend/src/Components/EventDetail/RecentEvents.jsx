import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";

const RecentEvents = () => {
  const recentEvents = JSON.parse(localStorage.getItem("events"));
  return (
    <div className="shadow mt-8">
      <div className="flex items-center gap-2 mb-4 bg-[#ce1446] text-white py-3 px-4 font-alice">
        <FaCalendarAlt className="text-xl" />
        <h4 className="font-bold text-2xl">Recent Events</h4>
      </div>

      <ul className="space-y-5 px-3">
        {recentEvents.slice(0, 4).map((event, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row gap-2 items-start sm:items-center border-b pb-4 last:border-b-0"
          >
            <div className="w-full sm:w-24 h-20 flex-shrink-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover rounded"
              />
            </div>

            <div className="flex-1">
              <h4 className="font-semibold text-sm text-[#2d373c] leading-snug">
                {event.title}
              </h4>

              <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-500 text-xs">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-[#ce1446]" /> {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaUsers className="text-[#ce1446]" /> {event.seats} seats
                </span>
              </div>

              <Link
                to={`/event/${event.id}`}
                className="inline-block mt-3 text-xs text-[#ce1446] underline font-bold"
              >
                Book Now
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentEvents;
