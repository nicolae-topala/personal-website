import React, { ReactElement } from 'react';

import './Button.scss';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<Props> = ({
  text,
  onClick,
  className = '',
}): ReactElement => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};
