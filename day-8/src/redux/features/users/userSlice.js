import { createSlice } from "@reduxjs/toolkit";

const userArr = [
    {
        id: 1,
        name : "Mohin Rana",
    },
    {
        id: 2,
        name : "Mahir Shikder",
    },
    {
        id: 3,
        name : "Sufiya",
    },
]

const userSlice = createSlice({
    name : "user",
    initialState : {
        users : userArr,
        user : {
            id: 1,
            name : "Mohin Rana"
        },
    },
    reducers:  {
        authUser : (state,{payload}) => {
            state.user = payload
        }
    }
})

export const {authUser} = userSlice.actions
export default userSlice.reducer;