// src/components/HeroImage/HeroImage.tsx
import React from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
  disabled?: boolean;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, disabled }) => {
  return <img src={src} alt={alt} style={{ opacity: disabled ? 0.5 : 1 }} />;
};

export default HeroImage;
