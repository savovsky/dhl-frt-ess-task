// @flow

import React from 'react';

function LoaderSpin() {
    const elements = (n: number) =>
        [...Array(n)].map((e: any, index: number) => (
            <div key={`${index}`}>
                <div />
            </div>
        ));

    return (
        <div data-testid="loader-spin" className="fel__loader-spin-container">
            <div className="fel__loader-spin-wrapper">{elements(8)}</div>
        </div>
    );
}

export default LoaderSpin;
