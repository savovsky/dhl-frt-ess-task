import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { setupStore } from '../store';

/**
 * https://redux.js.org/usage/writing-tests
 */
function renderWithProvider(
    ui,
    {
        preloadedState = {},
        // Automaticaly creates a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
    } = {},
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default { renderWithProvider };
