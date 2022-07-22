import { GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_SUCCESS } from "../type/singleProductConstant";

const initialState = {
    loading: false,
    item: [],
    error: null
}
const singleProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.payload
            }
        case GET_SINGLE_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                item: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default singleProductReducer