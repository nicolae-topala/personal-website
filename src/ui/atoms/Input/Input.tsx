import React from 'react';

import './Input.scss';

interface Props {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({
  type = 'text',
  placeholder,
  className = '',
  value,
  onChange,
}): React.ReactElement => {
  return (
    <>
      <input
        type={type}
        className={`input ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event?.target.value)}
      />
    </>
  );
};
