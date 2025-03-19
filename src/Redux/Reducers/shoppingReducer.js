import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Wishlist:[],
    cart:[]
}

export const shoppingSlice = createSlice({
    name:"Shopping",
    initialState,
    reducers:{
        addWishlist: (state, action) => {
            // Check if the item already exists in the wishlist using .some()
            const exists = state.Wishlist.some(item => item.id === action.payload.id);

            if (!exists) {
                state.Wishlist.push(action.payload); // Add only if it doesn't exist
            }
        },
        addCart:(state, action) => {
            const exists = state.cart.some(item => item.id === action.payload.id);
            if(!exists){
                state.cart.push(action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            state.cart = state.cart.map(item =>
                item.id === action.payload.id ? { ...item, quantity : item.quantity + 1 } : item
            );
        },
        decreaseQuantity: (state, action ) => {
            state.cart = state.cart.map(item =>
                item.id === action.payload.id ? { ...item, quantity : item.quantity - 1} : item
            );
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        removeFromWishlist : (state, action ) =>{
            state.Wishlist = state.Wishlist.filter(item => item.id !== action.payload.id);
        }
    }
})

export const {addWishlist, addCart, increaseQuantity , decreaseQuantity , removeFromCart , removeFromWishlist} = shoppingSlice.actions;

export default shoppingSlice.reducer;
