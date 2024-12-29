import React from 'react';

interface ScrollworkCornerProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const ScrollworkCorner: React.FC<ScrollworkCornerProps> = ({ position }) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0 border-l-4 border-t-4 rounded-tl-3xl';
      case 'top-right':
        return 'top-0 right-0 border-r-4 border-t-4 rounded-tr-3xl';
      case 'bottom-left':
        return 'bottom-0 left-0 border-l-4 border-b-4 rounded-bl-3xl';
      case 'bottom-right':
        return 'bottom-0 right-0 border-r-4 border-b-4 rounded-br-3xl';
    }
  };

  return (
    <div className={`absolute w-32 h-32 ${getPositionClasses()}`}>
      <div className="absolute inset-0 border-[#C0A060]" />
      <div className="absolute inset-4 border-2 border-[#C0A060]/50" />
    </div>
  );
};