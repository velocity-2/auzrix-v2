import React from 'react';
import { motion } from 'framer-motion';
import { Sword } from './components/Sword';
import { Shield } from './components/Shield';
import { Particles } from './components/Particles';
import { Scrollwork } from './components/Scrollwork';
import { HeroTitle } from './components/HeroTitle';
import { gradients } from '../../../utils/styles/gradients';

export const KnightHero: React.FC = () => {
  return (
    <div className={`relative min-h-[600px] ${gradients.primary} overflow-hidden`}>
      <Scrollwork />
      <Particles />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-lg aspect-square"
          >
            {/* Center Shield */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Shield />
            </div>
            
            {/* Centered Sword */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-20">
              <Sword />
            </div>
          </motion.div>

          <HeroTitle 
            title="Become Someone You Are Proud Of"
            subtitle="Every warrior starts small. Train your mind, build your strength, and become someone no one can defeat."
          />
        </div>
      </div>
    </div>
  );
};