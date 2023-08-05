// @flow

import React from 'react';

import useSliceGeneral from '../../../../customHooks/useSliceGeneral';
import LoaderSpin from '../../../LoaderSpin';
import HttpError from '../../../HttpError';
import Photos from './Photos';

import { useFetchAlbumPhotosQuery } from '../../../../store/apiAlbums';

function PhotosConatiner() {
    const { currentAlbum } = useSliceGeneral();

    const {
        isFetching,
        isError,
        error,
        isSuccess,
        data,
    } = useFetchAlbumPhotosQuery(currentAlbum);

    const conditionalContent = () => {
        if (isFetching) {
            return (
                <div className="loading-wrapper">
                    <LoaderSpin />
                </div>
            );
        } else if (isError) {
            return <HttpError error={error} margin="50px" />;
        } else if (isSuccess) {
            return <Photos photos={data.photos} />;
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
