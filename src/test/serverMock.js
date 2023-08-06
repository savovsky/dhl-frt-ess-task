import { cleanup } from '@testing-library/react';

import { setupServer } from 'msw/node';

import { pathApiAlbums, pathApiAlbumPhotos, handlers } from './serverHandlers';

import { setupStore } from '../store';
import { apiAlbums } from '../store/apiAlbums';

const server = setupServer(...handlers);

const store = setupStore({});

const apiMocking = () => {
    // Establish API mocking before all tests.
    beforeAll(() => server.listen());

    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    afterEach(() => {
        server.resetHandlers();

        // This is the solution to clear RTK Query cache after each test
        store.dispatch(apiAlbums.util.resetApiState());

        cleanup();
    });

    // Clean up after the tests are finished
    afterAll(() => server.close());
};

export { server, pathApiAlbums, pathApiAlbumPhotos, apiMocking };
