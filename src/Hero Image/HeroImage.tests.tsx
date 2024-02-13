// src/components/HeroImage/HeroImage.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('HeroImage renders with correct src and alt attributes', () => {
  render(<HeroImage src="https://via.placeholder.com/600x400" alt="Hero Image" />);
  const imgElement = screen.getByAltText('Hero Image');
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/600x400');
});

test('HeroImage renders with reduced opacity when disabled', () => {
  render(<HeroImage src="https://via.placeholder.com/600x400" alt="Hero Image" disabled />);
  const imgElement = screen.getByAltText('Hero Image');
  expect(imgElement).toHaveStyle('opacity: 0.5');
});
