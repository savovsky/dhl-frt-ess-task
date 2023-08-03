/* eslint-disable no-console */

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// Allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// TypeError: MutationObserver is not a constructor
// https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0
// Option 3: Add the MutationObserver constructor to window via '@sheerun/mutationobserver-shim'
import MutationObserver from '@sheerun/mutationobserver-shim';

window.MutationObserver = MutationObserver;

HTMLCanvasElement.prototype.getContext = jest.fn();

global.console = {
    error: jest.fn(), // console.error are ignored in tests

    // Keep native behavior for other methods, use those to ptint out things in your own tests, not 'console.error'
    log: console.log,
    warn: console.warn,
    info: console.info,
    debug: console.debug,
};
