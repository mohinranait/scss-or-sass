const { createSlice } = require("@reduxjs/toolkit");
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    carts: [],
    isLoading: false,
    isError: null,
}
const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addCart : (state, action) => {
            state.isLoading = true;

            const cart = {
                _id : uuidv4(),
                productId: action.payload._id,
                name : action.payload.name,
                price : action.payload.price,
                rating : action.payload.rating,
                category : action.payload.category,
                image: action.payload.image,
            }
            const isExists = state.carts?.find(x => x.productId == action.payload._id )
            if(!isExists){
                state.carts = [...state.carts, cart]
            }
        },
        deleteCart : (state,action) => {
            console.log(action.payload);
            state.isLoading = true;
            state.carts = state.carts?.filter(x => x._id !== action?.payload)
        }
    }
})

export const {addCart,deleteCart} = cartSlice.actions;
export default cartSlice.reducer;