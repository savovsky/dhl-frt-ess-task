// @flow

import React from 'react';

import BtnLike from './BtnLike';

import type { Photo } from '../../flowTypes/photosTypes';

type Props = {
    photo: Photo,
};

function Card({ photo }: Props) {
    return (
        <>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
            <BtnLike photo={photo} />
        </>
    );
}

export default Card;
