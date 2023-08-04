// @flow

import React from 'react';

import LoaderSpin from '../../LoaderSpin';
import ComboBox from '../../ComboBox';

import { useFetchAlbumsQuery } from '../../../store/apiAlbums';

function AppBody() {
    useFetchAlbumsQuery();

    const handleComboOnOptionSelect = () => {};

    const optionItems = [
        { id: 'USA', value: 'Unated States of America' },
        { id: 'CDN', value: 'Canada' },
        { id: 'BUL', value: 'Bulgaria' },
    ];

    return (
        <div className="app-body" data-testid="app-body">
            <LoaderSpin />
            <ComboBox
                inputId="albums"
                label="albums"
                currentOptionId=""
                optionItems={optionItems}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
            />
        </div>
    );
}

export default AppBody;
