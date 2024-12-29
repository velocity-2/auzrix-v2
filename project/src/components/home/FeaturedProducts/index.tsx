import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductSlider } from './ProductSlider';

export const FeaturedProducts: React.FC = () => {
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
            Powerful Tools for Your Journey
          </h2>
          <p className="text-auzrix-gray max-w-2xl mx-auto">
            Equip yourself with gear designed for warriors who demand excellence.
          </p>
        </motion.div>

        <div className="mb-16">
          <ProductSlider />
        </div>

        <div className="text-center">
          <Link to="/shop">
            <button className="btn-auzrix btn-glow">
              <span className="btn-content">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};