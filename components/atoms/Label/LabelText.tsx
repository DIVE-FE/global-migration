import React from 'react';

interface LabelProps {
  htmlFor: string;
  text: string;
}

const Label = ({ htmlFor, text }: LabelProps) => (
  <label htmlFor={htmlFor}>
    {text}
  </label>
);

export default Label;