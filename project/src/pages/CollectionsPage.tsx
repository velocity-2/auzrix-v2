import React from 'react';
import { Book, Shirt, Globe, Target, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

const categories = [
  {
    id: 1,
    title: 'Master Your Mind',
    description: 'E-books, guides, and resources to sharpen your focus and build unshakable mental strength.',
    icon: Book,
    items: ['Mental Training Guide', 'Focus Enhancement Program', 'Warrior Mindset Manual']
  },
  {
    id: 2,
    title: 'Custom Clothing',
    description: 'Apparel and accessories that embody resilience, power, and purpose.',
    icon: Shirt,
    items: ['Warrior Collection', 'Performance Series', 'Elite Training Gear']
  },
  {
    id: 3,
    title: 'Digital Tools',
    description: 'Templates, wallpapers, and resources to level up your online presence.',
    icon: Globe,
    items: ['Social Media Templates', 'Brand Assets', 'Digital Workspace Kit']
  },
  {
    id: 4,
    title: 'Growth Essentials',
    description: 'Products that fuel your drive, boost focus, and support your success.',
    icon: Target,
    items: ['Focus Enhancement Tools', 'Productivity Suite', 'Growth Accelerators']
  }
];

const benefits = [
  {
    title: 'Premium Quality',
    description: 'Every item is crafted with excellence and attention to detail.',
    icon: Sparkles
  },
  {
    title: 'Warrior Support',
    description: '24/7 assistance for all your needs and questions.',
    icon: Target
  },
  {
    title: 'Regular Updates',
    description: 'New items and improvements added frequently.',
    icon: ArrowRight
  }
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-auzrix-black text-auzrix-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-cinzel font-bold mb-6"
          >
            Discover Our Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-auzrix-gray max-w-3xl mx-auto"
          >
            Every warrior needs the right tools to rise above challenges and conquer their goals.
          </motion.p>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="bg-auzrix-white/5 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-auzrix-white" />
                  </div>
                  
                  <h3 className="text-2xl font-cinzel font-bold mb-4">{category.title}</h3>
                  <p className="text-auzrix-gray mb-6">{category.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center text-auzrix-gray">
                        <span className="w-1.5 h-1.5 bg-auzrix-white rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={`/collections/${category.id}`}
                    className="btn-auzrix btn-glow inline-flex"
                  >
                    <span className="btn-content">
                      Explore Collection
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Items Slider */}
      <section className="py-20 bg-auzrix-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-hidden mb-16 h-[400px]">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`img-box flex-[0_1_300px] relative transition-all duration-300 ${
                  index % 2 === 0 ? '-translate-y-5' : ''
                }`}
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-${1517836357463 + index}-d25dfeac3438)`
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Collection Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
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
                  <h3 className="text-xl font-cinzel font-bold mb-4">{benefit.title}</h3>
                  <p className="text-auzrix-gray">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}