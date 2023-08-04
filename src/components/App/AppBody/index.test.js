import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';

import { store } from '../../../store';

import AppBody from '.';

afterEach(cleanup);

describe('<AppBody />', () => {
    const testMsg = 'Should render Component';
    const componentId = 'app-body';

    test(testMsg, () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <AppBody />
            </Provider>,
        );

        expect(getByTestId(componentId)).toBeTruthy();
    });
});
