import React from 'react';

interface LabelProps {
  htmlFor: string;
  text: string;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text, required = false }) => (
  <label htmlFor={htmlFor}>
    {text}
    {required && <span className="required">*</span>}
  </label>
);

export default Label;