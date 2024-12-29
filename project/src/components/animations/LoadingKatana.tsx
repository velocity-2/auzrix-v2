import React from 'react';
import { motion } from 'framer-motion';
import { Sword } from 'lucide-react';

export const LoadingKatana: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <div className="p-4 bg-auzrix-white/5 rounded-full">
          <Sword className="w-8 h-8 text-auzrix-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/20 via-transparent to-transparent animate-pulse" />
      </motion.div>
    </div>
  );
};