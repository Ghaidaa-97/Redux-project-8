import { combineReducers } from "redux";
import moviesReducer from "./MoviesSlice";
import postReducer from "./postSlice";
const allReducers = combineReducers({
    movies: moviesReducer,
    posts: postReducer,
});
export default allReducers;