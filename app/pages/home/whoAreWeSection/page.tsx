'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { JSX } from 'react';

// --- Data for Team Members ---
const teamMembers = [
  {
    name: 'Gaurav Sharma',
    title: 'Founder & Managing Partner',
    imageUrl: '/assets/founder.webp', // **REPLACE THIS**
    summary: 'Gaurav is the visionary founder of GSLO. With over a decade of experience in high-stakes litigation, he provides strategic counsel to a diverse range of clients, from startups to multinational corporations.',
    linkedinUrl: 'https://www.linkedin.com/in/gaurav-sharma-12345/', // **REPLACE THIS**
  },
  {
    name: 'Jane Doe',
    title: 'Senior Partner, Corporate Law',
    imageUrl: '/assets/anusha.jpg', // **REPLACE THIS**
    summary: 'Jane is a leading expert in M&A and corporate restructuring. Her sharp legal mind has been instrumental in some of the firm\'s most significant transactions.',
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

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// --- Main Component ---
export default function MeetTheTeam(): JSX.Element {
  return (
    <section className="min-h-screen bg-[#0a0e27] text-white flex flex-col items-center justify-center px-4 md:px-16 py-24">

      <motion.div
        className="max-w-[1400px] w-full text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-light tracking-wide text-white mb-16"
          variants={itemVariants}
        >
          Meet Our Team
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={sectionVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl p-0.5 bg-white bg-opacity-10"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* --- Glowing Border Effect --- */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-full bg-black rounded-xl">
                <Image
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                  <p className="text-md text-[#B8860B] mb-3">{member.title}</p>
                  <p className="text-gray-300 text-sm text-center font-light leading-snug mb-4">
                    {member.summary}
                  </p>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#B8860B] transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
