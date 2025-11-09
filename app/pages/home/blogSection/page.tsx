'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { JSX } from 'react';

interface BlogPost {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function BlogSection(): JSX.Element {
  const featuredPost: BlogPost = {
    date: 'Aug 21, 2024',
    title: 'Building Strong Teams',
    subtitle: 'Best Practices in Human Resources Excellence',
    description: 'Create a blog post subtitle that summarizes your post in a few...',
    image: '/images/blog/featured-post.jpg',
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#5b6bd5] via-[#4a5bc4] to-[#3d4db3] text-white flex flex-col items-center justify-center px-16 py-24">
      <div className="max-w-[1400px] w-full">
        {/* Heading and Subtitle */}
        <motion.div
          className="text-center mb-16"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6 leading-tight">
            Stay Ahead With Expert<br />Knowledge
          </h2>
          <p className="text-white/90 text-base leading-relaxed max-w-2xl mx-auto font-light">
            This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.
          </p>
        </motion.div>

        {/* Featured Blog Card */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Left Side - Image */}
            <div className="relative h-[400px] md:h-auto grayscale">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="bg-black p-10 flex flex-col justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-6 font-light">
                  {featuredPost.date}
                </p>
                <h3 className="text-3xl font-light text-white mb-4 tracking-wide">
                  {featuredPost.title}
                </h3>
                <p className="text-white text-base font-light mb-6">
                  {featuredPost.subtitle}
                </p>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {featuredPost.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Insights Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="group flex items-center gap-3 px-10 py-4 border-2 border-white rounded-full text-white font-light text-base tracking-wide hover:bg-white hover:text-[#5b6bd5] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Insights
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
