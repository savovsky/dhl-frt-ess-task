// @flow

import React from 'react';
import { useDispatch } from 'react-redux';

import { addPhotoToFavorites } from '../../../store/sliceFavorites';

import useSliceFavorites from '../../../customHooks/useSliceFavorites';
import ButtonIcon from '../../ButtonIcon';

type Props = {
    photoId: string,
};

function BtnLike({ photoId }: Props) {
    const dispatch = useDispatch();
    const { favoritePhotos } = useSliceFavorites();

    const handleOnClick = () => {
        dispatch(addPhotoToFavorites(photoId));
    };

    const isPhotoLiked = !!favoritePhotos.find(
        (item: string) => item === photoId,
    );

    const conditionalIcon = () => {
        return isPhotoLiked ? 'heart' : 'images';
    };

    return (
        <ButtonIcon
            handleOnClick={handleOnClick}
            icon={conditionalIcon()}
            arialabel="Like Button"
            dataTestid="btn-like"
        />
    );
}

export default BtnLike;
