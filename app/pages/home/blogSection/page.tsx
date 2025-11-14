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

interface Client {
  name: string;
  logo: string;
}

export default function BlogSection(): JSX.Element {
  const featuredPost: BlogPost = {
    date: 'Aug 21, 2024',
    title: 'Building Strong Teams',
    subtitle: 'Best Practices in Human Resources Excellence',
    description: 'Create a blog post subtitle that summarizes your post in a few...',
    image: '/assets/the_team.jpg',
  };

  const clients: Client[] = [
    { name: 'Biofoot', logo: '/assets/brand3.png' },
    { name: 'JROP DIAGNOSTICS', logo: '/assets/brand4.png' },
    { name: 'ANTARA', logo: '/assets/brand5.png' },
    { name: 'INDIAN RADIOLOGY AND IMAGING ASSOCIATION', logo: '/assets/brand1.png' },
  ];

  const duplicatedClients = [...clients, ...clients];

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
    <section className="min-h-screen bg-gradient-to-b from-[#050713] to-[#03050d] text-white flex flex-col items-center justify-center px-4 md:px-16 py-20">

      {/* --- Our Clients Section --- */}
      <div className="w-full max-w-[1200px] mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-3">
            Our Clients
          </h2>
          <p className="text-white text-base font-light">
            We believe every client is a valuable, long-term partner.
          </p>
        </motion.div>

        {/* Infinite Scrolling Logos */}
        <div className="relative w-full overflow-hidden mt-12">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client: Client, index: number) => (
              <div
                key={index}
                className="flex-shrink-0 w-[240px] h-[120px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- Blog Content Section --- */}
      <div className="max-w-[1200px] w-full mt-20">
        {/* Heading and Subtitle */}
        <motion.div
          className="text-center mb-12"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-5 leading-tight">
            Stay Ahead With Expert<br />Knowledge
          </h2>
          <p className="text-white/90 text-sm leading-relaxed max-w-2xl mx-auto font-light">
            This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.
          </p>
        </motion.div>

        {/* Featured Blog Card */}
        <motion.div
          className="max-w-3xl mx-auto mb-10"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-2xl"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Left Side - Image */}
            <div className="relative h-[350px] md:h-auto grayscale">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="bg-black p-8 flex flex-col justify-between">
              <div>
                <p className="text-gray-400 text-xs mb-4 font-light">
                  {featuredPost.date}
                </p>
                <h3 className="text-2xl font-light text-white mb-3 tracking-wide">
                  {featuredPost.title}
                </h3>
                <p className="text-white text-sm font-light mb-4">
                  {featuredPost.subtitle}
                </p>
                <p className="text-gray-400 text-xs font-light leading-relaxed">
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
            className="group flex items-center gap-3 px-8 py-3 border-2 border-white rounded-full text-white font-light text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Insights
            <motion.div
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
