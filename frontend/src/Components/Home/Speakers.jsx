import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const speakers = [
  {
    id: 1,
    name: "John Carter",
    title: "Senior Visual Designer",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
  },
 
  {
    id: 3,
    name: "David Kim",
    title: "AI Researcher",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Emily Smith",
    title: "Event Organizer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Michael Brown",
    title: "Web Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Olivia Johnson",
    title: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "James Wilson",
    title: "Tech Speaker",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Isabella Martinez",
    title: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=400&fit=crop",
  },
 
  {
    id: 10,
    name: "Sophia Adams",
    title: "Business Consultant",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
  },
];



const responsive = {
  0: { items: 1 },
  600: { items: 2 },
  1024: { items: 3 },
};

const Speakers = () => {
  const items = speakers.map((speaker) => (
   <div
  key={speaker.id}
  className="!mx-3"
>
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
