/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAlbumView: true,
    currentAlbum: '1',
};

export const sliceGeneral = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toggleIsAlbumView(state) {
            state.isAlbumView = !state.isAlbumView;
        },

        setCurrentAlbum(state, action) {
            state.currentAlbum = action.payload;
        },
    },
});

// Actions
export const { toggleIsAlbumView, setCurrentAlbum } = sliceGeneral.actions;
