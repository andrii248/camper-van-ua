import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterCampers: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filterCampers } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
