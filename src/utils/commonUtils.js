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

/**
 * Returns 'N/A', when recieves an empty string or null AND 'defaultValue' IS NOT provided.
 * Returns the 'defaultValue', when recieves an empty string or null AND 'defaultValue' IS provided.
 * Else returns the value converted to a string.
 * @param {(number|string|null)} value
 * @param {string} defaultValue
 * @returns `string`
 */
const valueToString = (
    value: number | string | null,
    defaultValue?: string,
): string => {
    const defaultVal =
        defaultValue || defaultValue === '' ? defaultValue : str.notAvailable;

    if (typeof value === 'string') {
        return value.trim() ? value.trim() : defaultVal;
    }

    return value || value === 0 ? value.toString() : defaultVal;
};

/**
 * Scrolls page to the top.
 */
function scrollToTop(): void {
    /* istanbul ignore else */
    if (document.body) {
        document.body.scrollTop = 0; // For Safari
    }

    /* istanbul ignore else */
    if (document.documentElement) {
        document.documentElement.scrollTop = 0; // For Chrome, Firefox
    }
}

const capitalizeFirstChar = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export default {
    stringToId,
    isArray,
    truncateString,
    httpErrorMessage,
    valueToString,
    scrollToTop,
    capitalizeFirstChar,
};
