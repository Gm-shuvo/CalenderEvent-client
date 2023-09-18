// import { format } from "date-fns";

const DayToday = () => {
  const today = new Date();
  const options = {
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const formattedDate = today.toLocaleDateString(undefined, options);

  

  console.log(formattedDate);

  return (
    <div className="h-[54px] bg-blue-600/30 flex items-center justify-center ">
      <h1 className="font-bold rounded">{formattedDate}</h1>
    </div>
  );
};

export default DayToday;
