import { ButtonProps } from './button';
import '@/styles/scss/import.scss';
import React from 'react';
import classNames from 'classnames';

const Button = ({
    children,
    disabled,
    type = "button",
    className,
    style,
    ...eventHandlers
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            className={className}
            style={style}
            {...eventHandlers}
        >
            {children}
        </button>
    )
}

export { Button }
