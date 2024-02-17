import { createSlice } from "@reduxjs/toolkit";
const tasksArr = [
    {
        id: 1,
        status: 'pending',
        title: 'JavaScript',
        description: 'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
        date: '2023-08-28',
        assignedTo: 'Mohin Rana',
        priority: 'high',
    }
]

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: tasksArr,
    },
    reducers:{
        addTask: ((state, {payload}) => {
            if(state.tasks?.length === 0){
                state.tasks  = [...state.tasks, {...payload, status:'pending' , id: 1 }]
            }else{
                const lastElement = state.tasks.at(-1);
                state.tasks  = [...state.tasks, {...payload, status:'pending', id: lastElement?.id + 1 }]
            }
          
        }),
        deleteTask: (state, {payload}) => {
            state.tasks = state.tasks.filter(x => x.id !== payload);
        },
        updateTask: (state, {payload}) => {
            let find = [...state.tasks].find(x => x.id == payload.id);
            find.status = payload.status
        }
    }
})
export const {addTask,deleteTask,updateTask} = tasksSlice.actions
export default tasksSlice.reducer;