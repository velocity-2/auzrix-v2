import React, { useEffect, useRef } from 'react';
import { Sword } from 'lucide-react';
import gsap from 'gsap';

export default function WarriorAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const swordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !swordRef.current) return;

    const tl = gsap.timeline({ repeat: -1 });

    // Sword animation
    tl.to(swordRef.current, {
      rotation: 360,
      duration: 2,
      ease: "power1.inOut"
    })
    .to(swordRef.current, {
      scale: 1.2,
      duration: 0.5,
      ease: "power2.out"
    })
    .to(swordRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.in"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-96 flex items-center justify-center">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-[#ff0000]/20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-[#ff0000]/30 animate-pulse delay-100"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-[#ff0000]/40 animate-pulse delay-200"></div>
      </div>

      {/* Animated sword */}
      <div ref={swordRef} className="relative z-10">
        <div className="p-8 bg-[#ff0000]/10 rounded-full">
          <Sword className="w-16 h-16 text-[#ff0000]" />
        </div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ff0000]/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}