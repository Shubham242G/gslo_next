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
          <source src="https://ik.imagekit.io/f3plnz4hj/heroBanner.mp4?updatedAt=1763183545246" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* --- Content Strictly in Lower 30% --- */}
      <div className="absolute left-0 bottom-0 w-full h-[35vh] sm:h-[30vh] flex flex-col items-center justify-end z-[100] pb-8 sm:pb-12 px-4">
  <div className="flex flex-col items-center w-full max-w-2xl mx-auto space-y-3 sm:space-y-4">
    
    {/* Contact Button - FIRST on mobile, higher z-index */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-xs sm:hidden order-first z-[200]"
    >
      <motion.a
        href="/pages/contactUs"
        className="group flex items-center justify-center gap-2 px-5 py-3 border-2 border-white rounded-full text-white font-medium text-sm tracking-wide w-full bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Us
        <motion.div className="transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight size={18} />
        </motion.div>
      </motion.a>
    </motion.div>

    {/* Top Tagline */}
    <motion.p
      className="text-white/80 text-xs md:text-sm font-light tracking-wider z-[150]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Gaurav Sharma Law Offices
    </motion.p>

    {/* Main Heading and Subtext - Fixed text breaking */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center w-full text-center z-[150]"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight mb-3 sm:mb-4 md:mb-6 max-w-xl mx-auto">
        <span className="block text-center w-full">Your Legal</span>
        <span className="block text-center w-full">Ally</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light tracking-wider max-w-xl mx-auto leading-relaxed">
        Decades of expertise. Dedicated to justice.
      </p>
    </motion.div>

    {/* Contact Button - Desktop only, after content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="hidden sm:flex w-full max-w-sm order-last z-[200]"
    >
      <motion.a
        href="/pages/contactUs"
        className="group flex items-center justify-center gap-2 px-5 py-3 border-2 border-white rounded-full text-white font-medium text-sm tracking-wide w-[40%] sm:w-full bg-black/30 hover:bg-white hover:text-black transition-all duration-300 shadow-lg mx-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Us
        <motion.div className="transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight size={18} />
        </motion.div>
      </motion.a>
    </motion.div>
  </div>
</div>

    </section>
  );
}
