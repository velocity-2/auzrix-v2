import React, { useEffect, useRef, useState } from 'react';
import Knight from './Knight';
import Enemy from './Enemy';
import { useFrame } from './useFrame';

export default function KnightEasterEgg() {
  const [position, setPosition] = useState(-100);
  const [direction, setDirection] = useState(1);
  const [isAttacking, setIsAttacking] = useState(false);
  const [isMoving, setIsMoving] = useState(true);
  const [frame, setFrame] = useState(0);
  const [enemies, setEnemies] = useState<Array<{
    id: number;
    type: 'skeleton' | 'dragon' | 'ghost';
    position: { x: number; y: number };
  }>>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  let enemyIdCounter = useRef(0);

  useFrame(() => {
    if (isMoving) {
      let newPosition = position + (2 * direction);
      
      if (newPosition > window.innerWidth) {
        setDirection(-1);
        newPosition = window.innerWidth;
      } else if (newPosition < -100) {
        setDirection(1);
        newPosition = -100;
      }
      
      setPosition(newPosition);
      setFrame((prev) => (prev + 1) % 8);
    }
  });

  useEffect(() => {
    const spawnEnemy = () => {
      const enemyTypes: Array<'skeleton' | 'dragon' | 'ghost'> = ['skeleton', 'dragon', 'ghost'];
      const type = enemyTypes[Math.floor(Math.random() * enemyTypes.length)];
      
      setEnemies(prev => [...prev, {
        id: enemyIdCounter.current++,
        type,
        position: {
          x: Math.random() * (window.innerWidth - 100),
          y: Math.random() * (window.innerHeight - 200)
        }
      }]);
    };

    const spawnInterval = setInterval(spawnEnemy, 3000);
    const cleanupInterval = setInterval(() => {
      setEnemies(prev => prev.slice(1));
    }, 5000);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(cleanupInterval);
    };
  }, []);

  const handleEnemyDefeat = (enemyId: number) => {
    setEnemies(prev => prev.filter(enemy => enemy.id !== enemyId));
    setIsAttacking(true);
    setTimeout(() => setIsAttacking(false), 500);
  };

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50">
      <Knight 
        position={position}
        direction={direction}
        isAttacking={isAttacking}
        isMoving={isMoving}
        frame={frame}
      />
      
      {enemies.map(enemy => (
        <Enemy
          key={enemy.id}
          type={enemy.type}
          position={enemy.position}
          onDefeat={() => handleEnemyDefeat(enemy.id)}
        />
      ))}
    </div>
  );
}