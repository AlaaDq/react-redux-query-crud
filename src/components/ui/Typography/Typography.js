import React from 'react';
import './Typography.css';

export const Typography = ({
  element: Element = 'div',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <Element
      className={`typography typography-${size} ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
};
