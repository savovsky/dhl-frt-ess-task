// @flow

import React from 'react';

import useSliceGeneral from '../../../../customHooks/useSliceGeneral';
import str from '../../../../utils/stringsUtils';
import SelectAlbum from './SelectAlbum';
import BtnToggle from './BtnToggle';
import BtnClearAll from './BtnClearAll';
import TextInput from '../../../TextInput';

import type { Option } from '../../../../flowTypes';

type Props = {
    optionItems: Array<Option>,
};

function AppTools({ optionItems }: Props) {
    const { isAlbumView, currentAlbum } = useSliceGeneral();

    const conditionalContent = () => {
        if (isAlbumView) {
            return (
                <>
                    <SelectAlbum
                        optionItems={optionItems}
                        currentAlbum={currentAlbum}
                    />
                    <BtnToggle isAlbumView={isAlbumView} />
                </>
            );
        } else {
            return (
                <>
                    <BtnToggle isAlbumView={isAlbumView} />
                    <h3>{str.favoritePhotos}</h3>
                    <BtnClearAll />
                </>
            );
        }
    };

    return (
        <section className="app-tools" data-testid="app-tools">
            {conditionalContent()}
            <TextInput
                inputId="foo"
                label="First Name"
                validationError=""
                value="john"
                handleTextInputOnChange={() => {}}
                handleTextInputOnBlur={() => {}}
                handleTextInputOnClear={() => {}}
                isDisabled={false}
            />
        </section>
    );
}

export default AppTools;
