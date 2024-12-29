import React from 'react';
import { Shield, Target, Sword, Crown, Users, Star } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { BorderFrame } from '../../ui/BorderFrame';
import { KatanaLine } from '../../ui/KatanaLine';

const features = [
  {
    icon: Shield,
    title: 'Battle-Tested Methods',
    description: 'Our strategies have helped over 50,000 warriors achieve their goals. 95% success rate across all programs.',
    metric: '50K+ Success Stories'
  },
  {
    icon: Target,
    title: 'Proven Framework',
    description: 'A systematic approach combining ancient wisdom with modern science. Transform habits in just 66 days.',
    metric: '66-Day System'
  },
  {
    icon: Sword,
    title: 'Elite Community',
    description: 'Join a brotherhood of high-performers. Network with warriors who push you to greater heights.',
    metric: '10K+ Active Members'
  },
  {
    icon: Crown,
    title: 'Premium Resources',
    description: 'Access our complete library of tools, templates, and training materials. Everything you need to succeed.',
    metric: '500+ Resources'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: "Direct access to mentors who have walked the path. Get answers when you need them most.",
    metric: '24/7 Support'
  },
  {
    icon: Star,
    title: 'Guaranteed Results',
    description: "If you don't see measurable progress in 30 days, we'll refund your investment. No questions asked.",
    metric: '30-Day Guarantee'
  }
];

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-auzrix-black to-auzrix-black/95 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-5" />
      <div className="absolute inset-0 bg-gradient-radial from-auzrix-white/5 via-transparent to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BorderFrame className="p-8 mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-auzrix-white mb-6">
              Why Warriors Choose Auzrix
            </h2>
            <KatanaLine className="mb-6" />
            <p className="text-xl text-auzrix-gray max-w-3xl mx-auto">
              We don't just sell products—we forge warriors. Our battle-tested system has 
              transformed thousands of lives through disciplined action and unwavering focus.
            </p>
          </div>
        </BorderFrame>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              metric={feature.metric}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};