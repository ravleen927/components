import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ primary = false, backgroundColor, size = 'medium', label, onClick }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const buttonStyle: React.CSSProperties = backgroundColor ? { backgroundColor } : {};

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={buttonStyle}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
