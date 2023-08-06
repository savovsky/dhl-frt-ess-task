// @flow

import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleIsAlbumView } from '../../../../../store/sliceGeneral';

import useSliceFavorites from '../../../../../customHooks/useSliceFavorites';
import str from '../../../../../utils/stringsUtils';
import commonUtils from '../../../../../utils/commonUtils';
import Tooltip from '../../../../Tooltip';
import ButtonIcon from '../../../../ButtonIcon';

type Props = {
    isAlbumView: boolean,
};

const { scrollToTop } = commonUtils;

function BtnToggle({ isAlbumView }: Props) {
    const dispatch = useDispatch();
    const { hasFavoritePhotos } = useSliceFavorites();

    const handleOnClick = () => {
        dispatch(toggleIsAlbumView());
        scrollToTop();
    };

    const conditionalContent = () => {
        if (isAlbumView) {
            return (
                <Tooltip
                    content={str.btnFavorteDisabled}
                    placement="top"
                    width="180px"
                    isDisabled={hasFavoritePhotos}
                >
                    <ButtonIcon
                        handleOnClick={handleOnClick}
                        icon={hasFavoritePhotos ? 'heart-filled' : 'heart'}
                        label={str.btnFavorite}
                        arialabel="Display Favorite Photos Button"
                        isDisabled={!hasFavoritePhotos}
                        dataTestid="favorite-btn"
                    />
                </Tooltip>
            );
        } else {
            return (
                <ButtonIcon
                    handleOnClick={handleOnClick}
                    icon="images"
                    label={str.btnAlbums}
                    arialabel="Display Albums View Button"
                    dataTestid="albums-btn"
                    margin="0 0 0 20px"
                />
            );
        }
    };

    return <>{conditionalContent()}</>;
}

export default BtnToggle;
