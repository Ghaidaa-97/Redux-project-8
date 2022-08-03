import { combineReducers } from "redux";
import moviesReducer from "./MoviesSlice";
import postReducer from "./postSlice";
import bookings from "./bookingSlice";
const allReducers = combineReducers({
    movies: moviesReducer,
    posts: postReducer,
    booking: bookings,
});
export default allReducers;