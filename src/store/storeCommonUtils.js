export const timeout = 15000; // 15sec
export const keepUnusedDataFor = 300; // 5min
export const protocol = 'https://';
export const hostname = 'jsonplaceholder.typicode.com';

export const pathnameApiAlbums = '/albums';

export const prepareHeaders = headers => {
    headers.set('Access-Control-Allow-Origin', `${protocol}${hostname}`);
};
