import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  characters: any[];
  searchValue: string;
  filteredCharacters: any[];
  featuredMovie: any;
  favoriteCharacters: any;
}

const initialState: CounterState = {
  characters: [],
  searchValue: "",
  filteredCharacters: [],
  featuredMovie: {},
  favoriteCharacters: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacters: (state, action) => {
      state.characters = action.payload;
      state.filteredCharacters = action.payload;
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
    searchCharacter(state, action) {
      state.searchValue = action.payload;
      if (action.payload.length > 0) {
        state.filteredCharacters = state.characters.filter((character) =>
          character.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else {
        state.filteredCharacters = state.characters;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addCharacters,
  setFeaturedMovie,
  addFavoriteCharacter,
  removeFavoriteCharacter,
  searchCharacter,
} = charactersSlice.actions;

export default charactersSlice.reducer;
