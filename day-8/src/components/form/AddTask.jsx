import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";


const AddTask = ({isOpen, setIsOpen}) => {
    const {users} = useSelector(state => state.userSlice);
    console.log(users);
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();

        const title = e.target.title.value;
        const description = e.target.description.value;
        const date = e.target.date.value;
        const assignedTo = e.target.assignedTo.value;
        const obj = {
            title, description, date,assignedTo,
        }
        dispatch(addTask(obj))
        setIsOpen(!isOpen)
    }
    return (
      
        <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
            <div>
                <label htmlFor="" className='text-sm font-medium'>Task title</label>
                <input type="text" name="title" className='w-full rounded-md' />
            </div>
            <div>
                <label htmlFor="" className='text-sm font-medium'>Task description</label>
                <input type="text" name="description" className='w-full rounded-md' />
            </div>
            <div>
                <label htmlFor="" className='text-sm font-medium'>Colaborate</label>
                <select name="assignedTo" className='w-full rounded-md' id="">
                    <option value="">Select users</option>
                    {
                        users?.map(user =>  <option key={user?.id} value={user?.name}>{user?.name}</option> )
                    }
                </select>
            </div>
            <div>
                <label htmlFor="" className='text-sm font-medium'>Date</label>
                <input type="date" name="date" className='w-full rounded-md' />
            </div>
            <div>
                <button type="submit" className='btn w-full btn-primary'>Save</button>
            </div>
        </form>
  
    );
};

export default AddTask;