import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getData = createAsyncThunk(
    "dataSlice/getData",
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data);
        return response.data;
    });

const initialState = {
    data: [],
    loading: false,
    error: null
}
const dataSlice = createSlice({
    name: "data",
    initialState,
    extraReducers: {
        [getData.pending]: (state, action) => {
            state.loading = true;
        },
        [getData.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        [getData.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        }

    }
});

export default dataSlice.reducer;