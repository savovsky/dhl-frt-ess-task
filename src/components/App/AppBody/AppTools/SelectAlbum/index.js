// @flow

import React from 'react';

import str from '../../../../../utils/stringsUtils';
import ComboBox from '../../../../ComboBox';

import type { Option } from '../../../../../flowTypes';

type Props = {
    optionItems: Array<Option>,
};

function SelectAlbum({ optionItems }: Props) {
    const handleComboOnOptionSelect = () => {};

    return (
        <div style={{ width: '100%' }}>
            <ComboBox
                inputId={str.albums}
                label={str.albums}
                currentOptionId=""
                optionItems={optionItems}
                handleComboOnOptionSelect={handleComboOnOptionSelect}
                maxWidth="550px"
            />
        </div>
    );
}

export default SelectAlbum;
