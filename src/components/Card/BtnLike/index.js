// @flow

import React from 'react';
import { useDispatch } from 'react-redux';

import {
    addPhotoToFavorites,
    removePhotoFromFavorites,
} from '../../../store/sliceFavorites';

import useSliceFavorites from '../../../customHooks/useSliceFavorites';
import ButtonIcon from '../../ButtonIcon';

type Props = {
    photoId: string,
};

function BtnLike({ photoId }: Props) {
    const dispatch = useDispatch();
    const { favoritePhotos } = useSliceFavorites();

    const isPhotoLiked = !!favoritePhotos.find(
        (item: string) => item === photoId,
    );

    const handleOnClick = () => {
        if (isPhotoLiked) {
            dispatch(removePhotoFromFavorites(photoId));
        } else {
            dispatch(addPhotoToFavorites(photoId));
        }
    };

    return (
        <ButtonIcon
            handleOnClick={handleOnClick}
            icon={isPhotoLiked ? 'heart-filled' : 'heart'}
            arialabel="Like Button"
            dataTestid="btn-like"
        />
    );
}

export default BtnLike;
