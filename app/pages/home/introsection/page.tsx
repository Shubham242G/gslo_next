'use client';

import { motion, Variants } from 'framer-motion';
import { Play, Volume2 } from 'lucide-react';
import Image from 'next/image';
import { JSX } from 'react';

interface Service {
  name: string;
}

export default function IntroSection(): JSX.Element {
  const services: Service[] = [
    { name: 'Healthcare Law' },
    { name: 'Family Law' },
    { name: 'Intellectual Property Rights' },
    { name: 'Criminal Litigation' },
    { name: 'Consumer Law' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="min-h-screen bg-[#080c20] text-white flex items-center justify-between px-16 max-w-[1400px] mx-auto pt-24 relative">
      {/* Left Side - Services List */}
      <motion.div
        className="flex-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-6xl font-light mb-16 tracking-wide text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h2>

        <div className="space-y-8">
          {services.map((service: Service, index: number) => (
            <motion.div
              key={index}
              className="flex items-center gap-6 group cursor-pointer"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-[2px] bg-white group-hover:w-16 transition-all duration-300" />
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent" />
              </motion.div>
              <span className="text-2xl font-light tracking-wide text-white group-hover:text-gray-300 transition-colors duration-300">
                {service.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Circular Image with Video */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Circular Image Container */}
          <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/images/law-books.jpg"
              alt="Law Office Library"
              fill
              className="object-cover"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <motion.button
                className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Play video"
              >
                <Play size={32} className="text-[#0a0e27] ml-1" fill="#0a0e27" />
              </motion.button>
            </div>
          </div>

          {/* Sound Icon - Bottom Right */}
          <motion.button
            className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle sound"
          >
            <Volume2 size={24} className="text-[#0a0e27]" />
          </motion.button>
        </div>
      </motion.div>

      {/* Sidebar Text (Building Trust) */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-left">
        <p className="text-gray-400 text-sm tracking-[0.3em] font-light">
          Building Trust
        </p>
      </div>
    </section>
  );
}
