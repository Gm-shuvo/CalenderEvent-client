
const WeekDay = () => {
  const weekDay = ["Sun", "Mon", "Thu", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="grid grid-cols-7 gap-1 mt-2">
         {weekDay?.map((day)=>{
            return (
              <div className="text-center">{day}</div>
            )
         })}
    </div>
  );
}

export default WeekDay;