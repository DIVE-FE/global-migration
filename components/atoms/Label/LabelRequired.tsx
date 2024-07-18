import React from 'react';

interface RequiredIndicatorProps {
  required: boolean;
}

const RequiredIndicator = ({ required }: RequiredIndicatorProps) => (
  <>{required && <span className="required">*</span>}</>
);

export default RequiredIndicator;