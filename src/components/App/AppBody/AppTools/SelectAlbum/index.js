// @flow

import React from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentAlbum } from '../../../../../store/sliceGeneral';

import str from '../../../../../utils/stringsUtils';
import ComboBox from '../../../../ComboBox';

import type { Option } from '../../../../../flowTypes';

type Props = {
    optionItems: Array<Option>,
    currentAlbum: string,
};

function SelectAlbum({ optionItems, currentAlbum }: Props) {
    const dispatch = useDispatch();
    const handleComboOnOptionSelect = (inputId: string, optionId: string) => {
        dispatch(setCurrentAlbum(optionId));
    };

    return (
        <ComboBox
            inputId={str.albums}
            label={str.albums}
            currentOptionId={currentAlbum}
            optionItems={optionItems}
            handleComboOnOptionSelect={handleComboOnOptionSelect}
            moreProps={{
                style: { width: '560px', margin: '0 30px 0 0' },
            }}
        />
    );
}

export default SelectAlbum;
