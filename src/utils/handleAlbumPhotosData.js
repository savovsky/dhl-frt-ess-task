// @flow

import commonUtils from './commonUtils';

import type {
    AlbumPhotosResponse,
    PhotoResponse,
    Photo,
} from '../flowTypes/photosTypes';

const { isArray } = commonUtils;

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
                    albumId: `${item.id}`,
                    id: `${item.id}`,
                    thumbnailUrl: item.title,
                    title: item.title,
                    url: item.title,
                });
            }
        });
    }

    return photos;
};

export default handleAlbumPhotosData;
