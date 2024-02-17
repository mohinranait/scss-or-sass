
import {  useSelector } from 'react-redux';
import TaskListCard from './TaskListCard';

const MyTasks = () => {
  const {user} =  useSelector(state => state.userSlice);
  const {tasks} =  useSelector(state => state.tasksSlice);
  const ownerTasks = tasks.filter(x => x.assignedTo == user?.name)

 

  return (
    <div>
      <h1 className="text-xl my-3 flex justify-between">
        <span>My Tasks</span>
        <span className='text-base'>{user?.name}</span>
        </h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {
          ownerTasks?.map(item => <TaskListCard key={item?.id} item={item}  /> )
        }
      </div>
    </div>
  );
};

export default MyTasks;
