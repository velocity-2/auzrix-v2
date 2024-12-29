import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Monitor, Book, Star, ArrowRight, Filter, Search, Sword, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

// Featured products at the top
const featuredProducts = [
  {
    id: 'featured1',
    name: 'Warrior Elite Bundle',
    price: '$199.99',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
    badge: 'New Release'
  },
  {
    id: 'featured2',
    name: 'Focus Master Kit',
    price: '$149.99',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f',
    badge: 'Best Seller'
  }
];

// Main categories with their respective products
const categories = [
  {
    id: 'apparel',
    name: 'Warrior Apparel',
    icon: Sword,
    description: 'Clothing that embodies strength and resilience',
    products: [
      {
        id: 1,
        name: 'Warrior Hoodie',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
        tags: ['Bestseller', 'Premium']
      },
      {
        id: 2,
        name: 'Focus T-Shirt',
        price: '$39.99',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
        tags: ['New']
      }
    ]
  },
  {
    id: 'digital',
    name: 'Digital Arsenal',
    icon: Monitor,
    description: 'Tools to enhance your digital presence',
    products: [
      {
        id: 3,
        name: 'Productivity Suite',
        price: '$49.99',
        image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f',
        tags: ['Featured']
      },
      {
        id: 4,
        name: 'Focus Wallpapers',
        price: '$19.99',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        tags: ['Digital']
      }
    ]
  },
  {
    id: 'mindset',
    name: 'Mindset & Training',
    icon: Shield,
    description: 'Resources for mental strength',
    products: [
      {
        id: 5,
        name: 'Warrior Guide',
        price: '$29.99',
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
        tags: ['Guide']
      },
      {
        id: 6,
        name: 'Focus Mastery',
        price: '$34.99',
        image: 'https://images.unsplash.com/photo-1533681904393-9ab6eee7e408',
        tags: ['Training']
      }
    ]
  }
];

// Quick stats/features
const features = [
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Crafted for warriors'
  },
  {
    icon: Shield,
    title: 'Lifetime Access',
    description: 'One-time purchase'
  },
  {
    icon: Target,
    title: 'Expert Support',
    description: '24/7 assistance'
  }
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-auzrix-black text-auzrix-white pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-auzrix-white/5 to-auzrix-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-6">Shop Auzrix</h1>
            <p className="text-xl text-auzrix-gray mb-12">
              Find everything you need to build strength, discipline, and focus. Our shop is made for those who want more from life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="py-10 bg-auzrix-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-cinzel font-bold mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-3 py-1 bg-auzrix-white/10 text-sm rounded-full mb-3">
                        {product.badge}
                      </span>
                      <h3 className="text-2xl font-cinzel font-bold mb-2">{product.name}</h3>
                      <p className="text-auzrix-gray mb-4">{product.price}</p>
                      <button className="btn-auzrix btn-glow w-full">
                        <span className="btn-content">
                          View Collection
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="relative flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 bg-auzrix-black border border-auzrix-gray/20 rounded-md focus:border-auzrix-white/40 transition-colors"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-auzrix-gray" />
            </div>
            <button className="p-3 bg-auzrix-black border border-auzrix-gray/20 rounded-md hover:border-auzrix-white/40 transition-colors">
              <Filter className="w-6 h-6" />
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full transition-colors ${
                !selectedCategory ? 'bg-auzrix-white/10 text-auzrix-white' : 'text-auzrix-gray hover:text-auzrix-white'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-colors ${
                  selectedCategory === category.id ? 'bg-auzrix-white/10 text-auzrix-white' : 'text-auzrix-gray hover:text-auzrix-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories
            .filter(category => !selectedCategory || category.id === selectedCategory)
            .map((category, index) => (
              <div key={category.id} className="mb-20 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="bg-auzrix-white/5 p-4 rounded-full">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-cinzel font-bold">{category.name}</h2>
                    <p className="text-auzrix-gray">{category.description}</p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: productIndex * 0.1 }}
                      className="group relative bg-auzrix-black rounded-lg overflow-hidden border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-all duration-300"
                    >
                      <div className="aspect-w-1 aspect-h-1">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
                          <div className="absolute bottom-4 left-4 right-4">
                            <button className="w-full bg-auzrix-white text-auzrix-black py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-auzrix-white/90 transition-colors">
                              <ShoppingBag className="w-5 h-5" />
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
            ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-auzrix-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-8 border border-auzrix-gray/20 rounded-lg hover:border-auzrix-white/40 transition-all duration-300"
                >
                  <div className="bg-auzrix-white/5 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-auzrix-white" />
                  </div>
                  <h3 className="text-xl font-cinzel font-bold mb-4">{feature.title}</h3>
                  <p className="text-auzrix-gray">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}