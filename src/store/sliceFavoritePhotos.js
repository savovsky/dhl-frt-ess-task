import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoritePhotos: [],
};

export const sliceFavoritePhotos = createSlice({
    name: 'favoritePhotos',
    initialState,
    reducers: {
        addPhotoToFavorites(state, action) {
            state.favoritePhotos.push(action.payload);
        },
    },
});

// Actions
export const { addPhotoToFavorites } = sliceFavoritePhotos.actions;
