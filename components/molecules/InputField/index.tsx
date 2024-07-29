"use client"

import { useState } from "react";
import InputForm from "@/components/atoms/InputForm";
import Label from "@/components/molecules/InputField/Label";
import Input from "@/components/atoms/Input";
import DeleteIcon from "@/components/atoms/icons/DeleteIcon";

interface InputFieldProps {
  label: string;
  id: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
}

const InputField = ({
  label,
  id,
  required = false,
  error = false,
  disabled = false,
  onChange,
}: InputFieldProps) => {
  const [value, setValue] = useState("");

  const handleClickDeleteIcon = () => {};

  return (
    <InputForm className="input-type-text" error={error}>
      <Label htmlFor={id} text={label} required={required} />
      <div className="input-group">
        <Input
          id={id}
          disabled={disabled}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && <DeleteIcon className="input-group__append" onClick={handleClickDeleteIcon} />}
      </div>
    </InputForm>
  );
};

export default InputField;
