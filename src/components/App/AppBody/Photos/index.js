// @flow

import React from 'react';

import useSliceGeneral from '../../../../customHooks/useSliceGeneral';
import LoaderSpin from '../../../LoaderSpin';
import HttpError from '../../../HttpError';
// import PhotosContainer from './PhotosContainer';

import { useFetchAlbumPhotosQuery } from '../../../../store/apiAlbums';

function Photos() {
    const { currentAlbum } = useSliceGeneral();

    const {
        isLoading,
        isError,
        error,
        isSuccess,
        // data,
    } = useFetchAlbumPhotosQuery(currentAlbum);

    const conditionalContent = () => {
        if (isLoading) {
            return (
                <div className="loading-wrapper">
                    <LoaderSpin />
                </div>
            );
        } else if (isError) {
            return <HttpError error={error} margin="50px" />;
        } else if (isSuccess) {
            return <div>Photos</div>;
        }

        return null;
    };

    return (
        <section className="photos" data-testid="photos">
            {conditionalContent()}
        </section>
    );
}

export default Photos;
