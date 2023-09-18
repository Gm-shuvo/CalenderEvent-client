import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const Events = () => {
  const [events, setEvents] = useState();

  useEffect(() => {
    try {
      const {data} = fetch("http://localhost:5000/api/post").then(
        (res) => res.json());
      console.log(data)
      // setEvents(res);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div className="flex flex-col place-items-center gap-4 max-h-[600px] overflow-scroll">
      <EventCard/>
      <EventCard/>
      <EventCard/>
    </div>
  );
};

export default Events;
