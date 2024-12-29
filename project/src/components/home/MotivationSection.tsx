import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Brain,
    title: 'MASTER YOUR MIND',
    description: [
      'Learn the key steps to building real discipline.',
      'Break free from distractions and take control of your day.',
      'Start small, build habits, and become unstoppable.'
    ]
  },
  {
    icon: Target,
    title: 'TOOLS THAT WORK',
    description: [
      'Get simple templates to break your goals into easy steps.',
      'Learn how to stay consistent every single day.',
      'Use systems designed to make progress automatic.'
    ]
  },
  {
    icon: Sparkles,
    title: 'AI TOOLS FOR SUCCESS',
    description: [
      'See how we use AI to make staying focused easier than ever.',
      'Get AI-powered reminders to keep you on track.',
      'Only from Auzrix, this is how you win.'
    ]
  }
];

export const MotivationSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-auzrix-black via-auzrix-black to-auzrix-black/95 relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="bg-auzrix-white/5 p-4 rounded-full">
              <Zap className="w-8 h-8 text-auzrix-white" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-cinzel font-bold text-auzrix-white mb-8 tracking-wider"
          >
            YOU DON'T UNDERSTAND MOTIVATION
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-auzrix-white font-cinzel"
            >
              While you wait for the perfect time to start...
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-auzrix-gray"
            >
              We've used these tools to help thousands build unstoppable discipline and focus.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center space-y-2"
            >
              <p className="text-xl text-auzrix-gray">Most people try to stay motivated but fail.</p>
              <p className="text-xl text-auzrix-white font-cinzel">But we're showing you how it's done.</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-auzrix-black/50 backdrop-blur-sm p-8 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-auzrix-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                <div className="relative z-10">
                  <div className="bg-auzrix-white/5 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-auzrix-white" />
                  </div>
                  <h3 className="text-xl font-cinzel font-bold text-auzrix-white mb-6">{feature.title}</h3>
                  <ul className="space-y-4">
                    {feature.description.map((item, i) => (
                      <li key={i} className="text-auzrix-gray flex items-start group-hover:text-auzrix-white/90 transition-colors">
                        <span className="w-1.5 h-1.5 bg-auzrix-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h3 className="text-4xl font-cinzel font-bold text-auzrix-white mb-6">
            NOW IS YOUR TIME
          </h3>
          <p className="text-xl text-auzrix-gray mb-4">
            Stop waiting. Stop doubting.
          </p>
          <p className="text-lg text-auzrix-gray mb-8">
            Start using the tools that will change your life.
          </p>
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-auzrix btn-glow"
            >
              <span className="btn-content">
                Learn our method
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};