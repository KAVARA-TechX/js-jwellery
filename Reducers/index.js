import { userReducer } from "./UserReducer";
import {CartReducer} from './CartReducer'
import { combineReducers } from "redux";

  const rootReducer = combineReducers({
    user:userReducer,
    cart:CartReducer,
})

export default rootReducer;