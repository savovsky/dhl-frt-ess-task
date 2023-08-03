// @flow

import React from 'react';

type Props = {
    /** What 'data-testid' to use for the component? */
    dataTestid?: string,
};

function LoaderSpin({ dataTestid }: Props) {
    const elements = (n: number) =>
        [...Array(n)].map((e: any, index: number) => (
            <div key={`${index}`}>
                <div />
            </div>
        ));

    return (
        <div data-testid={dataTestid} className="fel__loader-spin-container">
            <div className="fel__loader-spin-wrapper">{elements(8)}</div>
        </div>
    );
}

LoaderSpin.defaultProps = {
    dataTestid: 'loader-spin',
};

export default LoaderSpin;
