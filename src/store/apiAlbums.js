import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
    timeout,
    protocol,
    hostname,
    pathnameApiAlbums,
    prepareHeaders,
    keepUnusedDataFor,
} from './storeCommonUtils';

export const apiAlbums = createApi({
    reducerPath: 'apiAlbums',
    baseQuery: fetchBaseQuery({
        baseUrl: `${protocol}${hostname}${pathnameApiAlbums}`,
        timeout,
        prepareHeaders,
    }),
    keepUnusedDataFor,

    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                query: () => {
                    return {
                        method: 'GET',
                        url: '',
                    };
                },

                transformResponse: response => {
                    const albums = response;

                    return { albums };
                },

                transformErrorResponse: response => {
                    return response;
                },
            }),
        };
    },
});

// Auto-generated React hooks
export const { useFetchAlbumsQuery } = apiAlbums;
