import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

const images: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1533681904393-9ab6eee7e408',
    title: 'Forge Your Path',
    category: 'Motivation'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    title: 'Rise Above',
    category: 'Discipline'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5',
    title: 'Conquer Within',
    category: 'Strength'
  }
];

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1
};

export default function MasonryGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cinzel font-bold text-white mb-4">Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Witness the embodiment of strength and discipline through our visual journey.
          </p>
        </motion.div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-white font-cinzel text-xl mb-2">{image.title}</h3>
                    <span className="text-auzrix-red font-cinzel">{image.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-12 right-0 text-white hover:text-auzrix-red transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white font-cinzel text-2xl mb-2">{selectedImage.title}</h3>
                  <span className="text-auzrix-red font-cinzel">{selectedImage.category}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}