'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Shield, Users, Award, ArrowRight } from 'lucide-react';
import { JSX } from 'react';

// --- Data for Why Choose Us ---
const whyChooseUsItems = [
  {
    icon: Shield,
    title: 'Decades of Experience',
    description: 'Our team brings a wealth of knowledge and a proven track record of success in high-stakes legal matters.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'We are committed to understanding your unique needs and providing personalized, strategic legal counsel.',
  },
  {
    icon: Award,
    title: 'Unwavering Dedication',
    description: 'We are relentless in our pursuit of justice and will stand by your side at every step of the legal process.',
  },
];

// --- Data for Team Members ---
const teamMembers = [
  {
    name: 'Gaurav Sharma',
    title: 'Founder & Managing Partner',
    imageUrl: '/assets/founder.webp', // **REPLACE THIS**
    summary: 'Gaurav is the visionary founder of GSLO. With over a decade of experience, he provides strategic counsel to a diverse range of clients.',
    linkedinUrl: 'https://www.linkedin.com/in/gaurav-sharma-12345/', // **REPLACE THIS**
  },
  {
    name: 'Jane Doe',
    title: 'Senior Partner, Corporate Law',
    imageUrl: '/assets/anusha.jpg', // **REPLACE THIS**
    summary: 'Jane is a leading expert in M&A and corporate restructuring. Her sharp legal mind has been instrumental in our most significant transactions.',
    linkedinUrl: 'https://www.linkedin.com/in/jane-doe-67890/', // **REPLACE THIS**
  },
  {
    name: 'John Smith',
    title: 'Partner, Criminal Litigation',
    imageUrl: '/assets/laxman.jpg', // **REPLACE THIS**
    summary: 'John is a formidable presence in the courtroom, known for his aggressive defense strategies and unwavering commitment to protecting his clients\' rights.',
    linkedinUrl: 'https://www.linkedin.com/in/john-smith-11223/', // **REPLACE THIS**
  },
];

// --- Main Component ---
export default function AboutPage(): JSX.Element {
  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-900">
      {/* --- Who We Are Section --- */}
      <section className="min-h-screen bg-transparent text-white flex items-center justify-center px-8 md:px-16 py-24">
        <motion.div
          className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {/* Left Side - Office Video */}
          <motion.div
            className="relative"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: 'easeOut',
                },
              },
            }}
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-md"
              >
                <source src="/assets/transition.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            variants={{
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
            }}
          >
            <h2 className="text-5xl md:text-6xl font-light tracking-wide text-white">
              Who We Are
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light max-w-xl">
              We are a client-focused firm providing compassionate, results-driven legal representation. Our dedicated team leverages decades of experience to navigate the toughest legal challenges and protect your vital interests.
            </p>
            <div>
              <motion.button
                className="group flex items-center gap-3 px-8 py-4 border-2 border-white rounded-full text-white font-light text-base tracking-wide hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Meet The Team
                <motion.div className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="bg-transparent text-white flex flex-col items-center justify-center px-4 md:px-16 py-24">
        <div className="max-w-[1400px] w-full text-center">
          <motion.div
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: 'easeOut',
                },
              },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-16">
              Why Choose GSLO?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {whyChooseUsItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="p-4 bg-gray-800 rounded-full mb-4">
                    <item.icon size={32} className="text-[#B8860B]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* --- Redesigned Meet The Team Section --- */}
      <section className="bg-transparent py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-light tracking-wide text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Meet Our Experts
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative group w-full h-[480px] rounded-2xl overflow-hidden shadow-2xl"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: 'easeOut',
                    },
                  },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* --- Hover Content starting from the top --- */}
                <div className="absolute inset-0 p-6 text-left flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70">
                  <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                  <p className="text-md text-[#B8860B] mb-4">{member.title}</p>
                  <p className="text-gray-300 text-sm font-light leading-relaxed mb-4">
                    {member.summary}
                  </p>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#B8860B] transition-colors mt-auto"
                  >
                    Connect on LinkedIn <Linkedin size={16} />
                  </a>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
