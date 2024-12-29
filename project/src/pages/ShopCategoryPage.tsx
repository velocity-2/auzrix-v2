import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ShopCategoryPage() {
  const { category } = useParams();

  return (
    <div className="min-h-screen bg-auzrix-black text-auzrix-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link 
          to="/shop"
          className="inline-flex items-center text-auzrix-gray hover:text-auzrix-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Shop
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-cinzel font-bold mb-4">Shop Category</h1>
          <p className="text-auzrix-gray">Category: {category}</p>
        </motion.div>
      </div>
    </div>
  );
}