import React from 'react';
import { HeroSection } from '../components/home/hero/HeroSection';
import { DisciplineSection } from '../components/home/DisciplineSection';
import { ProductSliderSection } from '../components/home/ProductSlider';
import { MasteryTimeline } from '../components/home/MasteryTimeline';
import DigitalTools from '../components/DigitalTools';
import { CommunitySection } from '../components/home/CommunitySection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-auzrix-black">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main>
        {/* Forge Your Discipline */}
        <DisciplineSection />

        {/* Don Yourself with Power */}
        <ProductSliderSection />

        {/* The Path to Mastery */}
        <MasteryTimeline />

        {/* Other Apps I Built */}
        <DigitalTools />

        {/* Join the Warrior Tribe */}
        <CommunitySection />
      </main>
    </div>
  );
}