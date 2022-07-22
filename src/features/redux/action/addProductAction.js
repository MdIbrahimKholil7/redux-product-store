import { ADD_PRODUCT } from "../type/addProductType"


const addProductAction=(item)=>{
    return{
        type:ADD_PRODUCT,
        payload:item
    }
}