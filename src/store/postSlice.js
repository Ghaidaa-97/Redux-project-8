import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async () => {
        const response = await axios.get("http://localhost:8000/api/posts");
        console.log(response);
        return response.data;
    }
);

const initialState = {
    posts: [],
    loading: false,
    error: null,
    post: null,
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.post = action.payload;
        }
    }
    ,
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.loading = false;
        }
        ,
        [getPosts.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        }
    }
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
