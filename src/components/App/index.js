// @flow

import React from 'react';

import { useFetchAlbumsQuery } from '../../store/apiAlbums';

function App() {
    useFetchAlbumsQuery();

    return (
        <main className="app-container" data-testid="app-container">
            <h1>DHL FRT ESS - React JS Dev - Interview Task</h1>
        </main>
    );
}

export default App;
