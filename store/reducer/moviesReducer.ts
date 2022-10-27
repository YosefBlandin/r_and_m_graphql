import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  movies: any;
  featuredMovie: any;
  favoriteCharacters: any;
}

const initialState: CounterState = {
  movies: [],
  featuredMovie: {},
  favoriteCharacters: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    setFeaturedMovie: (state, action) => {
      state.featuredMovie = action.payload;
    },
    addFavoriteCharacter: (state, action) => {
      state.favoriteCharacters = [...state.favoriteCharacters, action.payload];
    },
    removeFavoriteCharacter: (state, action) => {
      state.favoriteCharacters = state.favoriteCharacters.filter(
        (character: any) => character.name !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addMovies,
  setFeaturedMovie,
  addFavoriteCharacter,
  removeFavoriteCharacter,
} = moviesSlice.actions;

export default moviesSlice.reducer;
