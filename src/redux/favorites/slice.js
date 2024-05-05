import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,

  reducers: {
    addToFavoriteList: (state, { payload }) => {
      return {
        ...state,
        favoriteItems: [
          ...state.favoriteItems,
          { ...payload, isFavorite: true },
        ],
      };
    },

    removeFromFavoriteList: (state, { payload }) => {
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(({ _id }) => _id !== payload),
      };
    },
  },
});

export const { addToFavoriteList, removeFromFavoriteList } =
  favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
