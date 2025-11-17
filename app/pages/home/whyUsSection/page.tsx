'use client';

import { motion, Variants } from 'framer-motion';
import { JSX } from 'react';
import { Layers, BarChart3, Gauge, CheckCheck, Target, ArrowRight } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

export default function WhyUsSection(): JSX.Element {
  const features: Feature[] = [
    {
      title: 'Strategic Analysis',
      description: 'We dissect cases, identifying pitfalls and opportunities.',
      icon: <Layers size={46} strokeWidth={1} className="text-white/60" />,
    },
    {
      title: 'Precision Planning',
      description: 'We map strengths and weaknesses, preparing for what\'s next.',
      icon: <BarChart3 size={46} strokeWidth={1} className="text-white/60" />,
    },
    {
      title: 'Passionate Advocacy',
      description: 'We personalize strategies for unique client needs.',
      icon: <Gauge size={46} strokeWidth={1} className="text-white/60" />,
    },
    {
      title: 'Tailored Approach',
      description: 'We personalize strategies for unique client needs.',
      icon: <CheckCheck size={46} strokeWidth={1} className="text-white/60" />,
    },
    {
      title: 'Result-driven Execution',
      description: 'We focus on delivering positive outcomes with precision.',
      icon: <Target size={46} strokeWidth={1} className="text-white/60" />,
    },
    {
      title: 'Unwavering Support',
      description: 'We\'re with you every step of the way, providing guidance and support.',
      icon: <ArrowRight size={46} strokeWidth={1} className="text-white/60" />,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="whyUs"
      className="min-h-screen bg-gradient-to-b from-[#080c20] to-[#07091a] text-white flex flex-col items-center justify-center px-16 py-24"
    >
      <div className="max-w-[1200px] w-full">
        
        {/* Heading & Subtitle */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-8">
            Why Us?
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Our client-centric approach is at our core. We listen compassionately and tailor 
            strategies to your unique needs. GSLO delivers exceptional legal services, 
            building long-term relationships.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature: Feature, index: number) => (
            <motion.div
              key={index}
              className="group relative bg-[#0d1133]/50 border border-white/20 rounded-2xl p-8 flex items-start justify-between hover:bg-[#0d1133]/70 hover:border-white/30 transition-all duration-300 min-h-[160px]"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Text */}
              <div className="flex-1 pr-6">
                <h3 className="text-xl md:text-2xl font-light italic text-white mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                {feature.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
