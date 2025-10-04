import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { speakers } from "../../assets/events";

const responsive = {
  0: { items: 1 },
  600: { items: 2 },
  1024: { items: 3 },
};

const Speakers = () => {
  const items = speakers.map((speaker) => (
    <div key={speaker.id} className="!mx-3">
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-64 object-cover"
      />

      <div className="bg-[#ce1446] text-white text-center py-4">
        <h3 className="text-lg font-bold">{speaker.name}</h3>
        <p className="text-sm opacity-90">{speaker.title}</p>
      </div>
    </div>
  ));

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#ce1446] font-semibold tracking-wide">Speakers</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#2d373c] font-alice uppercase mb-10">
          Meet Our Speakers
        </h1>

        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay
          autoPlayInterval={2500}
          infinite
          disableDotsControls={true}
          disableButtonsControls={true}
        />
      </div>
    </section>
  );
};

export default Speakers;
