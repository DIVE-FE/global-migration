import React from 'react';

interface LabelRequiredProps {
  required: boolean;
}

const LabelRequired = ({ required }: LabelRequiredProps) => (
  <>{required && <span className="required">*</span>}</>
);

export default LabelRequired;