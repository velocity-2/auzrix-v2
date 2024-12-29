import React from 'react';
import { motion } from 'framer-motion';

export const Sword: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      {/* Sword Handle */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-24">
        <div className="w-full h-16 bg-gradient-to-b from-[#C0A060] to-[#917545] rounded-b-lg" />
        <div className="w-20 h-8 bg-[#C0A060] absolute -left-6 top-0 rounded-full" />
      </div>

      {/* Sword Blade */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 200 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-4 h-[200px] bg-gradient-to-b from-[#E5E7EB] to-[#D1D5DB] mx-auto relative"
      >
        {/* Blade Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-50 animate-pulse" />
        
        {/* Light Rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px]">
          <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/20 to-transparent animate-pulse" />
        </div>
      </motion.div>
    </motion.div>
  );
};