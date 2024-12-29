import React from 'react';
import { Shield, Target, Sword } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Shield,
    title: 'FORGE YOUR MINDSET',
    description: 'Stop making excuses. Start building the mental strength that separates warriors from the weak.'
  },
  {
    icon: Target,
    title: 'MASTER DISCIPLINE',
    description: "Discipline isn't a choice, it's your only option. Our system makes it automatic."
  },
  {
    icon: Sword,
    title: 'CONQUER WEAKNESS',
    description: 'Every challenge is a chance to prove yourself. Turn obstacles into opportunities.'
  }
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-auzrix-black via-auzrix-black to-auzrix-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-auzrix-white/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};