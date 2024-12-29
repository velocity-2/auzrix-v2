import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';

const products = [
  {
    id: 1,
    name: "Warrior's Hoodie",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    category: "Apparel"
  },
  {
    id: 2,
    name: "Discipline Tee",
    price: "$45.99",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "Apparel"
  },
  {
    id: 3,
    name: "Focus Cap",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Resilience Tank",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
    category: "Apparel"
  }
];

export const ProductSlider: React.FC = () => {
  return (
    <div className="overflow-x-auto pb-4 -mx-4 px-4">
      <div className="flex gap-8">
        {products.map((product) => (
          <div key={product.id} className="w-80 flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};