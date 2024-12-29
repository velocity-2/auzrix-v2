import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  image: string;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  quote,
  image,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative bg-auzrix-black p-8 rounded-lg border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div>
          <h3 className="text-auzrix-white font-cinzel font-semibold">{name}</h3>
          <p className="text-auzrix-gray text-sm">{role}</p>
        </div>
      </div>
      
      <div className="relative">
        <Quote className="absolute -top-3 -left-3 w-8 h-8 text-auzrix-white/10" />
        <p className="text-auzrix-gray">{quote}</p>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-auzrix-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
    </motion.div>
  );
};