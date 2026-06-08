import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = "h-12 w-auto" }) => {
  // Direct link to the official logo image
  // Using lh3.googleusercontent.com for reliable direct image hosting of Drive files
  const logoUrl = "https://lh3.googleusercontent.com/d/1hj3SBqipvYlF3hJs6wTErfLINnnWEboV";

  return (
    <img 
      src={logoUrl}
      alt="High Lands Centre of Leadership for Development (L4D)"
      // brightness-0 + invert makes the non-transparent parts of the image pure white
      // This creates a "white logo" effect for dark backgrounds, assuming the input is a transparent PNG
      className={`${className} object-contain ${variant === 'white' ? 'brightness-0 invert filter' : ''}`}
      draggable={false}
    />
  );
};

export default Logo;