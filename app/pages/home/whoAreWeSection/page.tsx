'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { JSX } from 'react';

export default function WhoWeAreSection(): JSX.Element {
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-16 py-24">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Office Image */}
        <motion.div
          className="relative"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/office-interior.jpg"
              alt="Modern Law Office Interior"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="flex flex-col justify-center space-y-8"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-light tracking-wide text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Who We Are
          </motion.h2>

          <motion.p
            className="text-gray-200 text-lg leading-relaxed font-light max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We are a client-focused firm providing compassionate, results-driven legal representation. Our dedicated team leverages decades of experience to navigate the toughest legal challenges and protect your vital interests.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="group flex items-center gap-3 px-8 py-4 border-2 border-white rounded-full text-white font-light text-base tracking-wide hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Meet The Team
              <motion.div
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
