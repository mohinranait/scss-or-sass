import { configureStore } from "@reduxjs/toolkit";
import tasksReucer from "./features/tasks/tasksSlice";
import userReducer from "./features/users/userSlice";

const store = configureStore({
    reducer: {
        tasksSlice : tasksReucer,
        userSlice : userReducer,
    }
})

export default store;