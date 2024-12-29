import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Warrior's Hoodie",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    category: "Apparel",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Battle Tee",
    price: "$45.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "Essentials",
    badge: "New"
  },
  {
    id: 3,
    name: "Combat Shorts",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    category: "Performance",
    badge: "Limited Edition"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-auzrix-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cinzel font-bold text-auzrix-white mb-4">Featured Products</h2>
          <p className="text-auzrix-gray max-w-2xl mx-auto font-secondary">
            Discover our most popular items, crafted for warriors like you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-auzrix-black rounded-lg overflow-hidden border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-all duration-300"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-auzrix-white/10 text-sm rounded-full">
                      {product.badge}
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
          ))}
        </div>
      </div>
    </section>
  );
}