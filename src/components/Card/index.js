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
        <>
            <p>{photo.title}</p>
            <BtnLike photoId={photo.id} />
        </>
    );
}

export default Card;
