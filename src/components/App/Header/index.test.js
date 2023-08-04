import React from 'react';
import { render, cleanup } from '@testing-library/react';

import str from '../../../utils/stringsUtils';
import Header from '.';

afterEach(cleanup);

describe('<Header />', () => {
    const testMsg = 'Should render Component';
    const componentId = 'app-header';

    test(`${testMsg} correctly`, () => {
        const { getByTestId, getByText } = render(<Header />);

        expect(getByTestId(componentId)).toBeTruthy();
        expect(getByText(str.appTitle)).toBeInTheDocument();
        expect(getByText(str.appSubTitle)).toBeInTheDocument();
    });
});
