import React from 'react';
import { motion } from 'framer-motion';
import CollectionGrid from './CollectionGrid';

export default function FeaturedCollection() {
  return (
    <section className="py-20 bg-auzrix-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cinzel font-bold text-auzrix-white mb-4">
            Featured Collection
          </h2>
          <p className="text-auzrix-gray max-w-2xl mx-auto">
            Forged for warriors, designed for legends. Discover our latest and most exclusive pieces.
          </p>
        </motion.div>

        <CollectionGrid />
      </div>
    </section>
  );
}