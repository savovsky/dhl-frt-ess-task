// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
    faHeart as heartFilled,
    faImages,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
    /** Handle the onClick event */
    handleOnClick: Function,
    /** What icon to use? */
    icon: 'heart' | 'heart-filled' | 'images',
    /** What button label to use? */
    label?: string,
    /** What 'aria-label' label to use? */
    arialabel?: string,
    /** What icon size to use? */
    size?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x',
    /** Where is the label placement? */
    labelPlacement?: 'top' | 'right' | 'bottom' | 'left',
    /** What CSS 'margin' value to use? *(Provide units, e.g. px)* */
    margin?: string,
    /** What CSS 'text-transform' value to use for the label? *(e.g. 'lowercase', 'uppercase', 'none', etc.)* */
    textTransform?: string,
    /** Is the button disabled? */
    isDisabled?: boolean,
    /** Is the link mock? */
    isMockedData?: boolean, // TODO Rename 'isMockedData' to 'isMock'
    /** What 'data-testid' to use for the component? */
    dataTestid?: string,
    /** An object with KVPs that will be spread as props (applied) to the 'parent' node.
     * Use this object for `'area-*'`, `'ref'`, etc.
     * This is the Component "backdoor".
     *
     * Note: If you use this prop for providing inline styling via `'style'`,
     * be aware that all exposed component's properties related to CSS will be overwritten (reset).
     * */
    moreProps?: Object,
};

function ButtonIcon({
    handleOnClick,
    icon,
    label,
    arialabel,
    size,
    labelPlacement,
    margin,
    textTransform,
    isDisabled,
    isMockedData,
    dataTestid,
    moreProps,
}: Props) {
    const conditionalClassName = () => {
        const defaultClass = `fel__button-icon ${String(labelPlacement)}`;

        if (isDisabled) {
            return isMockedData
                ? `${defaultClass} disabled mockup`
                : `${defaultClass} disabled`;
        }

        return isMockedData ? `${defaultClass} mockup` : defaultClass;
    };

    const iconMap = () => {
        const icons = {
            heart: faHeart,
            'heart-filled': heartFilled,
            images: faImages,
        };

        return icons[icon];
    };

    return (
        <button
            aria-label={arialabel}
            data-testid={dataTestid}
            type="button"
            disabled={isDisabled}
            className={conditionalClassName()}
            onClick={handleOnClick}
            style={{ margin, textTransform }}
            {...moreProps}
        >
            <FontAwesomeIcon icon={iconMap()} size={size} />
            {label && <span className="fel__button-icon_label">{label}</span>}
        </button>
    );
}

ButtonIcon.defaultProps = {
    label: '',
    arialabel: 'Icon Button',
    size: 'lg',
    labelPlacement: 'right',
    margin: '0',
    textTransform: 'capitalize',
    isDisabled: false,
    isMockedData: false,
    dataTestid: 'fel-button-icon',
    moreProps: {},
};

export default ButtonIcon;
