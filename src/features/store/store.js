import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import productReducer from "../redux/reducer/productReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootStore=combineReducers({
    products:productReducer
})

const store=createStore(rootStore,composeWithDevTools(applyMiddleware(thunk,logger)))
export default store