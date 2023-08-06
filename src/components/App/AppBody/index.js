// @flow

import React from 'react';

import useSliceGeneral from '../../../customHooks/useSliceGeneral';
import LoaderSpin from '../../LoaderSpin';
import HttpError from '../../HttpError';
import AppTools from './AppTools';
import PhotosContainer from './PhotosContainer';

import { useFetchAlbumsQuery } from '../../../store/apiAlbums';

function AppBody() {
    const { currentAlbum } = useSliceGeneral();
    const { isLoading, isError, error, isSuccess, data } = useFetchAlbumsQuery(
        currentAlbum,
    );

    const conditionalContent = () => {
        if (isLoading) {
            return (
                <div className="loading-wrapper">
                    <LoaderSpin />
                </div>
            );
        } else if (isError) {
            return <HttpError error={error} margin="50px 0" />;
        } else if (isSuccess) {
            return (
                <>
                    <AppTools optionItems={data.albums} />
                    <PhotosContainer />
                </>
            );
        }

        return <AppTools optionItems={data.albums} />;
    };

    return (
        <div className="app-body" data-testid="app-body">
            {conditionalContent()}
        </div>
    );
}

export default AppBody;
