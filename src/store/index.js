import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { apiAlbums } from './apiAlbums';

import { sliceFavorites } from './sliceFavorites';
import { sliceGeneral } from './sliceGeneral';

const reducer = {
    [apiAlbums.reducerPath]: apiAlbums.reducer,
    [sliceGeneral.name]: sliceGeneral.reducer,
    [sliceFavorites.name]: sliceFavorites.reducer,
};

const middleware = getDefaultMiddleware => {
    return getDefaultMiddleware().concat(apiAlbums.middleware);
};

/**
 * For test purposes
 * https://redux.js.org/usage/writing-tests
 *
 * Returns the initial app store state, mutated with the provided 'preloadedState'.
 * @param {Object} preloadedState
 * @returns `object`
 */
export const setupStore = preloadedState => {
    return configureStore({
        // rootReducer
        reducer: combineReducers({
            ...reducer,
        }),
        middleware,
        preloadedState,
    });
};

export const store = configureStore({ reducer, middleware });

setupListeners(store.dispatch);
