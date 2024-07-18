import React from 'react';

interface LabelTextProps {
  htmlFor: string;
  text: string;
}

const LabelText = ({ htmlFor, text }: LabelTextProps) => (
  <label htmlFor={htmlFor}>
    {text}
  </label>
);

export default LabelText;