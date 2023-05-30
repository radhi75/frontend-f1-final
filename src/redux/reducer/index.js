import { combineReducers } from "redux";
import userReducer from "./userReducer";
import Blogreducer from "./Blogreducer";
import ErrorReducer from "./ErrorReducer";

const rootreducer=combineReducers({userReducer,Blogreducer,ErrorReducer})

export default rootreducer