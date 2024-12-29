import React from 'react';
import { motion } from 'framer-motion';
import { Sword } from 'lucide-react';
import { Timeline } from './Timeline';

export const DisciplineSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-auzrix-black via-auzrix-black to-auzrix-black/95 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/5 via-transparent to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          </div>
        </motion.div>

        <Timeline />
      </div>
    </section>
  );
};