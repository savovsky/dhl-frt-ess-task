/* eslint-disable no-console */

import commonUtils from './commonUtils';
import str from './stringsUtils';

const {
    isArray,
    stringToId,
    truncateString,
    httpErrorMessage,
    valueToString,
} = commonUtils;

describe('commonUtils', () => {
    const testMsg = 'Returns correct boolean';

    describe(`${isArray.name}`, () => {
        test(testMsg, () => {
            const value = 'foo';

            expect(isArray(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = 123;

            expect(isArray(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = null;

            expect(isArray(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = {};

            expect(isArray(value)).toEqual(false);
        });

        test(testMsg, () => {
            const value = [];

            expect(isArray(value)).toEqual(true);
        });

        test(testMsg, () => {
            const value = [{}];

            expect(isArray(value)).toEqual(true);
        });
    });

    describe(`${stringToId.name}`, () => {
        test('Returns correct string', () => {
            const input = 'Hello  BIG world';
            const output = 'hello-big-world';

            expect(stringToId(input)).toEqual(output);
        });

        test('Returns correct string', () => {
            const input = null;
            const output = 'string-to-id';

            expect(stringToId(input)).toEqual(output);
        });

        test('Returns correct string', () => {
            const input = '   ';
            const output = 'string-to-id';

            expect(stringToId(input)).toEqual(output);
        });
    });

    describe(`${truncateString.name}`, () => {
        test('Returns correct string', () => {
            const text = 'Ab cdef';
            const limit = 5;
            const output = 'Ab cd...';

            expect(truncateString(text, limit)).toEqual(output);
        });

        test('Returns correct string', () => {
            const text = 'Abcd';
            const limit = 5;
            const output = 'Abcd';

            expect(truncateString(text, limit)).toEqual(output);
        });
    });

    describe(`${httpErrorMessage.name}`, () => {
        test(testMsg, () => {
            const error = 'foo';

            expect(httpErrorMessage(error)).toEqual(str.somethingHasGoneWrong);
        });

        test(testMsg, () => {
            const error = {};

            expect(httpErrorMessage(error)).toEqual(str.somethingHasGoneWrong);
        });

        test(testMsg, () => {
            const error = { foo: 'bar' };

            expect(httpErrorMessage(error)).toEqual(str.somethingHasGoneWrong);
        });

        test(testMsg, () => {
            const error = [];

            expect(httpErrorMessage(error)).toEqual(str.somethingHasGoneWrong);
        });

        test(testMsg, () => {
            const error = null;

            expect(httpErrorMessage(error)).toEqual(str.somethingHasGoneWrong);
        });

        test(testMsg, () => {
            const error = {
                response: {
                    data: {
                        message: 'foo',
                    },
                },
            };

            expect(httpErrorMessage(error)).toEqual(
                error.response.data.message,
            );
        });

        test(testMsg, () => {
            const error = {
                response: {
                    data: {},
                    status: 'foo',
                },
            };

            expect(httpErrorMessage(error)).toEqual(
                `${str.requestFailedWithStatus} ${error.response.status}.`,
            );
        });

        test(testMsg, () => {
            const error = {
                message: 'foo',
            };

            expect(httpErrorMessage(error)).toEqual(error.message);
        });

        test(testMsg, () => {
            const error = {
                data: {
                    message: 'foo',
                },
            };

            expect(httpErrorMessage(error)).toEqual(error.data.message);
        });

        test(testMsg, () => {
            const error = {
                data: {
                    status: 'foo',
                },
            };

            expect(httpErrorMessage(error)).toEqual(
                `${str.requestFailedWithStatus} ${error.data.status}.`,
            );
        });

        test(testMsg, () => {
            const error150chars =
                // eslint-disable-next-line max-len
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryas standard dummy text ever since the 1500';

            const errorExt = 'ABCDEFGJIJKLMNOPQ';
            const error = {
                message: error150chars + errorExt,
            };

            const output = `${error150chars}...`;

            expect(httpErrorMessage(error)).toEqual(output);
        });
    });

    describe(`${valueToString.name}`, () => {
        test('Returns correct string', () => {
            const value = null;
            const output = str.notAvailable;

            expect(valueToString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = null;
            const defaultValue = '';
            const output = defaultValue;

            expect(valueToString(value, defaultValue)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = null;
            const defaultValue = 'foo';
            const output = defaultValue;

            expect(valueToString(value, defaultValue)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = '';
            const output = str.notAvailable;

            expect(valueToString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = '';
            const defaultValue = 'foo';
            const output = defaultValue;

            expect(valueToString(value, defaultValue)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = '  ';
            const output = str.notAvailable;

            expect(valueToString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = '  ';
            const defaultValue = 'foo';
            const output = defaultValue;

            expect(valueToString(value, defaultValue)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = ' ab c  ';
            const output = 'ab c';

            expect(valueToString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = 0;
            const output = '0';

            expect(valueToString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = 10;
            const output = '10';

            expect(valueToString(value)).toEqual(output);
        });

        test('Returns correct string', () => {
            const value = 'abc';
            const output = 'abc';

            expect(valueToString(value)).toEqual(output);
        });
    });
});
