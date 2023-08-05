// @flow
/* istanbul ignore file */

import type { Photo } from './photosTypes';

export type Option = {
    id: string,
    value: string,
};

export type GeneralSlice = {
    isAlbumView: boolean,
    currentAlbum: string | null,
};

export type FavoritesSlice = {
    favoritePhotos: Array<Photo>,
};

// IMPORTANT - The keys correspond to the slices' names!
export type State = {
    general: GeneralSlice,
    favorites: FavoritesSlice,
};
