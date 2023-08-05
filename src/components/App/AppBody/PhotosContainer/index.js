// @flow

import React from 'react';

import useSliceGeneral from '../../../../customHooks/useSliceGeneral';
import useSliceFavorites from '../../../../customHooks/useSliceFavorites';
import LoaderSpin from '../../../LoaderSpin';
import HttpError from '../../../HttpError';
import Cards from './Cards';

import { useFetchAlbumPhotosQuery } from '../../../../store/apiAlbums';

function PhotosConatiner() {
    const { currentAlbum, isAlbumView } = useSliceGeneral();
    const { favoritePhotos } = useSliceFavorites();

    const {
        isFetching,
        isError,
        error,
        isSuccess,
        data,
    } = useFetchAlbumPhotosQuery(currentAlbum, { skip: !currentAlbum });

    const photos = () => {
        if (isAlbumView) {
            return data.photos;
        }

        return favoritePhotos;
    };

    const conditionalContent = () => {
        if (isFetching) {
            return (
                <div className="loading-wrapper seconadry">
                    <LoaderSpin />
                </div>
            );
        } else if (isError) {
            return <HttpError error={error} margin="50px" />;
        } else if (isSuccess) {
            return <Cards photos={photos()} />;
        }

        return null;
    };

    return (
        <section className="photos-conatiner" data-testid="photos-conatiner">
            {conditionalContent()}
        </section>
    );
}

export default PhotosConatiner;
