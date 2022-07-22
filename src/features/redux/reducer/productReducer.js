import { GET_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../type/productConstants";

const initialState = {
    loading: false,
    products: [],
    error: null
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case GET_PRODUCT_ERROR:
            return {
                loading: false,
                products: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default productReducer