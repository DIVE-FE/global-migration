import React, { ChangeEvent, FormEvent, KeyboardEvent } from "react";

interface InputProps {
  type?: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  onInput?: (e: FormEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({
  type = "text",
  id,
  value,
  onChange,
  placeholder,
  disabled = false,
  maxLength,
  onInput,
  onKeyDown,
}: InputProps) => (
  <input
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
    maxLength={maxLength}
    onInput={onInput}
    onKeyDown={onKeyDown}
    className="form-control"
  />
);

export default Input;
