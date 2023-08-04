// @flow

import React from 'react';

import SelectAlbum from './SelectAlbum';

import type { Option } from '../../../flowTypes';

type Props = {
    optionItems: Array<Option>,
};

function AppTools({ optionItems }: Props) {
    return (
        <section className="app-tools" data-testid="app-tools">
            <SelectAlbum optionItems={optionItems} />
        </section>
    );
}

export default AppTools;
