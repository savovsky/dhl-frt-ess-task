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

                        if (!args) {
                            dispatch(setCurrentAlbum(data.albums[0].id));
                        }
                    } catch (error) {
                        // eslint-disable-next-line no-console
                        console.error('fetchAlbums-error', error);
                    }
                },

                // providesTags: [invalidationTags.reason],
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

                // invalidatesTags: [invalidationTags.reason],
            }),

            previewPrice: builder.mutation({
                query: args => {
                    return {
                        method: 'POST',
                        url: '/price',
                        body: args.postBody,
                    };
                },

                transformResponse: response => {
                    return {
                        recipients: handleRecipientsPreviewData(response),
                        totals: handleOrderTotalsData(response),
                        general: handleGeneralData(response),
                        isDataValid: isPayloadValid(
                            model,
                            response,
                            'previewPrice',
                        ),
                    };
                },

                transformErrorResponse: response => httpErrorMessage(response),

                async onQueryStarted(args, { dispatch, queryFulfilled }) {
                    try {
                        const { data } = await queryFulfilled;

                        dispatch(updateRecipientsStore(data.recipients));
                        dispatch(setNewTotalsStore(data.totals));
                        dispatch(
                            setShippingMethods(data.general.shippingMethods),
                        );

                        dispatch(apiAddressVerify.util.resetApiState());

                        if (args.editRecipientContact) {
                            dispatch(setModalCase(keys.fetchPreviewPrice));
                        }
                    } catch (error) {
                        // eslint-disable-next-line no-console
                        console.error(
                            'previewPrice-onQueryStarted-error',
                            error,
                        );
                    }
                },

                // async onQueryStarted(args, { dispatch, queryFulfilled }) {
                //     await queryFulfilled;
                //     dispatch(
                //         apiProductTypes.util.invalidateTags([
                //             invalidationTags.productTypes,
                //         ]),
                //     );
                // },

                // invaldatesTags: (result, error, args) => {
                //     if (...) {
                //         return []; // Will not clear the cache
                //     }

                //     return [invalidationTags.reason]; 
                // }
            }),
        };
    },
});

// Auto-generated React hooks
export const {
    useFetchAlbumsQuery,
    useFetchAlbumPhotosQuery,
    usePreviewPriceMutation,
} = apiAlbums;

// const [
//     previewPrice,
//     {
//         isError: previewPriceIsError,
//         isSuccess: previewPriceIsSuccess,
//     },
// ] = usePreviewPriceMutation({ fixedCacheKey: cacheKeys.sharedPreviewPrice });

// const [
//     ,
//     {
//         isLoading: previewPriceIsLoading,
//         isError: previewPriceIsError,
//         error: previewPriceError,
//         reset: resetPreviewPriceMutation,
//     },
// ] = usePreviewPriceMutation({ fixedCacheKey: cacheKeys.sharedPreviewPrice });
