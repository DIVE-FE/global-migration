import React, { useState } from "react";
import classNames from "classnames";

interface InputFormProps {
  children?: React.ReactNode;
  error?: boolean;
  className?: string;
}

const InputForm = ({ children, error, className }: InputFormProps) => {
  return (
    <div className={classNames("form-group", className, { error })}>
      {children}
    </div>
  );
};

export default InputForm;
