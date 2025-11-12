'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { JSX } from 'react';

export default function HeroSection(): JSX.Element {
  return (
    <section className="relative h-screen w-full flex items-end justify-center overflow-hidden">
      
      {/* --- Background Video --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/hero.mp4" type="video/mp4" /> 
          Your browser does not support the video tag.
        </video>
        
        {/* --- Dark Overlay for text readability --- */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* --- Content Aligned to Bottom 30% --- */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
        <div className="absolute bottom-0 w-full" style={{ height: '35%' }}>
          <div className="flex flex-col items-center justify-center h-full px-4">
            
            {/* Top Tagline */}
            <motion.p
              className="text-white/80 text-xs md:text-sm font-light tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Protecting Your Rights. Restoring Your Confidence.
            </motion.p>

            {/* Main Heading with Unique Layout */}
            <motion.div
              className="text-white text-3xl md:text-5xl font-light tracking-wide mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="flex justify-center items-center gap-x-4">
                <span>Decades of Experience.</span>
                <span>Your Legal Ally.</span>
              </div>
              <div className="text-xl md:text-2xl mt-1 text-white/90">
                Dedication to Justice.
              </div>
            </motion.div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="mb-8 group flex items-center gap-3 px-8 py-3 border border-white rounded-full text-white font-light text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
                <motion.div
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <ArrowRight size={18} />
                </motion.div>
              </motion.button>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

