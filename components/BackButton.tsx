import React from 'react';
import { ArrowLeft } from 'lucide-react';

export interface BackButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

/**
 * Reusable BackButton component for High Lands Centre of Leadership for Development (L4D).
 * Features L4D branding (Teal theme, rounded corners, accessible focus & hover states).
 */
const BackButton: React.FC<BackButtonProps> = ({
  label = 'Back',
  onClick,
  className = '',
  ariaLabel,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel || label || 'Go back'}
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
        bg-white text-teal-900 border border-teal-200/80 shadow-sm
        hover:bg-teal-50 hover:text-teal-950 hover:border-teal-300 hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2
        active:scale-95 print:hidden group ${className}`}
    >
      <ArrowLeft className="w-4 h-4 text-teal-700 group-hover:-translate-x-1 transition-transform duration-300 shrink-0" />
      <span>{label}</span>
    </button>
  );
};

export default BackButton;
