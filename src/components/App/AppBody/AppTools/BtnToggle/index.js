// @flow

import React from 'react';

import str from '../../../../../utils/stringsUtils';
import Tooltip from '../../../../Tooltip';
import ButtonIcon from '../../../../ButtonIcon';

function BtnToggle() {
    const handleOnClick = () => {};

    const isAlbumsView = true;

    const conditionalContent = () => {
        if (isAlbumsView) {
            return (
                <Tooltip
                    content={str.btnFavorteDisabled}
                    placement="top"
                    width="150px"
                    isDisabled={false}
                    offset="-20px"
                >
                    <ButtonIcon
                        handleOnClick={handleOnClick}
                        icon="heart"
                        label={str.btnFavorite}
                        arialabel="Display Favorite Photos Button"
                        isDisabled={false}
                        dataTestid="favorite-btn"
                    />
                </Tooltip>
            );
        } else {
            return (
                <ButtonIcon
                    handleOnClick={handleOnClick}
                    icon="images"
                    label={str.btnAlbums}
                    arialabel="Display Albums View Button"
                    dataTestid="albums-btn"
                />
            );
        }
    };

    return <>{conditionalContent()}</>;
}

export default BtnToggle;
