import React from 'react';

interface FlameProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export default function Flame({ className = '', size = 'md', color = '#ff0000' }: FlameProps) {
  const sizeClasses = {
    sm: 'w-6 h-12',
    md: 'w-8 h-16',
    lg: 'w-12 h-24'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Main Flame */}
      <div 
        className="absolute inset-0 animate-flame"
        style={{
          background: `linear-gradient(180deg, ${color} 0%, transparent 100%)`,
          borderRadius: '50% 50% 40% 40%',
          opacity: 0.9
        }}
      />
      
      {/* Inner Flame */}
      <div 
        className="absolute inset-0 -top-2 -left-1 animate-flame-inner"
        style={{
          width: 'calc(100% + 8px)',
          height: '50%',
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, transparent 100%)`,
          borderRadius: '50% 50% 40% 40%',
          opacity: 0.8
        }}
      />
      
      {/* Outer Flame */}
      <div 
        className="absolute inset-0 -top-1 -left-1 animate-flame-outer"
        style={{
          width: 'calc(100% + 8px)',
          height: '70%',
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, transparent 100%)`,
          borderRadius: '50% 50% 40% 40%',
          opacity: 0.7
        }}
      />
    </div>
  );
}