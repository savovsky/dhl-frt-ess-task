// @flow

import React, { useState, useEffect, useRef } from 'react';

import commonUtils from '../../utils/commonUtils';
import ButtonIcon from '../ButtonIcon';

type Props = {
    inputId: string,
    label: string,
    validationError: string,
    value: string,
    handleTextInputOnChange: Function,
    handleTextInputOnBlur: Function,
    handleTextInputOnClear: Function,
    isDisabled: boolean,
};

type Ref = { current: any };

const { stringToId } = commonUtils;

function TextInput({
    inputId,
    label = 'text input',
    validationError = '',
    value = '',
    handleTextInputOnChange,
    handleTextInputOnBlur,
    handleTextInputOnClear,
    isDisabled,
}: Props) {
    const textInput: Ref = useRef(null);
    const [error, setError] = useState(validationError);
    const [isLabelSuperscript, setIsLabelSuperscript] = useState(value);
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setError(validationError);
        if (!value) {
            if (document.activeElement === textInput.current) {
                setIsLabelSuperscript(true);
            } else {
                setIsLabelSuperscript(false);
            }
        }
    }, [value, validationError]);

    const handleOnFocus = () => {
        setIsLabelSuperscript(true);
    };

    const handleOnBlur = () => {
        if (inputValue.trim().length === 0) {
            handleTextInputOnChange(inputId, '');
            setIsLabelSuperscript(false);
        } else {
            handleTextInputOnBlur();
        }
    };

    const handleOnChange = (e: SyntheticInputEvent) => {
        e.preventDefault();
        setIsLabelSuperscript(true);
        handleTextInputOnChange(inputId, e.target.value);
        setError('');
        setInputValue(e.target.value);
    };

    const handleOnKeyPress = (e: SyntheticKeyboardEvent) => {
        if (e.charCode === 13) {
            // eslint-disable-next-line no-console
            console.log('Enter hit');

            // Do somthing (e.g. validate all inputs and submit)
            // ...
        }
    };

    const handleOnClickClear = () => {
        textInput.current.focus();
        handleTextInputOnClear(inputId);
        setError('');
        setInputValue('');
    };

    const textInputWrapperClassName = () => {
        const defaultClass = 'text-input_wrapper';

        return isDisabled ? `${defaultClass} disabled` : defaultClass;
    };

    const textInputClassName = () => {
        const defaultClass = 'text-input';

        return error ? `${defaultClass} error` : defaultClass;
    };

    const labelClassName = () => {
        const defaultClass = 'text-input_label';

        if (error) {
            return isLabelSuperscript
                ? `${defaultClass} superscript error`
                : `${defaultClass} error`;
        }

        return isLabelSuperscript
            ? `${defaultClass} superscript`
            : defaultClass;
    };

    const conditionalContent = () => {
        if (inputValue.length === 0 || isDisabled) {
            return null;
        }

        return (
            <ButtonIcon
                handleOnClick={handleOnClickClear}
                icon="trash"
                arialabel="Clear text input"
                dataTestid="clear-text-btn"
                size="sm"
                moreProps={{
                    style: {
                        position: 'absolute',
                        top: '7px',
                        right: '8px',
                        padding: '4px 7px',
                    },
                }}
            />
        );
    };

    return (
        <div
            data-testid="text-input-container"
            className="text-input_container"
        >
            <div className={textInputWrapperClassName()}>
                <label htmlFor={stringToId(label)} className={labelClassName()}>
                    {label}
                </label>
                <input
                    data-testid="text-input"
                    id={stringToId(label)}
                    type="text"
                    ref={textInput}
                    name={label}
                    value={inputValue}
                    className={textInputClassName()}
                    autoComplete="off"
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onChange={handleOnChange}
                    onKeyPress={handleOnKeyPress}
                    maxLength={60}
                    disabled={isDisabled}
                />
                {conditionalContent()}
            </div>
            <div className="text-input_error-msg">{error}</div>
        </div>
    );
}

export default TextInput;
