import axios from "axios"
import { GET_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../type/productConstants"


export const getProduct = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT })
        const { data } = await axios.get(`https://fakestoreapi.com/products`)
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_PRODUCT_ERROR, payload: error.message })
    }
}