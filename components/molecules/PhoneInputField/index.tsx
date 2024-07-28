import React, { useState } from "react";
import InputForm from "@/components/atoms/InputForm";
import Label from "@/components/molecules/Input/Label";
import Input from "@/components/atoms/Input/InputField";

interface PhoneInputFieldProps {
  label: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange: (value: string) => void;
}

const PhoneInputField = ({
  label,
  required = false,
  error = false,
  disabled = false,
  onChange,
}: PhoneInputFieldProps) => {
  const [phone, setPhone] = useState("");

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
      </div>
    </InputForm>
  );
};

export default PhoneInputField;
