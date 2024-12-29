import React, { useEffect, useRef } from 'react';
import { Sword } from 'lucide-react';

export default function KnightEasterEgg() {
  const knightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const enemyRef = useRef<HTMLDivElement[]>([]);
  const isMovingRef = useRef(false);
  const directionRef = useRef(1); // 1 for right, -1 for left

  useEffect(() => {
    if (!knightRef.current || !containerRef.current) return;

    let position = -100;
    let animationFrameId: number;

    const moveKnight = () => {
      if (!knightRef.current || !containerRef.current) return;

      if (position > window.innerWidth) {
        directionRef.current = -1;
        knightRef.current.style.transform = `translateX(${position}px) scaleX(-1)`;
      } else if (position < -100) {
        directionRef.current = 1;
        knightRef.current.style.transform = `translateX(${position}px) scaleX(1)`;
      }

      position += 2 * directionRef.current;
      knightRef.current.style.transform = `translateX(${position}px) scaleX(${directionRef.current})`;

      animationFrameId = requestAnimationFrame(moveKnight);
    };

    const spawnEnemy = () => {
      if (!containerRef.current) return;

      const enemy = document.createElement('div');
      enemy.className = 'absolute w-8 h-8 bg-black/10 rounded-full animate-dragon-fly';
      enemy.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
      enemy.style.left = `${Math.random() * (window.innerWidth - 100)}px`;

      const enemyIcon = document.createElement('div');
      enemyIcon.className = 'w-full h-full flex items-center justify-center text-[#ff0000]';
      enemyIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      `;

      enemy.appendChild(enemyIcon);
      containerRef.current.appendChild(enemy);

      setTimeout(() => {
        if (containerRef.current?.contains(enemy)) {
          containerRef.current.removeChild(enemy);
        }
      }, 5000);
    };

    const startAnimation = () => {
      if (!isMovingRef.current) {
        isMovingRef.current = true;
        moveKnight();
      }
    };

    const stopAnimation = () => {
      isMovingRef.current = false;
      cancelAnimationFrame(animationFrameId);
    };

    const enemySpawnInterval = setInterval(spawnEnemy, 3000);
    startAnimation();

    return () => {
      stopAnimation();
      clearInterval(enemySpawnInterval);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50">
      <div 
        ref={knightRef}
        className="absolute bottom-8 animate-knight-walk"
      >
        <div className="w-8 h-8 bg-[#ff0000]/10 rounded-full flex items-center justify-center animate-fire">
          <Sword className="w-5 h-5 text-[#ff0000]" />
        </div>
      </div>
    </div>
  );
}