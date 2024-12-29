import React from 'react';

interface EnemyProps {
  type: 'dragon' | 'skeleton';
}

export default function Enemy({ type }: EnemyProps) {
  if (type === 'dragon') {
    return (
      <div className="relative w-10 h-10">
        {/* Dragon body */}
        <div className="absolute inset-0 bg-gray-800 rounded-sm">
          {/* Wings */}
          <div className="absolute -left-2 top-1 w-3 h-4 bg-gray-700 transform -rotate-45"></div>
          <div className="absolute -right-2 top-1 w-3 h-4 bg-gray-700 transform rotate-45"></div>
          
          {/* Head */}
          <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 bg-gray-900 rounded-sm">
            {/* Eyes */}
            <div className="absolute top-1 left-0 w-1 h-1 bg-[#ff0000]"></div>
            <div className="absolute top-1 right-0 w-1 h-1 bg-[#ff0000]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-8 h-10">
      {/* Skeleton body */}
      <div className="absolute inset-0 bg-gray-200 rounded-sm">
        {/* Skull */}
        <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 bg-white rounded-sm">
          {/* Eyes */}
          <div className="absolute top-1 left-0 w-1 h-1 bg-black"></div>
          <div className="absolute top-1 right-0 w-1 h-1 bg-black"></div>
        </div>
        
        {/* Ribs */}
        <div className="absolute top-4 left-1/2 w-4 h-3 -translate-x-1/2">
          <div className="w-full h-px bg-gray-300 mb-1"></div>
          <div className="w-full h-px bg-gray-300 mb-1"></div>
          <div className="w-full h-px bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}