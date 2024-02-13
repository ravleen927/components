// src/components/Button/Button.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  render(<Button text="Test Button" />);
  const buttonElement = screen.getByText('Test Button');
  expect(buttonElement).toBeInTheDocument();
});

test('Button changes background color when disabled', () => {
  render(<Button text="Test Button" disabled />);
  const buttonElement = screen.getByText('Test Button');
  expect(buttonElement).toHaveStyle({ backgroundColor: 'gray' });
});
