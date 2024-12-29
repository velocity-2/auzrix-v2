import React from 'react';
import { motion } from 'framer-motion';

export const Particles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [-20, -100],
            x: Math.random() * 100 - 50
          }}
          transition={{
            duration: 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 2
          }}
          className="absolute w-2 h-2 rounded-full bg-[#FFD700]/30"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '0'
          }}
        />
      ))}
    </div>
  );
};