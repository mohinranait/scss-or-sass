import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movie/movieSlice";

const store = configureStore({
    reducer: {
        movies : movieReducer
    }
})

export default store;