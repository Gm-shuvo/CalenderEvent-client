import { useSelector } from "react-redux";
import { getSelectDate } from "../features/dateSlice";
const EventCard = () => {
  const { date } = useSelector(getSelectDate);

  return (
    <div className="min-h-[100px] bg-slate-400 w-11/12 flex flex-col items-center justify-start rounded-md p-2">
      <h1>{`Wednesday, 06, 2023`}</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default EventCard;
