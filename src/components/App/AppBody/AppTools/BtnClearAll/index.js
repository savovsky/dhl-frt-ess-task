// @flow

import React from 'react';
import { useDispatch } from 'react-redux';

import { clearAllFavoritePhotos } from '../../../../../store/sliceFavorites';
import { toggleIsAlbumView } from '../../../../../store/sliceGeneral';

import str from '../../../../../utils/stringsUtils';
import commonUtils from '../../../../../utils/commonUtils';
import Tooltip from '../../../../Tooltip';
import ButtonIcon from '../../../../ButtonIcon';

const { scrollToTop } = commonUtils;

function BtnClearAll() {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(clearAllFavoritePhotos());
        dispatch(toggleIsAlbumView());
        scrollToTop();
    };

    return (
        <Tooltip
            content={str.btnClearAllFaforites}
            placement="top"
            width="150px"
        >
            <ButtonIcon
                handleOnClick={handleOnClick}
                icon="trash"
                label={str.btnClearAll}
                arialabel="Clear All Favorite Photos Button"
                dataTestid="clear-all-btn"
            />
        </Tooltip>
    );
}

export default BtnClearAll;
