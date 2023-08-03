import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';

import { store } from '../../store';

import App from '.';

afterEach(cleanup);

describe('<App />', () => {
    test('Should rnder Component correctly', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <App />
            </Provider>,
        );

        expect(getByTestId('app-container')).toBeTruthy();
    });
});
