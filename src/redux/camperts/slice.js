import { createSlice } from '@reduxjs/toolkit';
import { getCamperById, getCampers } from './operations';

const initialState = {
  items: [],
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

export const { setPage } = campersSlice.actions;

export const camperReducer = campersSlice.reducer;
