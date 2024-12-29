import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
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
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-auzrix-white/10 text-sm rounded-full">
              {product.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <button className="w-full bg-auzrix-white text-auzrix-black py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-auzrix-white/90 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-cinzel font-bold mb-2">{product.name}</h3>
        <p className="text-auzrix-gray">{product.price}</p>
      </div>
    </motion.div>
  );
};