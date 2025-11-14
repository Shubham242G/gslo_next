'use client';

import { motion, Variants } from 'framer-motion';
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
    <section className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#050610] text-white flex items-center justify-between px-16 max-w-[1400px] mx-auto pt-24 pb-16 relative">
      {/* Left Side - Services List */}
      <motion.div
        className="flex-1 max-w-[500px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl font-normal mb-16 tracking-wide text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h2>

        <div className="space-y-6">
          {services.map((service: Service, index: number) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 group cursor-pointer"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-[2px] bg-white group-hover:w-14 transition-all duration-300" />
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent" />
              </motion.div>
              <span className="text-xl font-light tracking-wide text-white group-hover:text-gray-300 transition-colors duration-300">
                {service.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Circular Video Container */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="bg-white relative w-[400px] h-[400px] rounded-full overflow-hidden">
          <video
            src="/assets/panning.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Law Office Library"
            className="w-full h-full object-cover"
            style={{ objectPosition: '70% center' }}
          />
        </div>
      </motion.div>

      {/* Sidebar Text (Building Trust) */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-left">
        <p className="text-gray-500 text-xs tracking-[0.4em] font-light uppercase">
          Building Trust
        </p>
      </div>
    </section>
  );
}
