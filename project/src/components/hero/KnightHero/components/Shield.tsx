import React from 'react';
import { motion } from 'framer-motion';

export const Shield: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="relative w-48 h-56"
    >
      {/* Shield Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A5568] to-[#2D3748] rounded-t-full" />
      
      {/* Shield Border */}
      <div className="absolute inset-0 border-4 border-[#C0A060] rounded-t-full" />
      
      {/* Shield Emblem */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 bg-[#C0A060] transform rotate-45">
          <div className="absolute inset-2 bg-[#2D3748]" />
        </div>
      </div>
      
      {/* Shield Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/10 to-transparent rounded-t-full animate-pulse" />
    </motion.div>
  );
};