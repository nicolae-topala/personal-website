import React from 'react';

import './Textarea.scss';

interface Props {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange: (value: string) => void;
}

export const Textarea: React.FC<Props> = ({
  placeholder,
  className,
  value,
  onChange,
}): React.ReactElement => {
  return (
    <>
      <textarea
        className={`textarea ${className ? className : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event?.target.value)}
      />
    </>
  );
};
