const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: {},
    isLoading: true,
}
const authSlice = createSlice({
    name : "user",
    initialState ,
    reducers: {
        addUser:(state, action)=> {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = {}
        }
    }
})

export const {addUser,logOut} = authSlice.actions;
export default authSlice.reducer;