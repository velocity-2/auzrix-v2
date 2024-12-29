import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative p-8 border border-auzrix-gray/20 rounded-lg hover:border-auzrix-white/40 transition-all duration-300"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-auzrix-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
      <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="relative mb-6">
          <div className="bg-auzrix-white/5 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-auzrix-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/20 via-transparent to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Value */}
        <motion.h3 
          className="text-4xl font-cinzel font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-auzrix-white to-auzrix-white/80"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {value}
        </motion.h3>
        
        {/* Label */}
        <p className="text-auzrix-gray group-hover:text-auzrix-white/90 transition-colors duration-300">
          {label}
        </p>
      </div>
    </motion.div>
  );
};