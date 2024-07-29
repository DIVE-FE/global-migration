"use client"

import { useState } from "react";
import InputForm from "@/components/atoms/InputForm";
import Label from "@/components/molecules/Input/Label";
import Input from "@/components/atoms/Input/InputField";
import DeleteIcon from "@/components/atoms/icons/DeleteIcon";

interface PhoneInputFieldProps {
  label: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
}

const PhoneInputField = ({
  label,
  required = false,
  error = false,
  disabled = false,
  onChange,
}: PhoneInputFieldProps) => {
  const [phone, setPhone] = useState("");

  const handleClickDeleteIcon = () => {};

  return (
    <InputForm className="input-type-number" error={error}>
      <Label htmlFor="phone" text={label} required={required} />
      <div className="input-group">
        <div className="input-group__add"></div>
        <Input
          id="phone"
          disabled={disabled}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {phone && <DeleteIcon className="input-group__append" onClick={handleClickDeleteIcon} />}
      </div>
    </InputForm>
  );
};

export default PhoneInputField;
