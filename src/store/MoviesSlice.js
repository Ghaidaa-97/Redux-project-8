import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getMovies = createAsyncThunk(
    "movies/getMovies",
    async () => {
        const response = await axios.get("http://localhost:8000/api/movies");
        console.log(response.data);
        return response.data;
    });

export const getMovie = createAsyncThunk(
    "movies/getMovie",
    async (id, thunkAPI) => {
        const response = await axios.get("http://localhost:8000/api/movies/" + id)
        return response.data;
    }
);

export const addMovie = createAsyncThunk(
    "movies/addMovie",
    async (movie, thunkAPI) => {
        const response = await axios.post("http://localhost:8000/api/movies", movie);
        console.log(response);
        return response.data;
    }
);

const initialState = {
    movies: [],
    movie: {
        title: "",
        description: "",
        release_date: "",
        rating: "",
        poster_path: "",
        backdrop_path: "",
        trailer: "",
        from: 2
    },
    loading: false,
    error: null
}
const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.movie = action.payload;
        }
    },
    extraReducers: {
        [getMovies.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [getMovies.fulfilled]: (state, action) => {
            state.movies = action.payload;
            state.loading = false;
        }
        ,
        [getMovies.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        }
        ,
        [getMovie.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [getMovie.fulfilled]: (state, action) => {
            state.movie = action.payload;
            state.loading = false;
        }
        ,
        [getMovie.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },

        // addMovie reducer 
        [addMovie.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [addMovie.fulfilled]: (state, action) => {
            state.movies.push(action.payload);
            state.loading = false;
        }
        ,
        [addMovie.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        }


    }
});
export const { setMovie } = moviesSlice.actions;
export default moviesSlice.reducer;