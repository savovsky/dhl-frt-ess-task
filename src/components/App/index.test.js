import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';

import { store } from '../../store';

import App from '.';

afterEach(cleanup);

describe('<App />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'app-container';

    test(testMsg, () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <App />
            </Provider>,
        );

        expect(getByTestId(componentId)).toBeTruthy();
    });
});
