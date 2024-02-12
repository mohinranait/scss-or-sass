import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[],
    movie:{},
    isLoading:false,
    isError : null,
}

// Get all Movies 
export const fetchMovie = createAsyncThunk("movie/fetchMovie", async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
    const movie = await res.json();
    return movie;
})


// Get single movie
export const singleMovie = createAsyncThunk("movie/singleMovie", async(id) => {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const movie = await res.json();
    return movie;
})

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchMovie.fulfilled, (state,action) => {
            state.isLoading = true;
            state.movies = action.payload;
        });
        builder.addCase(fetchMovie.rejected, (state,action) => {
            state.isLoading = true;
            state.movies = [];
            state.isError = action.payload;
        });
        builder.addCase(singleMovie.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(singleMovie.fulfilled, (state,action) => {
            state.isLoading = true;
            state.movie = action.payload;
        });
        builder.addCase(singleMovie.rejected, (state,action) => {
            state.isLoading = true;
            state.movie = [];
            state.isError = action.payload;
        });
    }
})


export default movieSlice.reducer;