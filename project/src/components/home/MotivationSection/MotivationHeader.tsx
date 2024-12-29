import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const MotivationHeader: React.FC = () => {
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
          <Zap className="w-8 h-8 text-auzrix-white" />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-cinzel font-bold text-auzrix-white mb-8 tracking-wider"
      >
        YOU DON'T UNDERSTAND MOTIVATION
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-auzrix-white font-cinzel"
        >
          While you wait for the perfect time to start...
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl text-auzrix-gray"
        >
          We've used these tools to help thousands build unstoppable discipline and focus.
        </motion.p>
      </div>
    </motion.div>
  );
};