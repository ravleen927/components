// src/components/Text/Text.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('Text renders text', () => {
  render(<Text text="This is some text" />);
  const textElement = screen.getByText('This is some text');
  expect(textElement).toBeInTheDocument();
});

test('Text renders with disabled styles', () => {
  render(<Text text="Disabled Text" disabled />);
  const textElement = screen.getByText('Disabled Text');
  expect(textElement).toHaveStyle('color: gray');
});
