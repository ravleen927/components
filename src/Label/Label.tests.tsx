// src/components/Label/Label.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('Label renders text', () => {
  render(<Label text="This is a label" />);
  const labelElement = screen.getByText('This is a label');
  expect(labelElement).toBeInTheDocument();
});

test('Label renders with disabled styles', () => {
  render(<Label text="Disabled Label" disabled />);
  const labelElement = screen.getByText('Disabled Label');
  expect(labelElement).toHaveStyle('color: gray');
});
