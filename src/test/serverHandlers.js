import { rest } from 'msw';

import {
    protocol,
    hostname,
    pathnameApiAlbums,
} from '../store/storeCommonUtils';

import albumsMock from './payloadMocks/albumsMock';
import albumPhotosMock from './payloadMocks/albumPhotosMock';

const pathApiAlbums = `${protocol}${hostname}${pathnameApiAlbums}`;
const pathApiAlbumPhotos = `${protocol}${hostname}${pathnameApiAlbums}/1/photos`;

const handlers = [
    // Handles 'fetchAlbums'
    rest.get(pathApiAlbums, (req, res, ctx) => {
        return rest(ctx.status(200), ctx.json(albumsMock));
    }),

    // Handles 'fetchAlbumPhotos'
    rest.get(pathApiAlbumPhotos, (req, res, ctx) => {
        return rest(ctx.status(200), ctx.json(albumPhotosMock));
    }),
];

export { pathApiAlbums, pathApiAlbumPhotos, handlers };
