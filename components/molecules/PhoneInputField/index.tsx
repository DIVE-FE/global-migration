'use client';

import { useState } from 'react';
import InputForm from '@/components/atoms/InputForm';
import Label from '@/components/molecules/InputField/Label';
import Input from '@/components/atoms/Input';
import DeleteIcon from '@/components/atoms/icons/DeleteIcon';
import classNames from 'classnames';

interface PhoneInputFieldProps {
  className?: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
  countryNumber?: string | Number;
}

const PhoneInputField = ({
  className,
  label,
  required = false,
  error = false,
  disabled = false,
  countryNumber = '',
  onChange,
}: PhoneInputFieldProps) => {
  const [phone, setPhone] = useState('');
  const handleClickDeleteIcon = () => setPhone('');

  return (
    <InputForm
      className={classNames('input-type-phone', className)}
      error={error}
    >
      <Label htmlFor='phone' text={label} required={required} />
      <div className='input-group'>
        <div className='input-group__add'>
          {countryNumber && `${countryNumber} |`}
        </div>
        <Input
          id='phone'
          disabled={disabled}
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        {phone && (
          <DeleteIcon
            className='input-group__append'
            onClick={handleClickDeleteIcon}
          />
        )}
      </div>
    </InputForm>
  );
};

export default PhoneInputField;
