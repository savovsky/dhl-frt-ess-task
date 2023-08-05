// @flow

import { createSlice } from '@reduxjs/toolkit';

import type { FavoritesSlice } from '../flowTypes';

type Slice = FavoritesSlice;
type Action = { payload: string };

const initialState: Slice = {
    favoritePhotos: [],
};

export const sliceFavorites = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addPhotoToFavorites(state: Slice, action: Action) {
            state.favoritePhotos.push(action.payload);
        },

        removePhotoToFavorites(state: Slice, action: Action) {
            const index = state.favoritePhotos.findIndex(
                (item: string) => item === action.payload,
            );

            state.favoritePhotos.splice(index, 1);
        },
    },
});

// Actions
export const { addPhotoToFavorites } = sliceFavorites.actions;
