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
    <div className="p-4 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="col-span-1 lg:col-span-8 font-alice">
        <EventInfo event={event} />
        <MainSpeakers speakers={event.speakers || []} />
      </div>

      <div className="col-span-1 lg:col-span-4 space-y-6">
        <RegistrationSidebar eventId={event._id} />
        <RecentEvents />
      </div>
    </div>
  );
};

export default Detail;
