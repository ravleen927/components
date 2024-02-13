// src/components/Card/Card.tsx
import React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledCard = styled.div<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? 'lightgray' : props.backgroundColor || '#ffffff')};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Card: React.FC<CardProps> = ({ children, backgroundColor, disabled }) => {
  return <StyledCard backgroundColor={backgroundColor} disabled={disabled}>{children}</StyledCard>;
};

export default Card;
