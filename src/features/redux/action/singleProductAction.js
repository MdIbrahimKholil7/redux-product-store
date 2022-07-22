import axios from "axios"
import { GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_SUCCESS } from "../type/singleProductConstant"


const singleProductAction = (id) => async(dispatch)=>{
    try {
        dispatch({type:GET_SINGLE_PRODUCT})
        const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
        dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_SINGLE_PRODUCT_ERROR,payload:error.message})
    }
}

export default singleProductAction