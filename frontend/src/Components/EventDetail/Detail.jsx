import React from "react";
import { useLocation } from "react-router-dom";

import RegistrationSidebar from "./RegistrationSidebar";
import EventInfo from "./EventInfo";
import RecentEvents from "./RecentEvents";
import MainSpeakers from "./MainSpeakers";

const Detail = () => {
  const location = useLocation();
  const event = location.state?.event || {};

  return (
    <div className="p-16 grid grid-cols-12 gap-6">
      <div className="col-span-8 font-alice">
        <EventInfo event={event}/>
        <MainSpeakers/>
      </div>

      <div className="col-span-4 ">
       <RegistrationSidebar/>
       <RecentEvents/>
      </div>
    </div>
  );
};

export default Detail;
