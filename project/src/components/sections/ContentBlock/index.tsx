import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ContentBlock: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content - 7 columns */}
          <div className="col-span-12 md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pr-8"
            >
              <h2 className="text-4xl font-cinzel font-bold text-auzrix-white mb-6 leading-tight">
                STOP WAITING FOR MOTIVATION
              </h2>
              <div className="prose prose-lg text-auzrix-gray space-y-6">
                <p className="text-xl leading-relaxed">
                  Motivation is a lie you tell yourself. It's the excuse that keeps you weak, keeps you waiting for the "perfect moment" that never comes.
                </p>
                <blockquote className="border-l-4 border-red-500 pl-6 my-8">
                  <p className="text-2xl font-cinzel text-auzrix-white italic">
                    "Success doesn't wait for motivation. It demands discipline."
                  </p>
                </blockquote>
                <button className="btn-auzrix btn-glow mt-8">
                  <span className="btn-content">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Content - 5 columns */}
          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-auzrix-black/50 p-8 rounded-lg border border-auzrix-gray/20"
            >
              <h3 className="text-xl font-cinzel font-bold text-auzrix-white mb-6">
                KEY PRINCIPLES
              </h3>
              <ul className="space-y-4">
                {['Discipline Over Motivation', 'Systems Beat Willpower', 'Action Creates Change'].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-auzrix-gray">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};