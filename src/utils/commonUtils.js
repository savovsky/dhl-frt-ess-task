// @flow

/**
 * Replaces string empty spaces with '-' and sets all letters to lower case.
 * e.g. "Hello  BIG world  " => "hello-big-world"
 * @param {string} value
 * @returns `string`
 */
const stringToId = (value: string): string => {
    if (value && value.trim()) {
        return value
            .trim()
            .replace(/\s+/g, '-')
            .toLowerCase();
    }

    return 'string-to-id';
};

export default {
    stringToId,
};
