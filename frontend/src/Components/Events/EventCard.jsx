import React from "react";
import { BsDiagram3, BsCalendar2Week, BsGeoAlt } from "react-icons/bs";
import {  useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/event/${event.id}`, { state: { event } });
  };

  return (
    <div className="w-full  bg-white rounded overflow-hidden   group border">
      <div className="relative">
        <div className="relative w-full h-[220px] overflow-hidden rounded">
          <img
            src={event.image}
            alt="event"
            className="w-full h-full object-cover transform transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="absolute bottom-0 left-0 bg-[#ce1446] group-hover:bg-black text-white text-sm px-3 py-1 rounded flex items-center gap-2">
          <BsDiagram3 className="text-lg" /> <span>{event.seats} Seats</span>
        </div>
      </div>

      <div className="py-5 px-2  space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <BsCalendar2Week className="text-[#ce1446]" />{" "}
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold">
          <BsGeoAlt className="text-[#ce1446]" /> <span>{event.location}</span>
        </div>

        <h5 className="text-lg text-start font-alice font-semibold text-[#2d373c]">
          {event.title}{" "}
        </h5>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => handleNavigate()}
            className="underline text-[#ce1446] text-sm font-semibold"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
