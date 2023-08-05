// @flow

import commonUtils from './commonUtils';

import type { Option } from '../flowTypes';
import type { AlbumsResponse, AlbumResponse } from '../flowTypes/albumsTypes';

const { isArray, capitalizeFirstChar, valueToString } = commonUtils;

const handleAlbumsData = (response: AlbumsResponse): Array<Option> => {
    const albums = [];

    if (isArray(response)) {
        response.forEach((item: AlbumResponse) => {
            if (item.id && item.title) {
                albums.push({
                    id: valueToString(item.id),
                    value: capitalizeFirstChar(valueToString(item.title)),
                });
            }
        });
    }

    return albums;
};

export default handleAlbumsData;
