// @flow

import React from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentAlbum } from '../../../../../store/sliceGeneral';

import str from '../../../../../utils/stringsUtils';
import ComboBox from '../../../../ComboBox';

import type { Option } from '../../../../../flowTypes';

type Props = {
    optionItems: Array<Option>,
};

function SelectAlbum({ optionItems }: Props) {
    const dispatch = useDispatch();
    const handleComboOnOptionSelect = (inputId: string, optionId: string) => {
        dispatch(setCurrentAlbum(optionId));
    };

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
