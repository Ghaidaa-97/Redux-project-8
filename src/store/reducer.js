import { combineReducers } from "redux";
import dataReducer from "./dataSlice";

const allReducers = combineReducers({
    data: dataReducer
});
export default allReducers;