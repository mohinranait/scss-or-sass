'use client'

import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: productReducer } = require("./product/productSlice");

const store = configureStore({
    reducer: {
        products : productReducer,
        carts : cartReducer,
        user : authReducer
    }
})

export default store;