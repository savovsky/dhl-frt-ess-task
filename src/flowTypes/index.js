// @flow
/* istanbul ignore file */

export type Option = {
    id: string,
    value: string,
};

export type GeneralSlice = {
    isAlbumView: boolean,
};

export type FavoritesSlice = {
    favoritePhotos: Array<string>,
};

// IMPORTANT - The keys correspond to the slices' names!
export type State = {
    general: GeneralSlice,
    favorites: FavoritesSlice,
};
