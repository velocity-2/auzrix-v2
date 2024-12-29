import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { products } from './data';

export const ProductSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(0, products.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <motion.div
          className="flex gap-8"
          animate={{ x: `${-currentIndex * 33.33}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-1/3 flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {currentIndex > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-3 bg-auzrix-white/10 rounded-full hover:bg-auzrix-white/20 transition-colors group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentIndex < products.length - 3 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-3 bg-auzrix-white/10 rounded-full hover:bg-auzrix-white/20 transition-colors group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};