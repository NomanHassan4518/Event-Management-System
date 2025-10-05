import React from "react";

const MainSpeakers = ({speakers}) => {  
  return (
   <div className="mt-9">
  <h1 className="text-3xl text-[#ce1446] font-alice font-bold underline mb-5">
    Main Speakers
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {speakers.slice(0, 4).map((speaker, index) => (
      <div key={index} className="flex items-center gap-2">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 overflow-hidden">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-[#2d373c] font-semibold text-xl">
            {speaker.name}
          </h1>
          <p className="text-[#515154] font-semibold">{speaker.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default MainSpeakers;
