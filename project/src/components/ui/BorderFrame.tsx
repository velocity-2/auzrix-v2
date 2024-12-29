import React from 'react';
import { motion } from 'framer-motion';

interface BorderFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const BorderFrame: React.FC<BorderFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-16 h-16">
        <div className="absolute inset-0 border-l-2 border-t-2 border-auzrix-white/20 rounded-tl-xl" />
        <div className="absolute inset-4 border-l border-t border-auzrix-white/10 rounded-tl-lg" />
      </div>
      <div className="absolute top-0 right-0 w-16 h-16">
        <div className="absolute inset-0 border-r-2 border-t-2 border-auzrix-white/20 rounded-tr-xl" />
        <div className="absolute inset-4 border-r border-t border-auzrix-white/10 rounded-tr-lg" />
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16">
        <div className="absolute inset-0 border-l-2 border-b-2 border-auzrix-white/20 rounded-bl-xl" />
        <div className="absolute inset-4 border-l border-b border-auzrix-white/10 rounded-bl-lg" />
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16">
        <div className="absolute inset-0 border-r-2 border-b-2 border-auzrix-white/20 rounded-br-xl" />
        <div className="absolute inset-4 border-r border-b border-auzrix-white/10 rounded-br-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};