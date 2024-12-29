import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-gray-900 rounded-lg overflow-hidden"
    >
      <div className="relative aspect-w-1 aspect-h-1">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-4 right-4 space-y-2">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#ff0000] hover:text-white transition-colors"
            >
              <Heart className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#ff0000] hover:text-white transition-colors"
            >
              <Eye className="w-5 h-5" />
            </motion.button>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-black py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-[#ff0000] hover:text-white transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </motion.button>
          </div>
        </div>

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#ff0000] text-white text-sm rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-white text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-[#ff0000] font-bold text-lg">{product.price}</p>
      </div>

      {/* Size Guide */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black/90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex justify-between text-sm text-gray-400">
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
          <span>XXL</span>
        </div>
      </div>
    </motion.div>
  );
}