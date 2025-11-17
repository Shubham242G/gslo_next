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
    <section className="min-h-screen bg-gradient-to-b from-[#050713] to-[#03050d] text-white flex flex-col items-center justify-center px-4 md:px-16 py-24">

      {/* --- Our Clients Section --- */}
      <div className="w-full max-w-[1200px] mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-wide text-white mb-4">
            Our Clients
          </h2>
          <p className="text-white text-lg md:text-xl font-light">
            We believe every client is a valuable, long-term partner.
          </p>
        </motion.div>

        {/* Infinite Scrolling Logos */}
        <div className="relative w-full overflow-hidden mt-14">
          <motion.div
            className="flex gap-20 items-center"
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
                className="flex-shrink-0 w-[260px] h-[140px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
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
      <div className="max-w-[1200px] w-full mt-28">
        {/* Heading and Subtitle */}
        <motion.div
          className="text-center mb-14"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6 leading-tight">
            Stay Ahead With Expert<br />Knowledge
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            This is the space to introduce visitors to the business or brand. Briefly explain who's behind it,
            what it does and what makes it unique. Share its core values and what this site has to offer.
          </p>
        </motion.div>

        {/* Featured Blog Card */}
        <motion.div
          className="max-w-3xl mx-auto mb-14"
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
            <div className="relative h-[380px] md:h-auto grayscale">
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
                <p className="text-gray-400 text-sm md:text-base mb-4 font-light">
                  {featuredPost.date}
                </p>
                <h3 className="text-3xl font-light text-white mb-3 tracking-wide">
                  {featuredPost.title}
                </h3>
                <p className="text-white text-lg font-light mb-4">
                  {featuredPost.subtitle}
                </p>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
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
          <motion.a
            href='/pages/services'
            className="group flex items-center gap-4 px-10 py-4 border-2 border-white rounded-full text-white font-light text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Insights
            <motion.div className="transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight size={22} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
