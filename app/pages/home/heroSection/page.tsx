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
      <div className="absolute left-0 bottom-0 w-full h-[30vh] flex items-center justify-center z-10 mb-12">
        <div className="flex flex-col justify-center items-center w-full h-full px-4 max-w-2xl mx-auto">
          {/* Top Tagline */}
          <motion.p
            className="text-white/80 text-xs md:text-sm font-light tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Gaurav Sharma Law Offices
          </motion.p>

          {/* Main Heading and Subtext */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center w-full"
          >
            <h1 className="text-7xl sm:text-7xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-4 max-w-xl">
              Your legal ally
            </h1>
            <p className="text-lg sm:text-lg md:text-lg text-gray-300 font-light tracking-wider max-w-xl leading-snug">
              Decades of expertise. Dedicated to justice.
            </p>
          </motion.div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6"
          >
            <motion.a
              href="/pages/contactUs"
              className="group flex items-center gap-3 px-6 py-2 border border-white rounded-full text-white font-light text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
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
