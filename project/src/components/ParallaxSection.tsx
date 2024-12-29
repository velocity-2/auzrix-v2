import React from 'react';
import { motion } from 'framer-motion';
import { Sword } from 'lucide-react';

export default function ParallaxSection() {
  return (
    <section className="py-20 bg-auzrix-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6 inline-block">
            <div className="p-4 bg-auzrix-white/5 rounded-full">
              <Sword className="h-8 w-8 text-auzrix-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-4 text-auzrix-white">
            Built with discipline, driven by purpose.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}