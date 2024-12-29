import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './SectionHeader';
import { ProductSlider } from './ProductSlider';

export const ClothingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-auzrix-black to-auzrix-black/95 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/5 via-transparent to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader />

        <div className="mb-16">
          <ProductSlider />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/shop/clothing">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-auzrix btn-glow"
            >
              <span className="btn-content">
                Shop All Apparel
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};