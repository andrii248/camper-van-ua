import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.items;
export const selectError = state => state.campers.error;
export const selectIsLoading = state => state.campers.isLoading;
export const selectFavorites = state => state.favorites.favoriteItems;
export const selectPage = state => state.campers.page;
export const selectCamperByID = state => state.campers.camperById;

export const selectLoadMore = createSelector(
  state => state.campers.items.length,
  state => state.campers.page,
  (campersLength, page) => page <= campersLength / 4
);
