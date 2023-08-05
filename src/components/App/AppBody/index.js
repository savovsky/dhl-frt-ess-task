// @flow

import React from 'react';

import LoaderSpin from '../../LoaderSpin';
import HttpError from '../../HttpError';
import AppTools from './AppTools';
import PhotosContainer from './PhotosContainer';

import { useFetchAlbumsQuery } from '../../../store/apiAlbums';

function AppBody() {
    const {
        isLoading,
        isError,
        error,
        isSuccess,
        data,
    } = useFetchAlbumsQuery();

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
            return (
                <>
                    <AppTools optionItems={data.albums} />
                    <PhotosContainer />
                </>
            );
        }

        return null;
    };

    return (
        <div className="app-body" data-testid="app-body">
            {conditionalContent()}
        </div>
    );
}

export default AppBody;
