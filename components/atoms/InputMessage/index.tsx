import React from 'react';

interface InputMessageProps {
  message: string;
}

const InputMessage: React.FC<InputMessageProps> = ({ message }) => {
  return <p className='message'>{message}</p>;
};

export default InputMessage;
