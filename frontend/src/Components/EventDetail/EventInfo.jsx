import React from "react";
import { AiOutlineCalendar, AiOutlineTeam } from "react-icons/ai";
import {
  IoLocationOutline,
  IoMicOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { MdEventNote } from "react-icons/md";

const EventInfo = ({ event }) => {
  return (
    <div className="">
      <div className="w-full">
        <img
          className="w-full h-auto md:h-[400px] object-cover rounded-t-lg"
          src={event.image}
          alt={event.title || "Event"}
        />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 md:space-y-0 space-y-4  text-sm px-6 py-4 border-b text-[#2d373c] font-semibold">
        <div className="flex items-center gap-2">
          <AiOutlineCalendar className=" text-lg" />
          <span>
            {new Date(event.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#ce1446]">
          <AiOutlineTeam className=" text-lg" />
          <span>{event.seats || "500 Seats"} Seats</span>
        </div>
        <div className="flex items-center gap-2">
          <IoLocationOutline className="text-lg" />
          <span>{event.location || "Centaurus Mall, Islamabad"}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1  gap-3 w-full py-4 border-b text-sm">
        <div className="flex items-center gap-3 px-4 md:border-none border-b md:pb-0 pb-4">
          <div className="bg-[#fff0f4] p-3 rounded-full">
            <MdEventNote className="text-[#ce1446] text-xl" />
          </div>
          <div>
            <p className="font-semibold text-gray-800">Event Type</p>
            <span className="text-gray-500 text-xs">
              {event.category || "Business"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 md:border-none border-b md:pb-0 pb-4">
          <div className="bg-[#fff0f4] p-3 rounded-full">
            <IoMicOutline className="text-[#ce1446] text-xl" />
          </div>
          <div>
            <p className="font-semibold text-gray-800">Speaker</p>
            <span className="text-gray-500 text-xs">
              {event.speakers.length} Best Speaker
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 ">
          <div className="bg-[#fff0f4] p-3 rounded-full">
            <IoPeopleOutline className="text-[#ce1446] text-xl" />
          </div>
          <div>
            <p className="font-semibold text-gray-800">Sponsor</p>
            <span className="text-gray-500 text-xs">{event.sponsor}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#2d373c] leading-snug">
          {event.title || "Event Title Goes Here"}
        </h1>

        <p className="text-[#515154] text-[16px] font-extralight leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nemo
          eos? Ipsam commodi quae ipsum excepturi ea rerum molestiae, atque
          repudiandae, aspernatur repellendus laudantium porro. Eos libero vel
          delectus illum! Odio, delectus quis. Dolorum, dicta similique, numquam
          quos itaque repellendus doloribus pariatur magnam, voluptatibus
          assumenda dignissimos ipsa sequi laudantium. Reprehenderit.
        </p>
      </div>
    </div>
  );
};

export default EventInfo;
