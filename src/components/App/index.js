// @flow

import React from 'react';

import AppHeader from './AppHeader';
import AppBody from './AppBody';

function App() {
    return (
        <main className="app-container" data-testid="app-container">
            <AppHeader />
            <AppBody />
        </main>
    );
}

export default App;
