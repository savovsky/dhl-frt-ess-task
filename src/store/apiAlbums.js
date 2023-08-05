import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setCurrentAlbum } from './sliceGeneral';

import handleAlbumsData from '../utils/handleAlbumsData';
import handleAlbumPhotosData from '../utils/handleAlbumPhotosData';
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

                async onQueryStarted(args, { dispatch, queryFulfilled }) {
                    try {
                        const { data } = await queryFulfilled;

                        // eslint-disable-next-line no-console
                        console.log('onQueryStarted', data);

                        dispatch(setCurrentAlbum(data.albums[0].id));
                    } catch (error) {
                        // eslint-disable-next-line no-console
                        console.error(
                            'fetchAlbums-onQueryStarted-error',
                            error,
                        );
                    }
                },
            }),

            fetchAlbumPhotos: builder.query({
                query: albumId => {
                    return {
                        method: 'GET',
                        url: `${albumId}/photos`,
                    };
                },

                transformResponse: response => {
                    const photos = handleAlbumPhotosData(response);

                    return { photos };
                },

                transformErrorResponse: response => httpErrorMessage(response),
            }),
        };
    },
});

// Auto-generated React hooks
export const { useFetchAlbumsQuery, useFetchAlbumPhotosQuery } = apiAlbums;
