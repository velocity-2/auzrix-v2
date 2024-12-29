import React from 'react';
import { SPRITE_FRAMES } from './sprites';

interface EnemyProps {
  type: 'skeleton' | 'dragon' | 'goblin' | 'zombie';
  position: { x: number; y: number };
  onDefeat: () => void;
  isDefeated: boolean;
}

export default function Enemy({ type, position, onDefeat, isDefeated }: EnemyProps) {
  const renderEnemy = () => {
    switch (type) {
      case 'skeleton':
        return (
          <div className="relative w-10 h-12">
            {/* Skeleton */}
            <div className="absolute inset-0">
              {/* Skull with glowing eyes */}
              <div className="absolute left-1/2 top-0 w-4 h-4 bg-gray-200 rounded-full transform -translate-x-1/2">
                <div className="absolute top-1 left-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Ribcage */}
              <div className="absolute left-1/2 top-4 w-6 h-4 transform -translate-x-1/2">
                <div className="absolute inset-0 grid grid-rows-3 gap-px">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-gray-200 h-px"></div>
                  ))}
                </div>
              </div>
              
              {/* Arms holding sword */}
              <div className="absolute left-0 top-4 w-8 h-1 bg-gray-200 transform rotate-45"></div>
              <div className="absolute right-0 top-4 w-8 h-1 bg-gray-200 transform -rotate-45"></div>
              
              {/* Legs */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
                <div className="absolute left-0 w-1 h-4 bg-gray-200 transform rotate-12"></div>
                <div className="absolute right-0 w-1 h-4 bg-gray-200 transform -rotate-12"></div>
              </div>
            </div>
          </div>
        );

      case 'dragon':
        return (
          <div className="relative w-14 h-12">
            {/* Dragon */}
            <div className="absolute inset-0">
              {/* Head */}
              <div className="absolute left-1/2 top-0 w-6 h-6 bg-gray-800 transform -translate-x-1/2">
                {/* Eyes */}
                <div className="absolute top-2 left-1 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-2 right-1 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                {/* Horns */}
                <div className="absolute -top-2 left-0 w-2 h-3 bg-gray-700 transform -rotate-45"></div>
                <div className="absolute -top-2 right-0 w-2 h-3 bg-gray-700 transform rotate-45"></div>
              </div>
              
              {/* Wings */}
              <div className="absolute -left-4 top-2 w-6 h-8 bg-gray-700 transform -rotate-15 animate-flap"></div>
              <div className="absolute -right-4 top-2 w-6 h-8 bg-gray-700 transform rotate-15 animate-flap"></div>
              
              {/* Body */}
              <div className="absolute left-1/2 top-5 w-8 h-6 bg-gray-800 transform -translate-x-1/2">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900"></div>
              </div>
              
              {/* Tail */}
              <div className="absolute left-1/2 bottom-0 w-2 h-6 bg-gray-800 transform -translate-x-1/2 origin-top animate-tail"></div>
            </div>
            
            {/* Fire breath effect */}
            <div className="absolute -right-6 top-2 w-8 h-4">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 animate-fire"></div>
            </div>
          </div>
        );

      case 'goblin':
        return (
          <div className="relative w-8 h-10">
            {/* Goblin */}
            <div className="absolute inset-0">
              {/* Head */}
              <div className="absolute left-1/2 top-0 w-4 h-4 bg-green-800 transform -translate-x-1/2 rounded-full">
                {/* Eyes */}
                <div className="absolute top-1 left-0.5 w-1 h-1 bg-yellow-400 rounded-full"></div>
                <div className="absolute top-1 right-0.5 w-1 h-1 bg-yellow-400 rounded-full"></div>
                {/* Ears */}
                <div className="absolute -left-1 top-1 w-1 h-2 bg-green-700 transform -rotate-15"></div>
                <div className="absolute -right-1 top-1 w-1 h-2 bg-green-700 transform rotate-15"></div>
              </div>
              
              {/* Body */}
              <div className="absolute left-1/2 top-3 w-6 h-4 bg-green-700 transform -translate-x-1/2"></div>
              
              {/* Arms with weapon */}
              <div className="absolute left-0 top-4 w-4 h-1 bg-green-800 transform rotate-45">
                <div className="absolute right-0 w-2 h-2 bg-gray-600"></div>
              </div>
            </div>
          </div>
        );

      case 'zombie':
        return (
          <div className="relative w-10 h-12">
            {/* Zombie */}
            <div className="absolute inset-0">
              {/* Head */}
              <div className="absolute left-1/2 top-0 w-5 h-5 bg-green-900 transform -translate-x-1/2 rounded-full">
                {/* Eyes */}
                <div className="absolute top-1.5 left-1 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1.5 right-1 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Torn Body */}
              <div className="absolute left-1/2 top-4 w-7 h-6 transform -translate-x-1/2">
                <div className="absolute inset-0 bg-green-800">
                  <div className="absolute top-2 left-1 w-2 h-1 bg-red-900"></div>
                  <div className="absolute bottom-1 right-1 w-3 h-1 bg-red-900"></div>
                </div>
              </div>
              
              {/* Arms */}
              <div className="absolute left-0 top-5 w-3 h-4 bg-green-900 transform rotate-12"></div>
              <div className="absolute right-0 top-5 w-3 h-4 bg-green-900 transform -rotate-12"></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className={`absolute transition-all duration-300 ${
        isDefeated ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
      style={{ 
        left: position.x,
        top: position.y,
        transform: `translateZ(0)`,
      }}
      onClick={onDefeat}
    >
      {renderEnemy()}
      
      {/* Enemy Effects */}
      <div className="absolute inset-0">
        {/* Aura effect */}
        <div className="absolute inset-0 bg-black/10 blur-sm animate-pulse"></div>
        
        {/* Death animation */}
        {isDefeated && (
          <>
            <div className="absolute inset-0 bg-red-500/20 animate-flash"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-red-500/30 animate-explode"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}