// @flow

import React from 'react';

import LoaderSpin from '../LoaderSpin';
import ComboBox from '../ComboBox';

import { useFetchAlbumsQuery } from '../../store/apiAlbums';

function App() {
    useFetchAlbumsQuery();

    const handleComboOnOptionSelect = () => {};

    const optionItems = [
        { id: 'USA', value: 'Unated States of America' },
        { id: 'CDN', value: 'Canada' },
        { id: 'BUL', value: 'Bulgaria' },
    ];

    return (
        <main className="app-container" data-testid="app-container">
            <h1>DHL FRT ESS - React JS Dev - Interview Task</h1>
            <LoaderSpin />
            <ComboBox
                inputId="albums"
                label="albums"
                currentOptionId=""
                optionItems={optionItems}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
            />
        </main>
    );
}

export default App;
