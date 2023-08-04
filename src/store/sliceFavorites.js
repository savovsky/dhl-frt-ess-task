import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoritePhotos: [],
};

export const sliceFavorites = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addPhotoToFavorites(state, action) {
            state.favoritePhotos.push(action.payload);
        },
    },
});

// Actions
export const { addPhotoToFavorites } = sliceFavorites.actions;