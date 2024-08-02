'use client';

import { useState } from 'react';
import classNames from 'classnames';
import InputForm from '@/components/atoms/InputForm';
import Label from '@/components/molecules/InputField/Label';
import Input from '@/components/atoms/Input';
import DeleteIcon from '@/components/atoms/icons/DeleteIcon';
import InputMessage from '@/components/atoms/InputMessage';

interface InputFieldProps {
  label: string;
  id: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  limit?: number;
  row?: boolean;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
  message?: string;
}

const InputField = ({
  label,
  id,
  required = false,
  error = false,
  disabled = false,
  limit = 20,
  onChange,
  value = '',
  message,
  className,
  row = false,
  labelPosition = 'top',
}: InputFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleClickDeleteIcon = () => {
    if (onChange) {
      onChange('');
    }
  };

  return (
    <InputForm
      className={classNames('input-type-text', className)}
      error={error}
      labelPosition={labelPosition}
      row={row}
    >
      <Label htmlFor={id} text={label} required={required} />
      <div className='input-group'>
        <Input
          id={id}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          maxLength={limit}
        />
        {value && (
          <DeleteIcon
            className='input-group__append'
            onClick={handleClickDeleteIcon}
          />
        )}
      </div>
      {message && <InputMessage message={message} />}
    </InputForm>
  );
};

export default InputField;
