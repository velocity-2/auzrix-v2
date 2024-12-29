import React from 'react';
import CollectionCard from './CollectionCard';

const featuredCollections = [
  {
    id: 1,
    name: "Warrior Elite",
    description: "Premium performance wear for the modern warrior",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    badge: "New Collection"
  },
  {
    id: 2,
    name: "Shadow Force",
    description: "Stealth-inspired designs for urban warriors",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    badge: "Best Seller"
  }
];

export default function CollectionGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {featuredCollections.map((collection, index) => (
        <CollectionCard 
          key={collection.id}
          collection={collection}
          index={index}
        />
      ))}
    </div>
  );
}