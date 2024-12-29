import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  downloadUrl: string;
  index: number;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  category,
  image,
  downloadUrl,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-auzrix-black rounded-lg overflow-hidden border border-auzrix-gray/20 hover:border-auzrix-white/40 transition-all duration-300"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-auzrix-white/10 text-sm rounded-full">
              {category}
            </span>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4">
            <Link to={downloadUrl}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-auzrix-white text-auzrix-black py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-auzrix-white/90 transition-colors"
              >
                <Download className="w-5 h-5" />
                <span>Download Resource</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-cinzel font-bold text-auzrix-white mb-2">{title}</h3>
        <p className="text-auzrix-gray">{description}</p>
      </div>
    </motion.div>
  );
};