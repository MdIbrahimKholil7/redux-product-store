import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import productReducer from "../redux/reducer/productReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import singleProductReducer from "../redux/reducer/singleProductReducer";
import cartReducer from '../redux/reducer/addProductReducer'


const rootStore=combineReducers({
    products:productReducer,
    item:singleProductReducer,
    cartReducer
})

const store=createStore(rootStore,composeWithDevTools(applyMiddleware(thunk,)))
export default store