import React from 'react';
import { motion } from 'framer-motion';
import { ShieldEmblem } from './components/ShieldEmblem';
import { gradients, glowGradients } from '../../../utils/styles/gradients';

export const Shield: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="relative w-48 h-56"
    >
      <div className={`absolute inset-0 ${gradients.shield} rounded-t-full`} />
      <div className="absolute inset-0 border-4 border-[#C0A060] rounded-t-full" />
      <ShieldEmblem />
      <div className={`absolute inset-0 ${glowGradients.gold} rounded-t-full animate-pulse`} />
    </motion.div>
  );
};