import React from 'react';
import { render, cleanup } from '@testing-library/react';

import str from '../../../utils/stringsUtils';
import AppHeader from '.';

afterEach(cleanup);

describe('<AppHeader />', () => {
    const testMsg = 'Should render Component';
    const componentId = 'app-header';

    test(`${testMsg} correctly`, () => {
        const { getByTestId, getByText } = render(<AppHeader />);

        expect(getByTestId(componentId)).toBeTruthy();
        expect(getByText(str.appTitle)).toBeInTheDocument();
        expect(getByText(str.appSubTitle)).toBeInTheDocument();
    });
});
