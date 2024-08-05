import { ButtonProps } from './button';
import '@/styles/scss/import.scss';
import React from 'react';
import classNames from 'classnames';

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  type = 'button',
  className,
  style,
  variant = 'primary',
  size,
  ...eventHandlers
}) => {
  return (
    <button
      disabled={disabled}
      className={classNames('button-common', variant, size, className)}
      style={style}
      {...eventHandlers}
    >
      {children}
    </button>
  );
};
export { Button };
