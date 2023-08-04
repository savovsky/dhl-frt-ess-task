// @flow

import { useSelector } from 'react-redux';

import type { State } from '../flowTypes';

function useSliceGeneral() {
    const general = useSelector((state: State) => state.general);

    const { isAlbumsView } = general;

    return {
        isAlbumsView,
    };
}

export default useSliceGeneral;
