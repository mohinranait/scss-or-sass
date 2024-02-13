'use client'
const { createSlice } = require("@reduxjs/toolkit");
import { v4 as uuidv4 } from 'uuid';

const productsArra = [
    {
        _id: 1, 
        name : "Realme phone in bangladesh",
        price: 24,
        rating: 4,
        category: 'Mobile',
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    },
    {
        _id: 2, 
        name : "Walton Laptop in gray color",
        price: 50,
        rating: 3,
        category: 'Laptop',
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    },
    {
        _id: 3, 
        name : "HP Laptop in HD processor",
        price: 100,
        rating: 2,
        category: 'Laptop',
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    },
    {
        _id: 4, 
        name : "Walton LED TV Offer",
        price: 80,
        rating: 5,
        category: 'TV',
        image: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    },
]

const initialState = {
    products: productsArra,
    productsCopy: productsArra,
    isLoading: false,
    isError : null,
}
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log(action.payload);
            state.isLoading = true;
            state.products = [...state.products, {...action.payload, _id: uuidv4()}];
        },
        searchProducts : (state,action) => {
            if(action.payload === 'reset'){
                state.products = state.productsCopy
            }else{
                state.products = action.payload
            }

        }
    }
})

export const {addProduct,searchProducts} = productsSlice.actions;
export default productsSlice.reducer;