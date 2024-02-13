// src/components/Card/Card.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('Card renders children with correct background color', () => {
  render(<Card backgroundColor="#f0f0f0"><p>Test content</p></Card>);
  const cardElement = screen.getByText('Test content');
  expect(cardElement.parentElement).toHaveStyle('background-color: #f0f0f0');
});

test('Card renders with reduced opacity when disabled', () => {
  render(<Card disabled><p>Disabled card</p></Card>);
  const cardElement = screen.getByText('Disabled card');
  expect(cardElement.parentElement).toHaveStyle('opacity: 0.5');
});
