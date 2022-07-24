import { createSlice } from "@reduxjs/toolkit";
import { ADD_PRODUCT } from "../type/addProductType";

const initialState = {
    cart: [],
    quantity: 0
}

const cartSlice = createSlice({
    name: 'add',
    initialState,
    reducers: {
        addToCart(state, action) {
            /*  const tempProduct={...action.payload,quantity:1}
             state.cart.push(tempProduct) */

            const index = state.cart.findIndex(item => item.id === action.payload.id)
            console.log(index)
            if (index >= 0) {
                state.cart[index].quantity += 1
            } else {
                action.payload.quantity = 1
                state.cart.push(action.payload)
                state.quantity = state.cart.length
            }
            // console.log(action)
        }
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
