import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import sessionStorage from 'redux-persist/lib/storage/session';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import { apiAlbums } from './apiAlbums';

import { sliceFavorites } from './sliceFavorites';
import { sliceGeneral } from './sliceGeneral';

const persistConfig = key => {
    return {
        key,
        storage: sessionStorage,
        blacklist: [apiAlbums.reducerPath],
    };
};

const reducer = {
    [apiAlbums.reducerPath]: apiAlbums.reducer,
    [sliceGeneral.name]: persistReducer(
        persistConfig([sliceGeneral.name]),
        sliceGeneral.reducer,
    ),
    [sliceFavorites.name]: persistReducer(
        persistConfig([sliceFavorites.name]),
        sliceFavorites.reducer,
    ),
};

const middleware = getDefaultMiddleware => {
    return getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(apiAlbums.middleware);
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
export const persistor = persistStore(store);

setupListeners(store.dispatch);
