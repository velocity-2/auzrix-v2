import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { formatPrice } from '../../../utils/formatters';

interface Product {
  id: number;
  name: string;
  price: number;
  regularPrice: number;
  sale?: string;
  image: string;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-auzrix-black rounded-lg overflow-hidden border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-all duration-300"
    >
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          {product.sale && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-red-500/80 text-sm rounded-full">
                {product.sale}
              </span>
            </div>
          )}
          
          <div className="absolute top-4 right-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-auzrix-white rounded-full hover:bg-auzrix-white/90 transition-colors"
            >
              <Heart className="w-5 h-5 text-auzrix-black" />
            </motion.button>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-auzrix-white text-auzrix-black py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-auzrix-white/90 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-cinzel font-bold mb-2">{product.name}</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-500 font-bold">{formatPrice(product.price)}</span>
          <span className="text-auzrix-gray line-through">{formatPrice(product.regularPrice)}</span>
        </div>
      </div>
    </motion.div>
  );
};