import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Target, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  {
    label: "Warriors Strong",
    value: "50K+",
    description: "Growing stronger daily",
    metric: "New warriors joining every day"
  },
  {
    label: "Global Reach",
    value: "10M+",
    description: "Lives impacted",
    metric: "Across 150+ countries"
  },
  {
    label: "Success Rate",
    value: "95%",
    description: "Warriors achieving goals",
    metric: "Verified results"
  }
];

const features = [
  {
    icon: Target,
    title: "Accountability Partners",
    description: "Connect with warriors who share your goals and push you to excel."
  },
  {
    icon: Shield,
    title: "Daily Challenges",
    description: "Join community challenges that build discipline and strength."
  },
  {
    icon: Heart,
    title: "Support System",
    description: "Access mentors and peers who understand your journey."
  }
];

export const CommunitySection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-auzrix-black to-auzrix-black/95 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/5 via-transparent to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block p-4 bg-auzrix-white/5 rounded-full mb-6">
            <Users className="w-8 h-8 text-auzrix-white" />
          </div>
          <h2 className="text-4xl font-cinzel font-bold text-auzrix-white mb-4">
            JOIN THE WARRIOR COMMUNITY
          </h2>
          <p className="text-xl text-auzrix-gray max-w-2xl mx-auto">
            You Don't Have to Do This Alone. Strength comes from accountability. Success comes from community.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-all duration-300 group"
            >
              <h3 className="text-4xl font-cinzel font-bold text-auzrix-white mb-2">
                {stat.value}
              </h3>
              <p className="text-xl font-cinzel text-auzrix-gray mb-2">{stat.label}</p>
              <p className="text-auzrix-gray mb-4">{stat.description}</p>
              <div className="text-sm text-auzrix-gray/60">{stat.metric}</div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-all duration-300"
              >
                <div className="bg-auzrix-white/5 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-auzrix-white" />
                </div>
                <h3 className="text-xl font-cinzel font-bold text-auzrix-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-auzrix-gray">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/join">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-auzrix btn-glow"
            >
              <span className="btn-content">
                Join the Community
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};