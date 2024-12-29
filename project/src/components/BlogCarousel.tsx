import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const posts = [
  {
    id: 1,
    title: 'The Power of Discipline',
    excerpt: 'Discover how daily discipline transforms ordinary habits into extraordinary results.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    category: 'Mindset'
  },
  {
    id: 2,
    title: 'Forging Mental Strength',
    excerpt: 'Learn the ancient warrior techniques for building unshakeable mental resilience.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    category: 'Training'
  },
  {
    id: 3,
    title: 'Path of the Warrior',
    excerpt: "Embrace the warrior's mindset and transform challenges into opportunities.",
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5',
    category: 'Philosophy'
  }
];

export default function BlogCarousel() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cinzel font-bold text-white mb-4">Warrior Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ancient wisdom meets modern strength. Explore the path of the warrior.
          </p>
        </motion.div>

        <Swiper
          modules={[EffectFade, Autoplay, Navigation]}
          effect="fade"
          autoplay={{ delay: 5000 }}
          navigation
          loop
          className="w-full"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="relative h-[600px] overflow-hidden rounded-lg">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <span className="inline-block px-4 py-2 bg-auzrix-red text-white text-sm font-cinzel rounded-full mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-200 mb-6 max-w-2xl">
                      {post.excerpt}
                    </p>
                    <button className="group inline-flex items-center text-white hover:text-auzrix-red transition-colors">
                      <span className="font-cinzel">Read More</span>
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <span className="text-auzrix-red text-sm font-cinzel">{post.category}</span>
                <h4 className="text-xl font-cinzel font-bold text-white mt-2 mb-3">{post.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <button className="text-white hover:text-auzrix-red transition-colors font-cinzel text-sm">
                  Read Article →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}