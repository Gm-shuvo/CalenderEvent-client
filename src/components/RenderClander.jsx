import { useState } from "react";

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

const handleDateClick = () =>

const RenderCalendar = () => {
  const [selectedDate, setSelectedDate] = useState();
  const weeks = [];
  const days = [];

  for (let day = 1; day <= daysInMonth(currentYear, currentMonth); day++) {
    const date = new Date(currentYear, currentMonth, day);
    const isToday = date.toDateString() === currentDate.toDateString();
    const isSelected = date.toDateString() === selectedDate?.toDateString();

    days.push(
      <div
        key={day}
        onClick={() => handleDateClick(date)}
        className={classNames("text-center cursor-pointer p-2 border", {
          "bg-gray-200": isSelected,
          "text-gray-500": !isSelected,
          "bg-blue-500 text-white": isToday,
        })}
      >
        {day}
      </div>
    );

    if (date.getDay() === 6 || day === daysInMonth(currentYear, currentMonth)) {
      weeks.push(
        <div key={date} className="flex">
          {days}
        </div>
      );
      days.length = 0;
    }
  }

  return weeks;
};

export default RenderCalendar;
