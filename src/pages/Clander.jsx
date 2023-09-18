import DayToday from "../components/DayToday";
import WeekDay from "../components/WeekDay";

const Clander = () => {
  return (
    <div className="min-w-[80%] min-h-[80%] bg-blue-200/40 flex rounded-md">
      <div className="left flex-[.7]">
        <DayToday/>
        <WeekDay/>
        
      </div>
      <div className="right flex-[.3] bg-gray-300 rounded-md"></div>
    </div>
  );
}

export default Clander;