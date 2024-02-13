// src/components/Img/Img.tsx
import React from 'react';

interface ImgProps {
  src: string;
  alt: string;
  disabled?: boolean;
}

const Img: React.FC<ImgProps> = ({ src, alt, disabled }) => {
  return <img src={src} alt={alt} style={{ opacity: disabled ? 0.5 : 1 }} />;
};

export default Img;
