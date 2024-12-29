import React from 'react';
import { motion } from 'framer-motion';
import { BorderFrame } from '../../ui/BorderFrame';
import { KatanaLine } from '../../ui/KatanaLine';

export const MotivationTitle: React.FC = () => {
  const letters = "YOU DON'T UNDERSTAND MOTIVATION".split('');
  
  return (
    <BorderFrame className="p-8">
      <div className="relative">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/5 via-transparent to-transparent blur-2xl" />
        
        <div className="relative">
          {/* Main Title */}
          <div className="flex flex-wrap justify-center gap-x-3 mb-6">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className={`text-5xl md:text-7xl font-cinzel font-black ${
                  letter === ' ' ? 'mr-4' : 'text-stroke-samurai'
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <KatanaLine className="my-8" />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-auzrix-gray text-center max-w-3xl mx-auto"
          >
            Stop waiting for motivation. Start building discipline.
          </motion.p>
        </div>
      </div>
    </BorderFrame>
  );
};