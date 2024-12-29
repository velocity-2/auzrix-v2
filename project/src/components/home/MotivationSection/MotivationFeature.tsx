import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MotivationFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string[];
  index: number;
}

export const MotivationFeature: React.FC<MotivationFeatureProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative bg-auzrix-black/50 backdrop-blur-sm p-8 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-auzrix-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
      <div className="relative z-10">
        <div className="bg-auzrix-white/5 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-auzrix-white" />
        </div>
        <h3 className="text-xl font-cinzel font-bold text-auzrix-white mb-6">{title}</h3>
        <ul className="space-y-4">
          {description.map((item, i) => (
            <li key={i} className="text-auzrix-gray flex items-start group-hover:text-auzrix-white/90 transition-colors">
              <span className="w-1.5 h-1.5 bg-auzrix-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};