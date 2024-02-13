// src/components/Img/Img.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

test('Img renders with correct src and alt attributes', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" />);
  const imgElement = screen.getByAltText('Placeholder Image');
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/150');
});

test('Img renders with reduced opacity when disabled', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Placeholder Image" disabled />);
  const imgElement = screen.getByAltText('Placeholder Image');
  expect(imgElement).toHaveStyle('opacity: 0.5');
});
