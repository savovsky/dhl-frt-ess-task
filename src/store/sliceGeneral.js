/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAlbumView: true,
};

export const sliceGeneral = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toggleIsAlbumView(state) {
            state.isAlbumView = !state.isAlbumView;
        },
    },
});

// Actions
export const { toggleIsAlbumView } = sliceGeneral.actions;
