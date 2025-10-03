import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineEventSeat } from "react-icons/md";
import { IoMegaphoneOutline, IoLocationOutline } from "react-icons/io5";

const events = [
  {
    date: "October 13, 2025",
    title: "EVENTS, MEETUPS & CONFERENCES",
    seats: "500 Seats",
    speakers: "10 Speakers",
    location: "Centaurus Mall, Islamabad",
    image: "https://demo.egenslab.com/html/eventlab/assets/images/hero/hero-figure1.png",
  },
  {
    date: "November 05, 2025",
    title: "TECH & DESIGN SUMMIT 2025",
    seats: "800 Seats",
    speakers: "15 Speakers",
    location: "Serena Hotel, Islamabad",
    image: "https://demo.egenslab.com/html/eventlab/assets/images/hero/hero-figure1.png",
  },
];

const HeroSection = () => {
  const items = events.map((event, i) => (
    <section
      key={i}
      className="relative w-full min-h-screen grid md:grid-cols-2 gap-8 pt-24 px-10  bg-[conic-gradient(from_243.17deg_at_52.66%_45.72%,rgba(206,20,70,0.25)_0deg,rgba(255,255,255,0)_66.85deg,rgba(222,95,129,0.3)_266.25deg,rgba(206,20,70,0.25)_360deg)]"
    >
      <div className="flex flex-col justify-center space-y-6 pl-10">
        <h5 className="flex items-center text-[#ce1446] text-[22px] font-semibold">
          <span className="mr-3 text-3xl text-gray-500">
            <AiOutlineSchedule />
          </span>
          {event.date}
        </h5>

        <h2 className="text-[48px] md:text-[60px] text-[#2d373c] font-alice font-bold leading-tight">
          {event.title.split("&")[0]}&amp;
          <span className="text-[#ce1446]"> {event.title.split("&")[1]}</span>
        </h2>

        <ul className="flex flex-wrap items-center gap-6 text-gray-700 text-sm">
          <li className="flex items-center gap-2">
            <span className="text-[#ce1446] text-xl"><MdOutlineEventSeat /></span> 
            {event.seats}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#ce1446] text-xl"><IoMegaphoneOutline /></span> 
            {event.speakers}
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#ce1446] text-xl"><IoLocationOutline /></span> 
            {event.location}
          </li>
        </ul>

        <div className="flex gap-4 !mt-10 text-sm">
          <button className="px-[45px] py-[12px] bg-[#ce1446] text-white rounded-lg shadow-lg hover:bg-pink-100 hover:text-[#ce1446] border-2 border-[#ce1446] transition">
            Book Now
          </button>
          <button className="px-[45px] py-[12px] bg-pink-100 text-[#ce1446] rounded-lg shadow-lg hover:bg-[#ce1446]  hover:text-white border-2 border-[#ce1446] transition">
            View Details
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center relative">
        <img
          src={event.image}
          alt={event.title}
          className="max-h-[500px] object-contain animate-bounce-slow"
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
