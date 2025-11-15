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


const founder = { 
    name: "Gaurav Sharma", 
    title: "Founder & Managing Partner", 
    imageUrl: "/assets/founder.webp",
    bio: [
      "Gaurav Sharma established GSLO with a vision to create a law firm that combines deep legal expertise with a genuine commitment to client success. With over 17 years of experience, he has earned a reputation as a formidable litigator and a trusted advisor.",
      "His practice focuses on complex corporate litigation and advisory, but his passion lies in building lasting relationships with clients and mentoring the next generation of legal talent at the firm."
    ]
  };



// --- Main Component ---
export default function AboutPage(): JSX.Element {
  return (
    <div id="whoAreWe"className="bg-gradient-to-b from-gray-700 to-gray-900" >
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
              <img
  src="https://ik.imagekit.io/f3plnz4hj/transition-min.gif?updatedAt=1763149088476"
  alt="transition"
  className="absolute inset-0 w-[500px] h-[580px] object-cover rounded-md"
/>
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
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white">
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
            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white mb-16">
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
      <section className="text-white py-24 px-4 md:px-16">
            <div className="max-w-5xl mx-auto">
              
              <motion.div
                className="grid md:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                {/* --- Founder Image --- */}
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={founder.imageUrl}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
      
                {/* --- Founder Details --- */}
                <div className="text-left">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
                    Meet Our Founder
                  </h2>
                  <h3 className="text-2xl font-semibold text-white mb-2">{founder.name}</h3>
                  <p className="text-lg text-gray-400 mb-8">{founder.title}</p>
                  <div className="space-y-4 text-gray-300 font-light leading-relaxed">
                    {founder.bio.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                
              </motion.div>
      
            </div>
          </section>
    </div>
  );
}
