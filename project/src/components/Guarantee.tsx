import React from 'react';
import { Shield, Sword, Crown } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '30-Day Trial by Combat',
    description: 'Test our gear in real battle conditions. Not satisfied? Full refund, no questions asked.'
  },
  {
    icon: Crown,
    title: 'Warrior\'s Guarantee',
    description: 'Our gear is forged to last. If it fails you in battle, we\'ll replace it without question.'
  },
  {
    icon: Sword,
    title: 'Legion Support',
    description: 'Our warriors stand ready. Day or night, we\'re here to support your journey.'
  }
];

export default function Guarantee() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">The Warrior's Path</h2>
          <blockquote className="relative text-2xl text-gray-300 mb-12 animate-fade-in max-w-3xl mx-auto">
            <div className="absolute -left-4 -top-4 text-[#ff0000] text-6xl opacity-25">"</div>
            <p className="relative z-10">
              Strength isn't measured by what you can do today, but by the battles you overcome tomorrow. Every challenge is a step toward change.
            </p>
            <footer className="text-[#ff0000] mt-4 text-xl font-semibold">– Auzrix</footer>
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-lg relative transform hover:-translate-y-1 transition-all duration-300 before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent before:transition-colors before:duration-300 hover:before:border-[#ff0000]"
              >
                <div className="bg-[#ff0000]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 animate-fire">
                  <Icon className="w-8 h-8 text-[#ff0000]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}