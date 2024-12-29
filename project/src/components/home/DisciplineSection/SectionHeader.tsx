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

      <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-auzrix-white mb-8">
        FORGE YOUR DISCIPLINE
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-2xl text-auzrix-white font-cinzel">
          DISCIPLINE ISN'T SOMETHING YOU'RE BORN WITH
        </p>
        <p className="text-xl text-auzrix-white">
          It's built.
        </p>
        <p className="text-xl text-auzrix-gray">
          Every choice you make, every habit you create—it's the foundation for greatness.
        </p>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xl text-auzrix-gray">Most people want results but won't put in the work.</p>
          <p className="text-xl text-auzrix-white font-cinzel">
            This is how you separate yourself from the crowd.
          </p>
        </div>
      </div>
    </motion.div>
  );
};