// src/components/Label/Label.tsx
import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  text: string;
  disabled?: boolean;
}

const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
`;

const Label: React.FC<LabelProps> = ({ text, disabled }) => {
  return <StyledLabel disabled={disabled}>{text}</StyledLabel>;
};

export default Label;
