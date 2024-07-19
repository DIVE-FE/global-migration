import { ButtonProps } from '@/types/button';
import "@/styles/scss/import.scss";
import React from 'react';

const Button: React.FC<ButtonProps> = ({
    children,
    disabled,
    type = "button",
    className,
    style,
    ...eventHandlers
}) => {
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
