// @flow

import React from 'react';

import Card from '../../../../Card';

import type { Photo } from '../../../../../flowTypes/photosTypes';

type Props = {
    photos: Array<Photo>,
};

function Cards({ photos }: Props) {
    return (
        <div className="cards" data-testid="cards">
            {photos.map((photo: Photo) => (
                <article key={photo.id} className="card" data-testid="card">
                    <Card photo={photo} />
                </article>
            ))}
        </div>
    );
}

export default Cards;
