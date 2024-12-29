import React from 'react';
import { HeroSection } from '../components/about/HeroSection';
import { MissionSection } from '../components/about/MissionSection';
import { ValuesSection } from '../components/about/ValuesSection';
import { JourneySection } from '../components/about/JourneySection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-auzrix-black">
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <JourneySection />
    </div>
  );
}