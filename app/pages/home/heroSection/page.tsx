'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { JSX } from 'react';

export default function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video/GIF */}
      <div className="absolute inset-0 z-0">
        {/* For GIF */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/images/hero-background.gif)',
          }}
        />
        
        {/* Alternative: For Video */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video> */}
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        {/* Top Tagline */}
        <motion.p
          className="text-white/90 text-sm md:text-base font-light tracking-widest mb-8 uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Protecting Your Rights. Restoring Your Confidence.
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-12 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Decades of Experience. Dedication to Justice.<br />
          Your Legal Ally.
        </motion.h1>

        {/* Contact Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group flex items-center gap-3 px-10 py-4 border-2 border-white rounded-full text-white font-light text-base tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <motion.div
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
