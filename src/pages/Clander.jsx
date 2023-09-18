import DayToday from "../components/DayToday";
import Events from "../components/Events";
import WeekDay from "../components/WeekDay";

const Clander = () => {
  return (
    <div className="min-w-[80%] min-h-[80%] bg-blue-200/40 flex rounded-md">
      <div className="left flex-[.7]">
        <DayToday/>
        <WeekDay/>
        
      </div>
      <div className="right flex-[.3] bg-gray-300 rounded-md ">
        <h1 className="text-2xl md:text-3xl font-bold text-center h-[54px] flex items-center justify-center">Events</h1>
        <Events/>
      </div>
    </div>
  );
}

export default Clander;