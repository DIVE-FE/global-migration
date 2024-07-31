'use client';

import { useState } from 'react';
import classNames from 'classnames';
import InputForm from '@/components/atoms/InputForm';
import Label from '@/components/molecules/InputField/Label';
import Input from '@/components/atoms/Input';
import DeleteIcon from '@/components/atoms/icons/DeleteIcon';

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
  className?: string;
}

const InputField = ({
  label,
  id,
  required = false,
  error = false,
  disabled = false,
  limit = 20,
  row = false,
  labelPosition = 'top',
  className,
  onChange,
}: InputFieldProps) => {
  const [value, setValue] = useState('');

  const handleClickDeleteIcon = () => setValue('');

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
          onChange={e => setValue(e.target.value)}
          maxLength={limit}
        />
        {value && (
          <DeleteIcon
            className='input-group__append'
            onClick={handleClickDeleteIcon}
          />
        )}
      </div>
    </InputForm>
  );
};

export default InputField;
