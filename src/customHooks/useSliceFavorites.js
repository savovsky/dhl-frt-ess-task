// @flow

import { useSelector } from 'react-redux';

import type { State } from '../flowTypes';

/**
 * Provides data from the global state store for `slice Favorites`
 * @returns `{ favoritePhotos, hasFavoritePhotos }`
 */
function useSliceFavorites() {
    const favorites = useSelector((state: State) => state.favorites);

    const { favoritePhotos } = favorites;

    return {
        favoritePhotos,
        hasFavoritePhotos: !!favoritePhotos.length,
    };
}

export default useSliceFavorites;
