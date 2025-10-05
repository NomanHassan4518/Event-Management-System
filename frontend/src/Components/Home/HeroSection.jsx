import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineEventSeat } from "react-icons/md";
import { IoMegaphoneOutline, IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const events = JSON.parse(localStorage.getItem("events"));
  const navigate = useNavigate();
  const handleNavigate = (event) => {
    navigate(`/event/${event._id}`, { state: { event } });
  };

  const items = events.slice(0, 2).map((event, i) => (
    <section
      key={i}
      className="relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 pt-20 md:pt-24 px-6 md:px-10 bg-[conic-gradient(from_243.17deg_at_52.66%_45.72%,rgba(206,20,70,0.25)_0deg,rgba(255,255,255,0)_66.85deg,rgba(222,95,129,0.3)_266.25deg,rgba(206,20,70,0.25)_360deg)]"
    >
      <div className="flex flex-col justify-center space-y-6 md:pl-10 text-center md:text-left">
        <h5 className="flex items-center justify-center md:justify-start text-[#ce1446] text-lg md:text-[22px] font-semibold">
          <span className="mr-3 text-2xl md:text-3xl text-gray-500">
            <AiOutlineSchedule />
          </span>
          {new Date(event.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h5>

        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] text-[#2d373c] font-alice font-bold leading-tight">
          {event.title}
        </h2>

        <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-gray-700 text-sm md:text-base">
          <li className="flex items-center gap-2">
            <span className="text-[#ce1446] text-lg md:text-xl">
              <MdOutlineEventSeat />
            </span>
            {event.seats} Seats
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#ce1446] text-lg md:text-xl">
              <IoMegaphoneOutline />
            </span>
            {event.speakers.length} Best Speaker
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#ce1446] text-lg md:text-xl">
              <IoLocationOutline />
            </span>
            {event.location}
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 text-sm md:text-base justify-center md:justify-start">
          <button
            onClick={() => handleNavigate(event)}
            className="w-full sm:w-auto px-6 md:px-[45px] py-3 bg-[#ce1446] text-white rounded-lg shadow-lg hover:bg-pink-100 hover:text-[#ce1446] border-2 border-[#ce1446] transition"
          >
            Book Now
          </button>
          <button
            onClick={() => handleNavigate(event)}
            className="w-full sm:w-auto px-6 md:px-[45px] py-3 bg-pink-100 text-[#ce1446] rounded-lg shadow-lg hover:bg-[#ce1446] hover:text-white border-2 border-[#ce1446] transition"
          >
            View Details
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center relative mt-6 md:mt-0">
        <img
          src="https://demo.egenslab.com/html/eventlab/assets/images/hero/hero-figure1.png"
          alt={event.title}
          className="w-[70%] sm:w-[60%] md:w-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain animate-bounce-slow"
        />
      </div>
    </section>
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      infinite
      autoPlay
      autoPlayInterval={4000}
      disableDotsControls={true}
      disableButtonsControls={true}
    />
  );
};

export default HeroSection;
