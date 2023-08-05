// @flow
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

import type { GeneralSlice } from '../flowTypes';

type Slice = GeneralSlice;
type Action = { payload: string };

const initialState: Slice = {
    isAlbumView: true,
    currentAlbum: null,
};

export const sliceGeneral = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toggleIsAlbumView(state: Slice) {
            state.isAlbumView = !state.isAlbumView;
        },

        setCurrentAlbum(state: Slice, action: Action) {
            state.currentAlbum = action.payload;
        },
    },
});

// Actions
export const { toggleIsAlbumView, setCurrentAlbum } = sliceGeneral.actions;
