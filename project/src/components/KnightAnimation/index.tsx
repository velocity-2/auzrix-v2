import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Knight from './Knight';
import Enemy from './Enemy';

export default function KnightAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const knightRef = useRef<HTMLDivElement>(null);
  const enemiesRef = useRef<HTMLDivElement[]>([]);
  const animationRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    if (!containerRef.current || !knightRef.current) return;

    // Initialize GSAP timeline
    const tl = gsap.timeline({ repeat: -1 });
    animationRef.current = tl;

    // Knight movement animation
    tl.to(knightRef.current, {
      x: window.innerWidth,
      duration: 10,
      ease: "none",
      onComplete: () => {
        if (knightRef.current) {
          gsap.set(knightRef.current, { scaleX: -1 });
        }
      }
    })
    .to(knightRef.current, {
      x: -100,
      duration: 10,
      ease: "none",
      onComplete: () => {
        if (knightRef.current) {
          gsap.set(knightRef.current, { scaleX: 1 });
        }
      }
    });

    // Spawn enemies periodically
    const spawnEnemy = () => {
      if (!containerRef.current) return;

      const enemy = document.createElement('div');
      enemy.className = 'absolute';
      const enemyComponent = <Enemy type={Math.random() > 0.5 ? 'dragon' : 'skeleton'} />;
      
      // Random position
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 200);
      
      gsap.set(enemy, { x, y });
      enemiesRef.current.push(enemy);
      containerRef.current.appendChild(enemy);

      // Animate enemy
      gsap.to(enemy, {
        y: '+=50',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Remove enemy after some time
      setTimeout(() => {
        if (containerRef.current?.contains(enemy)) {
          containerRef.current.removeChild(enemy);
          enemiesRef.current = enemiesRef.current.filter(e => e !== enemy);
        }
      }, 5000);
    };

    const spawnInterval = setInterval(spawnEnemy, 3000);

    return () => {
      clearInterval(spawnInterval);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50">
      <div ref={knightRef} className="absolute bottom-8">
        <Knight />
      </div>
    </div>
  );
}