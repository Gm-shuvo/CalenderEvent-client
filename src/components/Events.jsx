import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import {useDispatch, useSelector} from "react-redux"
import { getSelectEvent, setEvent } from "../features/postSlice";

const Events = () => {
  const {events} = useSelector(getSelectEvent)
  console.log(events)
  const dispatch = useDispatch();
  const fetchData = async()=>{
    try {
      const {data} = await fetch("http://localhost:5000/api/post").then(res => res.json());
      
      dispatch(setEvent(data));
      
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, [dispatch, events]);

  

  return (
    <div className="flex flex-col place-items-center gap-4 max-h-[600px] overflow-scroll">
      {events && events?.map((eve, ind)=>{
        return(
          <EventCard key={ind} events={eve} />
        )
      })}
    </div>
  );
};

export default Events;
