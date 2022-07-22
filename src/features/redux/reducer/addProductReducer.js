import { ADD_PRODUCT } from "../type/addProductType";

const initialState = {
    cart: {},
    quantity: 0
}

const addProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return (
                const item=state.cart.find()
            )

        default:
            return state;
    }
}