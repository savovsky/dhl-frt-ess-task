// @flow

import React from 'react';

import str from '../../../utils/stringsUtils';

function AppHeader() {
    return (
        <header className="app-header" data-testid="app-header">
            <h1>{str.appTitle}</h1>
            <h2>{str.appSubTitle}</h2>
        </header>
    );
}

export default AppHeader;
