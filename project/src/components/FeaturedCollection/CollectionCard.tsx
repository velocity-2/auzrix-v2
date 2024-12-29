import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CollectionCardProps {
  collection: {
    id: number;
    name: string;
    description: string;
    image: string;
    badge: string;
  };
  index: number;
}

export default function CollectionCard({ collection, index }: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative group overflow-hidden rounded-lg"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-auzrix-white/10 text-sm rounded-full mb-3">
              {collection.badge}
            </span>
            <h3 className="text-2xl font-cinzel font-bold mb-2">{collection.name}</h3>
            <p className="text-auzrix-gray mb-4">{collection.description}</p>
            <Link to={`/collections/${collection.id}`}>
              <button className="btn-auzrix btn-glow w-full">
                <span className="btn-content">
                  View Collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}