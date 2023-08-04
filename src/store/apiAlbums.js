import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import handleAlbumsData from '../utils/handleAlbumsData';
import commonUtils from '../utils/commonUtils';
import {
    timeout,
    protocol,
    hostname,
    pathnameApiAlbums,
    prepareHeaders,
    keepUnusedDataFor,
} from './storeCommonUtils';

const { httpErrorMessage } = commonUtils;

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
                    const albums = handleAlbumsData(response);

                    return { albums };
                },

                transformErrorResponse: response => httpErrorMessage(response),
            }),
        };
    },
});

// Auto-generated React hooks
export const { useFetchAlbumsQuery } = apiAlbums;
