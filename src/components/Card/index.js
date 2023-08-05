// @flow

import React from 'react';

// import useSliceGeneral from '../../../../customHooks/useSliceGeneral';
// import SelectAlbum from './SelectAlbum';
import BtnLike from './BtnLike';

import type { Photo } from '../../flowTypes/photosTypes';

type Props = {
    photo: Photo,
};

function Card({ photo }: Props) {
    // const { isAlbumView } = useSliceGeneral();

    return (
        <article className="card" data-testid="card">
            <div>{photo.title}</div>
            <BtnLike photoId={photo.id} />
        </article>
    );
}

export default Card;
