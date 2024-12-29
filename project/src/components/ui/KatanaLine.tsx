import React from 'react';
import { motion } from 'framer-motion';

interface KatanaLineProps {
  className?: string;
}

export const KatanaLine: React.FC<KatanaLineProps> = ({ className = '' }) => {
  return (
    <div className={`relative h-px ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-auzrix-white/20 to-transparent"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
      />
    </div>
  );
};