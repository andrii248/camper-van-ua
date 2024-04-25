import { createSlice } from '@reduxjs/toolkit';
import { getCamperById, getCampers } from './operations';

const initialState = {
  items: [],
  favoriteItems: localStorage.getItem('favoriteItemsList')
    ? JSON.parse(localStorage.getItem('favoriteItemsList'))
    : [],
  isLoading: false,
  error: null,
  page: 1,
  camperById: null,
  loadMoreAvailable: true,
};

const handleFulfilled = state => {
  state.error = null;
  state.isLoading = false;
};

const loadingActive = state => {
  state.isLoading = true;
};

const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,

  reducers: {
    addToFavoriteList: (state, action) => {
      const favoriteCampIndex = state.favoriteItems.findIndex(
        item => item?.id === action.payload?.id
      );

      if (favoriteCampIndex >= 0) {
        alert('The item is already added to your favorites');
      } else {
        const favorItems = { ...action.payload };
        state.favoriteItems.push(favorItems);
        localStorage.setItem(
          'favoriteItemsList',
          JSON.stringify(state.favoriteItems)
        );
      }
    },

    removeFromFavoriteList: (state, action) => {
      const updateFavoriteList = state.favoriteItems?.filter(
        item => item?.id !== action.payload?.id
      );

      state.favoriteItems = updateFavoriteList;

      localStorage.setItem(
        'favoriteItemsList',
        JSON.stringify(state.favoriteItems)
      );
    },

    setPage: (state, action) => {
      state.page = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getCampers.pending, loadingActive)
      .addCase(getCampers.rejected, handleError)
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.items = [...state.items, ...payload];
      })
      .addCase(getCamperById.pending, loadingActive)
      .addCase(getCamperById.rejected, handleError)
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        handleFulfilled(state);
        state.camperById = payload;
      });
  },
});

export const { addToFavoriteList, removeFromFavoriteList, setPage } =
  campersSlice.actions;

export const camperReducer = campersSlice.reducer;
