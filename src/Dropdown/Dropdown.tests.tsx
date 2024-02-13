// src/components/Dropdown/Dropdown.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

test('Dropdown renders with correct options', () => {
  render(<Dropdown options={['Option 1', 'Option 2', 'Option 3']} onSelect={() => {}} />);
  const dropdownElement = screen.getByRole('combobox');
  expect(dropdownElement.children).toHaveLength(3);
});

test('Dropdown renders with reduced opacity when disabled', () => {
  render(<Dropdown options={['Option 1', 'Option 2', 'Option 3']} onSelect={() => {}} disabled />);
  const dropdownElement = screen.getByRole('combobox');
  expect(dropdownElement).toHaveStyle('opacity: 0.5');
});
