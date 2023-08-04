// @flow
/* istanbul ignore file */

export type Option = {
    id: string,
    value: string,
};

export type GeneralSlice = {
    isAlbumsView: boolean,
};

// IMPORTANT - The keys correspond to the slices' names!
export type State = {
    general: GeneralSlice,
};
