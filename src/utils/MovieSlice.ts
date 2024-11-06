import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movie',
    initialState:{
        nowPlaying: null,
        trailerVideo : null,
        populerMovie : null,
        horrorMovie : null,
        trendingMovie : null,
        upComingMovie : null,
        topRatedMovie : null,
    },
    reducers : {
        addmovie :(state,action)=>{
        state.nowPlaying = action.payload;
        },
        addTrailer :(state,action)=>{
        state.trailerVideo = action.payload;
        },
        addPopuler: (state,action)=>{
            state.populerMovie = action.payload
        },
        addTrending: (state,action)=>{
            state.trendingMovie = action.payload
        },
        addTopRated: (state,action)=>{
            state.topRatedMovie = action.payload
        },
        addUpcoming: (state,action)=>{
            state.upComingMovie = action.payload
        },
        addHorror: (state,action)=>{
            state.horrorMovie = action.payload;
        }
    }
})
export const {
    addmovie,
    addTrailer,
    addHorror, 
    addPopuler,
    addTopRated,
    addTrending,
    addUpcoming
    } = movieSlice.actions
export default movieSlice.reducer;