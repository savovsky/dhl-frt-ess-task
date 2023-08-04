// @flow

import React from 'react';

import SelectAlbum from './SelectAlbum';
import BtnToggle from './BtnToggle';

import type { Option } from '../../../../flowTypes';

type Props = {
    optionItems: Array<Option>,
};

function AppTools({ optionItems }: Props) {
    return (
        <section className="app-tools" data-testid="app-tools">
            <SelectAlbum optionItems={optionItems} />
            <BtnToggle />
        </section>
    );
}

export default AppTools;
