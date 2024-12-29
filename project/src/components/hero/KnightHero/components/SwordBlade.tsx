import React from 'react';
import { motion } from 'framer-motion';
import { gradients, glowGradients } from '../../../../utils/styles/gradients';

export const SwordBlade: React.FC = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: 200 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`w-4 h-[200px] ${gradients.steel} mx-auto relative`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-50 animate-pulse" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px]">
        <div className={`absolute inset-0 ${glowGradients.gold} animate-pulse`} />
      </div>
    </motion.div>
  );
};