// @flow
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

import type { FavoritesSlice } from '../flowTypes';
import type { Photo } from '../flowTypes/photosTypes';

type Slice = FavoritesSlice;
type Action1 = { payload: Photo };
type Action2 = { payload: string };

const initialState: Slice = {
    favoritePhotos: [],
};

export const sliceFavorites = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addPhotoToFavorites(state: Slice, action: Action1) {
            state.favoritePhotos.push(action.payload);
        },

        removePhotoFromFavorites(state: Slice, action: Action2) {
            const index = state.favoritePhotos.findIndex(
                (item: Photo) => item.id === action.payload,
            );

            state.favoritePhotos.splice(index, 1);
        },

        clearAllFavoritePhotos(state: Slice) {
            state.favoritePhotos = [];
        },
    },
});

// Actions
export const {
    addPhotoToFavorites,
    removePhotoFromFavorites,
    clearAllFavoritePhotos,
} = sliceFavorites.actions;
