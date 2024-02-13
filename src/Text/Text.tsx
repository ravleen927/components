// src/components/Text/Text.tsx
import React from 'react';
import styled from 'styled-components';

interface TextProps {
  text: string;
  disabled?: boolean;
}

const StyledText = styled.span<TextProps>`
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
`;

const Text: React.FC<TextProps> = ({ text, disabled }) => {
  return <StyledText disabled={disabled}>{text}</StyledText>;
};

export default Text;
