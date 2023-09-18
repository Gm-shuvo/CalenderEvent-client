import { useState } from "react";
import {format} from "date-fns"
import {  useDispatch, useSelector } from "react-redux";
import { getSelectDate, setDate } from "../features/dateSlice";
import ModalComponent from "./ModalComponent";

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const daysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const startOfMonth = new Date(currentYear, currentMonth, 1);
const endOfMonth = new Date(
  currentYear,
  currentMonth,
  daysInMonth(currentYear, currentMonth)
);

console.log(startOfMonth, endOfMonth)



export const  RenderCalendar = () => {
  const days = [];
  const weeks = [];
  const dispatch = useDispatch();
  const {date} = useSelector(getSelectDate)

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  console.log(date)

  
  console.log(daysInMonth(currentYear, currentMonth));
  const [selectedDate , setSelectedDate] = useState(null);


  const handleDateClick = (date) => {
    const formattedDate = format(date, 'EEEE, dd, yyyy'); 
    // console.log(formattedDate)
    dispatch(setDate(formattedDate));
    onOpenModal();
  };

  for (let day = 1; day <= daysInMonth(currentYear, currentMonth); day++) {
    const date = new Date(currentYear, currentMonth, day);
    const isToday = date.toDateString() === currentDate.toDateString();
    const isSelected = date.toDateString() === selectedDate?.toDateString();

    

    days.push(
      <div
        key={day}
        onClick={() => handleDateClick(date)}
        className={`text-black w-10 h-10 rounded-full text-center flex items-center justify-center ${isToday && 'bg-gray-400'}`}
      >
        {day}
      </div>
    );
  }

  return (
    <>
      {days?.map((week, index) => {
        return (
          <div className="flex justify-center mt-6" key={index}>
            {week}
          </div>
        );
      })}
      <ModalComponent open={open} onCloseModal={onCloseModal} onOpenModal={onOpenModal}/>
    </>
  );
};
