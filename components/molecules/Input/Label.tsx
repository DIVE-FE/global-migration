import React from "react";

import LabelRequired from "@/components/atoms/Label/LabelRequired";

interface LabelProps {
  htmlFor: string;
  text: string;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text, required = false }) => (
  <label htmlFor={htmlFor}>
    {text}
    <LabelRequired required={required} />
  </label>
);

export default Label;
