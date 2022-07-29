import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getPosts = createAsyncThunk(
    "post/getPosts",
    async (page, thunkAPI) => {
        const response = await axios.get("http://localhost:8000/api/posts?page=" + page);
        console.log(response.data);
        thunkAPI.dispatch(setlastPage(response.data.last_page));
        thunkAPI.dispatch(setPage(response.data.current_page));
        return response.data.data;
    }
);

export const getPost = createAsyncThunk(
    "post/getPost",
    async (id, thunkAPI) => {
        const response = await axios.get("http://localhost:8000/api/posts/" + id);
        console.log(response.data);
        return response.data;
    }
);

export const addPost = createAsyncThunk(
    "post/addPost",
    async (post, thunkAPI) => {
        const response = await axios.post("http://localhost:8000/api/posts", post);
        console.log(response.data);
        thunkAPI.dispatch(getPosts(1));
        return response.data;
    })


export const editPost = createAsyncThunk(
    "post/editPost",
    async (post, thunkAPI) => {
        const response = await axios.put("http://localhost:8000/api/posts/" + post.id, post);
        console.log(response.data);
        thunkAPI.dispatch(getPosts(1));
        return response.data;
    })

export const deletePost = createAsyncThunk(
    "post/deletePost",
    async (id, thunkAPI) => {
        const response = await axios.delete("http://localhost:8000/api/posts/" + id);
        console.log(response.data);
        thunkAPI.dispatch(getPosts(1));
        return response.data;
    }
)

const initialState = {
    posts: [],
    page: 1,
    lastPage: 1,
    loading: false,
    error: null,
    post: {
        title: '',
        content: '',
        image: '',
        created_at: '',
        updated_at: '',
        comments: []

    },
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.post = action.payload;
        }
        , setlastPage: (state, action) => {
            state.lastPage = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        }
    }
    ,
    extraReducers: {

        // The reducer for our `loading` state is configured to accept actions with the type `posts/getPosts`
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
        ,

        // getPost reducer for getPost action
        [getPost.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [getPost.fulfilled]: (state, action) => {
            state.post = action.payload;
            state.loading = false;
        }
        ,
        [getPost.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
        // addPost reducer for addPost action
        [addPost.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [addPost.fulfilled]: (state, action) => {
            state.post = action.payload;
            state.loading = false;
        }
        ,
        [addPost.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        }
        ,
        // editPost reducer for editPost action
        [editPost.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [editPost.fulfilled]: (state, action) => {
            state.post = action.payload;
            state.loading = false;
        }
        ,
        [editPost.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
        // deletePost reducer for deletePost action
        [deletePost.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [deletePost.fulfilled]: (state, action) => {
            state.post = action.payload;
            state.loading = false;
        }
        ,
        [deletePost.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        }



    }

});

export const { setPost, setPage, setlastPage } = postSlice.actions;

export default postSlice.reducer;
