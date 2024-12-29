import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { ProductImage } from './ProductImage';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  tags: string[];
}

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  onAddToWishlist
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-auzrix-black rounded-lg overflow-hidden border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-all duration-300"
    >
      <div className="aspect-w-1 aspect-h-1">
        <ProductImage
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {product.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-auzrix-white/10 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="absolute top-4 right-4 space-y-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onAddToWishlist(product)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-auzrix-red hover:text-white transition-colors"
            >
              <Heart className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onQuickView(product)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-auzrix-red hover:text-white transition-colors"
            >
              <Eye className="w-5 h-5" />
            </motion.button>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAddToCart(product)}
              className="w-full bg-white text-black py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-auzrix-red hover:text-white transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </motion.button>
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