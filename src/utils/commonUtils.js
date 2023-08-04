// @flow

import str from './stringsUtils';

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

/**
 * Is provided value an Array?
 * @param {*} value
 * @returns `boolean`
 */
const isArray = (value: any): boolean => {
    return Array.isArray(value);
};

/**
 * Returns 'Ab cd...' when text: 'Ab cdef' and limit = 5.
 * @param {string} text
 * @param {number} limit
 * @returns `string`
 */
const truncateString = (text: string, limit: number): string => {
    if (text.length > limit) {
        return `${text.slice(0, limit)}...`;
    }

    return text;
};

/**
 * Retrieves an error message from API response when an HTTP error.
 * If message is longer than 150 chars => truncateString.
 * @param {*} error
 * @returns `string`
 */
const httpErrorMessage = (error: any): string => {
    let errorMsg = str.somethingHasGoneWrong;

    if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.message
    ) {
        errorMsg = error.response.data.message;
    } else if (error && error.message) {
        errorMsg = error.message;
    } else if (error && error.response && error.response.status) {
        errorMsg = `${str.requestFailedWithStatus} ${error.response.status}.`;
    } else if (error && error.data && error.data.message) {
        errorMsg = error.data.message;
    } else if (error && error.data && error.data.status) {
        errorMsg = `${str.requestFailedWithStatus} ${error.data.status}.`;
    }

    return truncateString(errorMsg, 150);
};

export default {
    stringToId,
    isArray,
    truncateString,
    httpErrorMessage,
};
