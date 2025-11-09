'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { JSX } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

interface Client {
  name: string;
  logo: string;
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

  // Client logos - duplicate for seamless infinite scroll
  const clients: Client[] = [
    { name: 'Indian Bar Association', logo: '/images/clients/client-1.png' },
    { name: 'Biofoot', logo: '/images/clients/client-2.png' },
    { name: 'Medical Council of India', logo: '/images/clients/client-3.png' },
    { name: 'Care at Home', logo: '/images/clients/client-4.png' },
    { name: 'Healthcare Services', logo: '/images/clients/client-5.png' },
  ];

  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients];

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
    <section className="min-h-screen bg-gradient-to-b from-[#6b78ff] to-[#7c85ff] flex flex-col">
      {/* Testimonials Section */}
      <div className="flex flex-col items-center justify-center px-16 py-24 flex-1">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-center mb-20 tracking-wide text-[#0f1535]"
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

      {/* Our Clients Section */}
      <div className="bg-[#7c85ff] py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light tracking-wide text-[#0f1535] mb-4">
              Our Clients
            </h2>
            <p className="text-[#0f1535]/80 text-lg font-light">
              We believe every client is a valuable, long-term partner.
            </p>
          </motion.div>

          {/* Infinite Scrolling Logos */}
          <div className="relative w-full overflow-hidden mt-16">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: [0, -1000],
              }}
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
                  className="flex-shrink-0 w-[200px] h-[100px] relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
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
      </div>
    </section>
  );
}
