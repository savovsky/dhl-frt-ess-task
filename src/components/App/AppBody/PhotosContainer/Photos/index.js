// @flow

import React from 'react';

import Card from '../../../../Card';

import type { Photo } from '../../../../../flowTypes/photosTypes';

type Props = {
    photos: Array<Photo>,
};

function Photos({ photos }: Props) {
    return (
        <>
            {photos.map((photo: Photo) => (
                <article key={photo.id} className="card" data-testid="card">
                    <Card photo={photo} />
                </article>
            ))}
        </>
    );
}

export default Photos;
