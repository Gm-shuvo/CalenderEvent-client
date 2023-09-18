import {RenderCalendar}  from "./RenderCalender"


const WeekDay = () => {
  const weekDay = ["Sun", "Mon", "Thu", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="grid grid-cols-7 gap-1 mt-2">
         {weekDay?.map((day,ind)=>{
            return (
              <div key={ind} className="text-center">{day}</div>
            )
         })}
         <RenderCalendar/>
    </div>
  );
}

export default WeekDay;