// src/components/RadioButton/RadioButton.tests.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

test('RadioButton renders with correct options and handles selection change', () => {
  const handleChange = jest.fn();
  render(<RadioButton options={['Option 1', 'Option 2', 'Option 3']} selectedOption="Option 1" onChange={handleChange} />);
  const radioButtons = screen.getAllByRole('radio');
  expect(radioButtons).toHaveLength(3);
  expect(radioButtons[0]).toBeChecked();
  fireEvent.click(radioButtons[1]);
  expect(handleChange).toHaveBeenCalledWith('Option 2');
});

test('RadioButton renders with reduced opacity when disabled', () => {
  render(<RadioButton options={['Option 1', 'Option 2', 'Option 3']} selectedOption="Option 1" onChange={() => {}} disabled />);
  const radioButtons = screen.getAllByRole('radio');
  expect(radioButtons).toHaveLength(3);
  expect(radioButtons[0]).toBeDisabled();
});
