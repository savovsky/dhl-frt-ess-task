// @flow

import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleIsAlbumView } from '../../../store/sliceGeneral';
import {
    addPhotoToFavorites,
    removePhotoFromFavorites,
} from '../../../store/sliceFavorites';

import useSliceFavorites from '../../../customHooks/useSliceFavorites';
import ButtonIcon from '../../ButtonIcon';

import type { Photo } from '../../../flowTypes/photosTypes';

type Props = {
    photo: Photo,
};

function BtnLike({ photo }: Props) {
    const dispatch = useDispatch();
    const { favoritePhotos } = useSliceFavorites();

    const isPhotoLiked = !!favoritePhotos.find(
        (item: Photo) => item.id === photo.id,
    );

    const handleOnClick = () => {
        if (isPhotoLiked) {
            if (favoritePhotos.length === 1) {
                dispatch(toggleIsAlbumView());
            }

            dispatch(removePhotoFromFavorites(photo.id));
        } else {
            dispatch(addPhotoToFavorites(photo));
        }
    };

    return (
        <ButtonIcon
            handleOnClick={handleOnClick}
            icon={isPhotoLiked ? 'heart-filled' : 'heart'}
            arialabel="Like Button"
            dataTestid="btn-like"
            size="2x"
        />
    );
}

export default BtnLike;
