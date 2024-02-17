import { CheckIcon, DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/features/tasks/tasksSlice";
import Modal from "../modal/Modal";
import DetailsModal from "../ui/DetailsModal";
import { useState } from "react";


const TaskListCard = ({item}) => {
    let [isOpenModalDetails, setIsOpenModalDetails] = useState(false)
    const dispatch = useDispatch();
    const handleStatus = (id) => {
        dispatch(updateTask({id, status: "done"}))
      }
    return (
        <>
            <div
                className="bg-secondary/10 rounded-md p-3 flex justify-between"
            >
                <h1>{item.title}</h1>
                <div className="flex gap-3">
                    <button onClick={() => setIsOpenModalDetails(true)} className="grid place-content-center" title="Details">
                        <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                    </button>
                    <button className="grid place-content-center" title="Done">
                        <CheckIcon onClick={() => handleStatus(item?.id)} className="w-5 h-5 text-primary" />
                    </button>
                </div>
            </div>   
            <Modal title={"About task"} isOpen={isOpenModalDetails} setIsOpen={setIsOpenModalDetails}>
                <DetailsModal task={item} />
            </Modal>
        </>
    );
};

export default TaskListCard;