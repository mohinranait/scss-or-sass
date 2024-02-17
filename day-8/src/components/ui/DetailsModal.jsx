

const DetailsModal = ({task}) => {
    return (
        <div>
            <ul className="flex flex-col gap-3 mt-3">
                <li className="flex gap-2">
                    <span className="w-[50px]">Title</span>
                    <p>: {task?.title}</p>
                </li>
                <li className="flex gap-2">
                    <span className="w-[50px]">About</span>
                    <p>: {task?.description}</p>
                </li>
                <li className="flex gap-2">
                    <span className="w-[50px] flex-wrap">Cola</span>
                    <p>: {task?.assignedTo}</p>
                </li>
                <li className="flex gap-2">
                    <span className="w-[50px]">Status</span>
                    <p>: {task?.status}</p>
                </li>
                <li className="flex gap-2">
                    <span className="w-[50px]">Date</span>
                    <p>: {task?.date}</p>
                </li>
            </ul>
        </div>
    );
};

export default DetailsModal;