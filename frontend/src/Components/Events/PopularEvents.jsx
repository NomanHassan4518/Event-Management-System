import React, { useState } from "react";
import { events } from "../../assets/events";
import EventCard from "../EventCard";

const PopularEvents = ({ showAll = false }) => {
  const [selectedCategory, setSelectedCategory] = useState("Business");

  const categories = [
    "Business",
    "Fire Wall",
    "Sport",
    "Web Development",
    "Marketing",
    "Technology",
  ];

  let filteredEvents = events.filter(
    (event) => event.category === selectedCategory
  );

  // If not showAll (home), limit to 6
  if (!showAll) {
    filteredEvents = filteredEvents.slice(0, 6);
  }

  return (
    <section className="bg-[#fafafa] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-10">
          <p className="text-[#ce1446] font-semibold tracking-wide">Events</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2d373c] font-alice uppercase">
            Popular Events
          </h1>
          <p className="text-gray-600 mt-2 text-xs">
            Choose a category and explore upcoming events tailored for you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition 
                ${
                  selectedCategory === category
                    ? "bg-[#ce1446] text-white"
                    : "bg-white text-[#2d373c] border hover:bg-[#ce1446] hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))
          ) : (
            <p className="col-span-3 text-gray-500 text-sm">
              No events found for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularEvents;
