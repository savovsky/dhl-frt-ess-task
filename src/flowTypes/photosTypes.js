// @flow
/* istanbul ignore file */

export type Photo = {
    albumId: string,
    id: string,
    thumbnailUrl: string,
    title: string,
    url: string,
};

export type PhotoResponse = {
    albumId: number | null,
    id: number | null,
    thumbnailUrl: string | null,
    title: string | null,
    url: string | null,
};

export type AlbumPhotosResponse = Array<PhotoResponse>;
