import React from 'react';
import { waitFor } from '@testing-library/react';
import { rest } from 'msw';

import {
    server,
    pathApiAlbums,
    // pathApiAlbumPhotos,
    apiMocking,
} from '../../../test/serverMock';

import testUtils from '../../../test/utils';
import AppBody from '.';

apiMocking();

const { renderWithProvider } = testUtils;

describe('<AppBody />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'app-body';

    // conditional content
    const loaderSpinId = 'fel-loader-spin';
    const appTools = 'app-tools';
    const photosConatiner = 'photos-conatiner';
    const httpErrorId = 'fel-http-error';

    xtest(`${testMsg} when fetching data and after successful fetchAlbums and fetchAlbumPhotos responses`, async () => {
        const { getByTestId, queryByTestId } = renderWithProvider(<AppBody />, {
            preloadedState: {
                general: {
                    isAlbumView: true,
                    currentAlbum: '1',
                },
            },
        });

        // when fetching data
        expect(getByTestId(componentId)).toBeTruthy();
        expect(getByTestId(loaderSpinId)).toBeTruthy();
        expect(queryByTestId(appTools)).toBeNull();
        expect(queryByTestId(photosConatiner)).toBeNull();
        expect(queryByTestId(httpErrorId)).toBeNull();

        // after a successful API response
        await waitFor(() => {
            expect(getByTestId(componentId)).toBeTruthy();
            expect(queryByTestId(loaderSpinId)).toBeNull();
            expect(getByTestId(appTools)).toBeTruthy();
            expect(getByTestId(photosConatiner)).toBeTruthy();
            expect(queryByTestId(httpErrorId)).toBeNull();
        });
    });

    test(`${testMsg} when the fetchAlbums request is rejected (HTTP error)`, async () => {
        const responseError = 'Some fetchAlbums error';

        server.use(
            rest.get(pathApiAlbums, (req, res, ctx) => {
                return res(
                    ctx.status(404),
                    ctx.json({ message: responseError }),
                );
            }),
        );

        const { getByTestId, queryByTestId, getByText } = renderWithProvider(
            <AppBody />,
        );

        // after the fetchAlbums API request is rejected
        await waitFor(() => {
            expect(getByTestId(componentId)).toBeTruthy();
            expect(queryByTestId(loaderSpinId)).toBeNull();
            expect(queryByTestId(appTools)).toBeNull();
            expect(queryByTestId(photosConatiner)).toBeNull();
            expect(getByTestId(httpErrorId)).toBeTruthy();
            expect(getByText(responseError)).toBeInTheDocument();
        });
    });
});
