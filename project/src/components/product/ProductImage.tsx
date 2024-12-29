import React from 'react';
import { motion } from 'framer-motion';
import { optimizeImage, generateSrcSet, getPlaceholderImage } from '../../utils/performance/imageOptimization';

interface ProductImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-lg bg-auzrix-black/10"
    >
      <img
        src={optimizeImage(src)}
        srcSet={generateSrcSet(src)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-auzrix-black/10 animate-pulse"
          style={{
            backgroundImage: `url(${getPlaceholderImage(width, height)})`
          }}
        />
      )}
    </motion.div>
  );
};