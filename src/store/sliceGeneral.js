/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAlbumsView: true,
};

export const sliceGeneral = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toggleIsAlbumsView(state) {
            state.isAlbumsView = !state.isAlbumsView;
        },
    },
});

// Actions
export const { toggleIsAlbumsView } = sliceGeneral.actions;
