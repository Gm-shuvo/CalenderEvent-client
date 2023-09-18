

import {useDispatch, useSelector} from "react-redux"
import { getSelectEvent, setEvent } from "../features/postSlice";
import ModalComponent from "./ModalComponent";
import { useState } from "react";
// import {} from "react-router-dom"


const EventCard = ({events}) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState();
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [id , setId] = useState()

  const handelUpdate = async (id) => {
    onOpenModal();
    setId(id)
  };


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/post/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        const data = await response.json();
        
      } else {
        console.error("Delete request failed with status:", response.status);
      }
    } catch (e) {
      console.error(e);
    }
  };
  
  const {title, date} = events
  return (
    <div className="relative min-h-[100px] bg-slate-400/90 w-11/12 flex flex-col items-center justify-start rounded-md p-2">
      <h1>{date}</h1>
      <p>{title}</p>
      <div onClick={()=> handleDelete(events._id)} className="absolute -top-2 right-0 w-5 h-5 rounded-full bg-gray-100/70 text-center">x</div>
      <div onClick={()=> handelUpdate(events._id)} >+</div>
      <ModalComponent open={open} onCloseModal={onCloseModal} onOpenModal={onOpenModal} put={true} id={id}/>
    </div>
  );
};

export default EventCard;
