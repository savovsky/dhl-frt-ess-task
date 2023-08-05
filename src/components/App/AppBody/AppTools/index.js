// @flow

import React from 'react';

import useSliceGeneral from '../../../../customHooks/useSliceGeneral';
import SelectAlbum from './SelectAlbum';
import BtnToggle from './BtnToggle';

import type { Option } from '../../../../flowTypes';

type Props = {
    optionItems: Array<Option>,
};

function AppTools({ optionItems }: Props) {
    const { isAlbumView, currentAlbum } = useSliceGeneral();

    const conditionalContent = () => {
        if (isAlbumView) {
            return (
                <SelectAlbum
                    optionItems={optionItems}
                    currentAlbum={currentAlbum}
                />
            );
        } else {
            return <div />;
        }
    };

    return (
        <section className="app-tools" data-testid="app-tools">
            {conditionalContent()}
            <BtnToggle isAlbumView={isAlbumView} />
        </section>
    );
}

export default AppTools;
