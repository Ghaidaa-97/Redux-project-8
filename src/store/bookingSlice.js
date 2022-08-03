import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getTikets = createAsyncThunk(
    "booking/getTikets",
    async (movie_id) => {
        const response = await axios.get("http://localhost:8000/api/tikets?movie_id=" + movie_id);
        console.log(response);

        return response.data;
    }
);

export const getTicket = createAsyncThunk(
    "booking/getTicket",
    async (id, thunkAPI) => {
        const response = await axios.get("http://localhost:8000/api/tikets/" + id)
        console.log("ticket", response);
        return response.data;
    }
);

export const addBooking = createAsyncThunk(
    "booking/addBooking",
    async (booking, thunkAPI) => {
        const response = await axios.post("http://localhost:8000/api/booking", booking).catch(err => {
            console.log(err);
        }
        );
        console.log(response);
        return response.data;
    }
);


const initialState = {
    tickets: [],
    ticket: {
        date: "",
        time_start: "",
        time_end: "",
        price: "",
        quantity: "",
        movie_id: "",
    },
    loading: false,
    error: null,
    booking: {
        site_name: "",
        user_id: "",
        tikit_id: "",
        total_price: "",
        payment_method: "",
    }
}

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setTicket: (state, action) => {
            state.ticket = action.payload;
        }
    },
    extraReducers: {
        // GitTikets is a promise so we can use the reducer for pending and fulfilled
        [getTikets.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [getTikets.fulfilled]: (state, action) => {
            state.tickets = action.payload;
        }
        ,
        [getTikets.rejected]: (state, action) => {
            state.error = action.error;
        }
        ,

        // GetTicket is a promise so we can use the reducer for pending and fulfilled
        [getTicket.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [getTicket.fulfilled]: (state, action) => {
            state.ticket = action.payload;
        }
        ,
        [getTicket.rejected]: (state, action) => {
            state.error = action.error;
        }
        ,

        // AddBooking is a promise so we can use the reducer for pending and fulfilled
        [addBooking.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [addBooking.fulfilled]: (state, action) => {
            state.booking = action.payload;
        }
        ,
        [addBooking.rejected]: (state, action) => {
            state.error = action.error;
        }
    }
});
export const { setTicket } = bookingSlice.actions;
export default bookingSlice.reducer;