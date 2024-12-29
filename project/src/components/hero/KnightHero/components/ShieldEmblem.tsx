import React from 'react';

export const ShieldEmblem: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-24 h-24 bg-[#C0A060] transform rotate-45">
        <div className="absolute inset-2 bg-[#2D3748]" />
      </div>
    </div>
  );
};