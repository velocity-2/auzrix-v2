import React from 'react';

export default function Knight() {
  return (
    <div className="relative w-12 h-12">
      {/* Base knight body - red armor */}
      <div className="absolute inset-0 bg-[#ff0000] rounded-sm">
        {/* Armor details */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000]">
          {/* Helmet */}
          <div className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 bg-[#ff0000] rounded-t-sm">
            {/* Visor */}
            <div className="absolute top-1 left-1/2 w-3 h-1 -translate-x-1/2 bg-black/30"></div>
          </div>
          
          {/* Chest plate */}
          <div className="absolute top-4 left-1/2 w-6 h-4 -translate-x-1/2 bg-[#cc0000]">
            {/* Armor detail lines */}
            <div className="absolute top-1 left-1 w-4 h-px bg-[#ff0000]"></div>
            <div className="absolute top-2 left-1 w-4 h-px bg-[#ff0000]"></div>
          </div>
          
          {/* Sword */}
          <div className="absolute -top-1 -right-4 w-6 h-1 bg-[#ff0000] transform rotate-45">
            {/* Sword handle */}
            <div className="absolute right-0 -top-1 w-2 h-3 bg-[#cc0000]"></div>
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#ff0000]/20 blur-sm animate-pulse"></div>
    </div>
  );
}