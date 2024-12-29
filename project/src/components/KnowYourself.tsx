import React from 'react';
import { motion } from 'framer-motion';
import { Focus, Shield, ArrowRight, Sword } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lightning from './Lightning';

const AnimatedSwords = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full h-96 flex items-center justify-center"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-auzrix-white/20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-auzrix-white/30 animate-pulse delay-100"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-auzrix-white/40 animate-pulse delay-200"></div>
      </div>

      {/* Crossed Swords */}
      <div className="relative">
        <motion.div
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <div className="relative">
            {/* First Sword */}
            <motion.div
              animate={{ rotate: [-45, 0, -45] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -left-16 -top-16"
            >
              <Sword className="w-32 h-32 text-auzrix-white transform rotate-45" />
            </motion.div>

            {/* Second Sword */}
            <motion.div
              animate={{ rotate: [45, 0, 45] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -right-16 -top-16"
            >
              <Sword className="w-32 h-32 text-auzrix-white transform -rotate-45" />
            </motion.div>

            {/* Spark Effect */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-8 h-8 bg-auzrix-white rounded-full blur-md"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Particle Effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: 0, 
              y: 0, 
              scale: 0,
              opacity: 1 
            }}
            animate={{ 
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              scale: 0,
              opacity: 0
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
            className="absolute left-1/2 top-1/2 w-1 h-1 bg-auzrix-white rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function KnowYourself() {
  return (
    <section className="relative min-h-screen bg-auzrix-black text-auzrix-white py-20">
      <Lightning />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-6 text-auzrix-white">
            Become Someone You Are Proud Of
          </h2>
          <p className="text-xl text-auzrix-gray max-w-2xl mx-auto font-secondary">
            Every warrior starts small. Train your mind, build your strength, and become someone no one can defeat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <AnimatedSwords />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-cinzel font-bold mb-6 text-auzrix-white">Find Your Power</h3>
            <p className="text-auzrix-gray mb-8 font-secondary">
              Real strength comes from within. Control your thoughts, face your fears, and take charge of your life.
            </p>
            
            <div className="mb-8">
              <h4 className="text-2xl font-cinzel font-bold mb-4 text-auzrix-white">Build Your Legacy</h4>
              <p className="text-auzrix-gray font-secondary">
                Warriors aren't born—they're made. Through hard work, focus, and sacrifice, you can achieve greatness. This is your time to rise.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-cinzel font-bold mb-4 text-auzrix-white">What It Takes</h4>
              {[
                { text: 'Stay Focused: Learn to stay disciplined', icon: Focus },
                { text: 'Stay Strong: Keep going, no matter what', icon: Shield },
                { text: 'Push Limits: Break through what holds you back', icon: Focus }
              ].map(({ text, icon: Icon }, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-auzrix-white/5 rounded-full flex items-center justify-center">
                    <Icon className="w-4 h-4 text-auzrix-white" />
                  </div>
                  <span className="text-lg font-secondary text-auzrix-gray">{text}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/training">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-auzrix btn-glow"
              >
                <span className="btn-content">
                  Start Now
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}