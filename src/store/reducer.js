import { combineReducers } from "redux";
import dataReducer from "./dataSlice";
import postReducer from "./postSlice";
const allReducers = combineReducers({
    data: dataReducer,
    posts: postReducer,
});
export default allReducers;