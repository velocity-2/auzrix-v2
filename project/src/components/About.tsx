import React from 'react';
import { Shield, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Every piece is crafted with the finest materials for lasting durability.'
  },
  {
    icon: Target,
    title: 'Performance Driven',
    description: 'Engineered to enhance your performance and push your limits.'
  },
  {
    icon: Zap,
    title: 'Bold Design',
    description: 'Stand out with cutting-edge aesthetics and powerful symbolism.'
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-auzrix-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cinzel font-bold text-auzrix-white mb-4">Why Choose Auzrix</h2>
          <p className="text-auzrix-gray max-w-2xl mx-auto font-secondary">
            More than just clothing - we're a statement of power, resilience, and uncompromising excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-auzrix-white/5 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-auzrix-white" />
                </div>
                <h3 className="text-xl font-cinzel font-semibold text-auzrix-white mb-3">{feature.title}</h3>
                <p className="text-auzrix-gray font-secondary">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}