import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const artworks = [
  {
    id: 1,
    title: 'Digital Warrior',
    type: 'Digital Art',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Inner Strength',
    type: 'Hand-drawn',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Mountain Spirit',
    type: 'Digital Art',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function ArtCollection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 opacity-0 transform translate-y-4 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Art That Inspires</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From digital art to hand-drawn pieces, each design fuels your journey with purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artworks.map((art, index) => (
            <div 
              key={art.id}
              className={`opacity-0 transform translate-y-4 transition-all duration-1000 delay-${index * 200}`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="group relative overflow-hidden rounded-lg border-2 border-transparent hover:border-[#ff0000] transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={art.image} 
                    alt={art.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{art.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{art.type}</p>
                      <p className="text-[#ff0000] font-semibold mb-4">{art.price}</p>
                      <button className="flex items-center text-white group/btn">
                        View Details
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}