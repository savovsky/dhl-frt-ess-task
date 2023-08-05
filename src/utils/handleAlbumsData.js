// @flow

import commonUtils from './commonUtils';

import type { Option } from '../flowTypes';
import type { AlbumsResponse, AlbumResponse } from '../flowTypes/albumsTypes';

const { isArray, capitalizeFirstChar } = commonUtils;

const handleAlbumsData = (response: AlbumsResponse): Array<Option> => {
    const albums = [];

    if (isArray(response)) {
        response.forEach((item: AlbumResponse) => {
            if (item.id && item.title) {
                albums.push({
                    id: `${item.id}`,
                    value: capitalizeFirstChar(item.title),
                });
            }
        });
    }

    return albums;
};

export default handleAlbumsData;
