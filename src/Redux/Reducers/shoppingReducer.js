import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Wishlist:[],
    cart:[]
}

export const shoppingSlice = createSlice({
    name:"Shopping",
    initialState,
    reducers:{
        addWishlist:(state, action)=>{
            state.Wishlist = Array.from(new Set([...state.Wishlist, action.payload]));
        },
        addCart:(state, action)=>{
            state.cart = Array.from(new Set([...state.cart, action.payload]));
        }
    }
})

export const {addWishlist, addCart} = shoppingSlice.actions;

export default shoppingSlice.reducer;
