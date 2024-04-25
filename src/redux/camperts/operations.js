import { createAsyncThunk } from '@reduxjs/toolkit';
import { campersAPI } from 'services/capmersAPI';

export const getCampers = createAsyncThunk(
  'campers/getCampers',
  async (page = 1, thunkAPI) => {
    try {
      const response = await campersAPI(`?page=${page}&limit=4`); //   {
      //   params: {
      //     page,
      //   },
      // });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  'campers/getCamperById',
  async (id, thunkAPI) => {
    try {
      const response = await campersAPI.get(`/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
