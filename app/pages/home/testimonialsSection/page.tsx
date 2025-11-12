'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { JSX } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  company: string;
}



export default function TestimonialsSection(): JSX.Element {
  const testimonials: Testimonial[] = [
    {
      quote: '"This is the space to share a review from one of the business\'s clients or customers."',
      name: 'Poul Gingere',
      company: 'bennertik inc'
    },
    {
      quote: '"Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors."',
      name: 'Adam Barne',
      company: 'Eternet'
    },
    {
      quote: '"This is the space to share a review from one of the business\'s clients or customers."',
      name: 'Zachi Bioom',
      company: 'Artomorrow'
    },
  ];




  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#07091a] to-[#050713] flex flex-col">
      {/* Testimonials Section */}
      <div className="flex flex-col items-center justify-center px-16 py-24 flex-1">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center mb-20 tracking-wide text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          The Perfect Customer Experience
        </motion.h2>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1400px] w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <motion.div
              key={index}
              className="bg-[#8b93ff]/40 backdrop-blur-sm border-2 border-[#5b63d8]/50 rounded-[32px] p-10 flex flex-col justify-between min-h-[320px] hover:bg-[#8b93ff]/50 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#0f1535] text-base leading-relaxed mb-10 font-light">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-[#0f1535]" />
                <div>
                  <p className="text-[#0f1535] font-medium text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[#0f1535]/70 text-xs mt-0.5">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
