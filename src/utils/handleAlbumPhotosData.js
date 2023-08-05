// @flow

import commonUtils from './commonUtils';

import type {
    AlbumPhotosResponse,
    PhotoResponse,
    Photo,
} from '../flowTypes/photosTypes';

const { isArray, capitalizeFirstChar, valueToString } = commonUtils;

const handleAlbumPhotosData = (response: AlbumPhotosResponse): Array<Photo> => {
    const photos = [];

    if (isArray(response)) {
        response.forEach((item: PhotoResponse) => {
            if (
                item.albumId &&
                item.id &&
                item.thumbnailUrl &&
                item.title &&
                item.url
            ) {
                photos.push({
                    albumId: valueToString(item.albumId),
                    id: valueToString(item.id),
                    thumbnailUrl: valueToString(item.thumbnailUrl),
                    title: capitalizeFirstChar(valueToString(item.title)),
                    url: valueToString(item.url),
                });
            }
        });
    }

    return photos;
};

export default handleAlbumPhotosData;
