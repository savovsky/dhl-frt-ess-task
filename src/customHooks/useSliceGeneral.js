// @flow

import { useSelector } from 'react-redux';

import type { State } from '../flowTypes';

/**
 * Provides data from the global state store for `slice General`
 * @returns `{ isAlbumView }`
 */
function useSliceGeneral() {
    const general = useSelector((state: State) => state.general);

    const { isAlbumView } = general;

    return {
        isAlbumView,
    };
}

export default useSliceGeneral;
