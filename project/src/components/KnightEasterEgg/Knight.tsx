import React, { useEffect, useRef } from 'react';
import { SPRITE_FRAMES } from './sprites';

interface KnightProps {
  position: number;
  direction: number;
  isAttacking: boolean;
  isMoving: boolean;
  frame: number;
}

export default function Knight({ position, direction, isAttacking, isMoving, frame }: KnightProps) {
  const knightRef = useRef<HTMLDivElement>(null);
  const currentAnimation = useRef<string>('idle');

  useEffect(() => {
    if (!knightRef.current) return;

    // Update animation state based on knight's actions
    if (isAttacking) {
      currentAnimation.current = 'attack';
    } else if (isMoving) {
      currentAnimation.current = 'walk';
    } else {
      // Randomly look around when idle
      if (Math.random() < 0.1) {
        currentAnimation.current = 'lookAround';
        setTimeout(() => {
          currentAnimation.current = 'idle';
        }, 2000);
      }
    }
  }, [isAttacking, isMoving]);

  return (
    <div 
      ref={knightRef}
      className="absolute transition-transform duration-100"
      style={{ 
        transform: `translateX(${position}px) scaleX(${direction})`,
        bottom: '2rem',
      }}
    >
      <div className="relative w-12 h-12">
        {/* Dark Aura Effect */}
        <div className="absolute inset-0 bg-black/20 blur-sm animate-pulse"></div>

        {/* Knight Character */}
        <div className="relative w-full h-full">
          {/* Cape/Cloak */}
          <div className={`absolute left-1/2 -top-1 w-8 h-10 transform -translate-x-1/2 ${
            isMoving ? 'animate-float' : ''
          }`}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000]/80 to-black/80"></div>
          </div>

          {/* Armor Body */}
          <div className="absolute left-1/2 top-2 w-6 h-8 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#990000]">
              {/* Armor Details */}
              <div className="absolute inset-0 grid grid-cols-2 gap-px opacity-30">
                <div className="bg-white/10"></div>
                <div className="bg-white/10"></div>
              </div>
            </div>
          </div>

          {/* Helmet */}
          <div className="absolute left-1/2 top-0 w-5 h-5 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-[#ff0000]">
              {/* Visor */}
              <div className="absolute top-2 left-1/2 w-4 h-1 transform -translate-x-1/2 bg-black/50"></div>
              {/* Glowing Eyes */}
              <div className="absolute top-2 left-1 w-1 h-1 bg-white rounded-full shadow-glow"></div>
              <div className="absolute top-2 right-1 w-1 h-1 bg-white rounded-full shadow-glow"></div>
            </div>
          </div>

          {/* Sword */}
          <div className={`absolute ${direction > 0 ? '-right-4' : '-left-4'} top-4 transform ${
            isAttacking ? 'rotate-45' : ''
          } transition-all duration-200`}>
            <div className="w-6 h-1 bg-gradient-to-r from-gray-300 to-white">
              {/* Sword Handle */}
              <div className="absolute -top-1 right-0 w-2 h-3 bg-[#990000]"></div>
              {/* Sword Glow */}
              <div className="absolute inset-0 bg-white/20 blur-sm"></div>
            </div>
          </div>

          {/* Blood Effects during attack */}
          {isAttacking && (
            <div className="absolute -right-6 top-4">
              <div className="w-4 h-4 bg-red-600/60 rounded-full animate-splatter"></div>
              <div className="w-2 h-2 bg-red-600/60 rounded-full animate-splatter-small"></div>
            </div>
          )}
        </div>

        {/* Combat Effects */}
        {isAttacking && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-white/10 animate-flash"></div>
            <div className="absolute -right-8 top-2 w-8 h-8 bg-gradient-to-r from-[#ff0000]/0 to-[#ff0000]/20 animate-slash"></div>
          </div>
        )}
      </div>
    </div>
  );
}