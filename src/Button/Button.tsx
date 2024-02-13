// src/components/Button/Button.tsx
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  color?: string; // Add color prop
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.disabled ? 'gray' : '#007bff')};
  color: ${(props) => props.color || '#ffffff'}; // Use the color prop for text color
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, color }) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledButton onClick={handleClick} disabled={disabled} color={color}>
      {text}
    </StyledButton>
  );
};

export default Button;
