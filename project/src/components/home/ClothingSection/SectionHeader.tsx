import React from 'react';
import { motion } from 'framer-motion';
import { Sword } from 'lucide-react';

export const SectionHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block mb-6"
      >
        <div className="bg-auzrix-white/5 p-4 rounded-full">
          <Sword className="w-8 h-8 text-auzrix-white" />
        </div>
      </motion.div>

      <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-auzrix-white mb-4">
        Don Yourself with Power
      </h2>
      <p className="text-xl text-auzrix-gray max-w-2xl mx-auto">
        Wear your strength. Our apparel is designed for warriors who demand both style and substance.
      </p>
    </motion.div>
  );
};