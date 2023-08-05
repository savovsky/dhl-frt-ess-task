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
            <div className="image-container">
                <img src={photo.thumbnailUrl} alt={photo.title} />
            </div>
            <p>{photo.title}</p>
            <div className="card-footer">
                <div />
                <BtnLike photo={photo} />
            </div>
        </>
    );
}

export default Card;
