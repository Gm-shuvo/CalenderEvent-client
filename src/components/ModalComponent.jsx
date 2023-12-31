import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useSelector, useDispatch } from "react-redux";
import { getSelectDate } from "../features/dateSlice";
import { useState } from "react";

const ModalComponent = ({ onOpenModal, open, onCloseModal, put, id }) => {
  const { date } = useSelector(getSelectDate);
  const [events, setEvents] = useState();

  const dispatch = useDispatch();
  const handelSubmit = async (e) => {
    
    e.preventDefault();
    try {
      // const formData = new FormData();
      const dataForm = {
        title: events,
        date: date
      }
      
      console.log(events)
      const {data} = await fetch(`http://localhost:5000/api/post/${id ||""}`, {
        method: `${put ? "PUT":"POST"}`,
        headers:{"Content-Type": "application/json"}, 
        body: JSON.stringify(dataForm)
      }).then(res=> res.json());
      console.log(data)
      dispatch(setEvents(data))
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="min-h-[500px] min-w-[500px] w-[80%] h-full">
          <div className="flex flex-col items-center justify-center">
            <h1>Picked Date</h1>
            <span>{date}</span>
          </div>

          <form onSubmit={handelSubmit} className=" mt-32 flex flex-col gap-2 ">
            <input
              className="w-full h-[40px] outline-none border-2 px-2 border-gray-400 rounded-md"
              type="text"
              onChange={(e) => setEvents(e.target.value)}
            />
            <button
              className="h-[30px] mt-2 bg-black w-full text-white"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
