'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Check, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

// Reusable components for this page
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center">
        {children}
    </h2>
);

const founder = { 
    name: "Gaurav Sharma", 
    title: "Founder & Managing Partner", 
    imageUrl: "/assets/founder.webp",
    bio: [
      "Gaurav Sharma established GSLO with a vision to create a law firm that combines deep legal expertise with a genuine commitment to client success. With over 17 years of experience, he has earned a reputation as a formidable litigator and a trusted advisor.",
      "His practice focuses on complex corporate litigation and advisory, but his passion lies in building lasting relationships with clients and mentoring the next generation of legal talent at the firm."
    ]
  };


export default function AboutUsPage(): JSX.Element {

    const teamMembers = [
  {
    name: 'Anusha Girish',
    title: 'Senior Partner, Corporate Law',
    imageUrl: '/assets/anusha.jpg', 
    summary: 'Distinguished advocate with a sharp legal mind and strong commitment to justice. Graduated from Delhi University with an LLB, she fiercely advocates for clients rights, earning a reputation as a formidable legal expert',
    linkedinUrl: 'https://www.linkedin.com/in/jane-doe-67890/', 
  },
  {
    name: 'Laxman Kumar',
    title: 'Partner, Criminal Litigation',
    imageUrl: '/assets/laxman.jpg', 
    summary: 'With a sharp legal mind and a strong commitment to justice. He graduated from Delhi University with an LLB and is a dedicated advocate for his clients rights in the courtroom. His relentless pursuit of favorable outcomes for his clients has earned him a reputation as a formidable legal advocate.',
    linkedinUrl: 'https://www.linkedin.com/in/john-smith-11223/',
  },
];
  
  // Data for the page sections
  const stats = [
    { value: "17+", label: "Years of Legal Experience", },
    { value: "98%", label: "Client Success Rate" },
    { value: "20+", label: "Areas of Law Expertise" },
  ];

  const values = [
    { title: "Client-First Approach", description: "Your objectives are our purpose. We tailor our legal strategies to your unique needs, ensuring that your goals are always at the forefront of our practice." },
    { title: "Unwavering Dedication", description: "We are relentlessly committed to achieving the best possible outcomes, navigating complex legal challenges with persistence and skill." },
    { title: "Transparent Communication", description: "We believe in open and honest communication, keeping you informed at every stage of the legal process and providing clarity in complex matters." },
    { title: "Strategic Legal Thinking", description: "Our team combines deep legal knowledge with creative problem-solving to develop innovative strategies that address your specific challenges." },
  ];

  const featuredServices = [
    { title: "Family Law", slug: "family-law" },
    { title: "Criminal Litigation", slug: "criminal-litigation" },
    { title: "Property Law", slug: "property-law" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white">
      
      {/* Hero Section */}
      <section className="relative bg-black pt-48 pb-40 text-center overflow-hidden">
  
  {/* VIDEO BACKGROUND */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    src="https://ik.imagekit.io/f3plnz4hj/hero.mp4?updatedAt=1763148853428"
    autoPlay
    loop
    muted
    playsInline
  ></video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 z-0"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
        Your Objectives,<br />Our Purpose.
      </h1>

      <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10">
        Customized legal services from a renowned law firm dedicated to 
        simplifying complexities and achieving your goals.
      </p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <Link
          href="/pages/contactUs"
          className="
            inline-block px-8 py-3 
            border border-white/40 
            text-white text-lg 
            rounded-full 
            backdrop-blur-sm
            transition-all duration-300 
            hover:border-white 
            hover:bg-white/10 
            hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
          "
        >
          Book a Consultation
        </Link>
      </motion.div>

    </motion.div>
  </div>
</section>




      {/* Firm Overview & Stats */}
      <Section>
        <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-white mb-4">Simplifying Legal Complexities, One Case at a Time</h2>
            <p className="max-w-3xl mx-auto text-gray-400">
                At GSLO, we transform intricate legal challenges into clear, manageable paths forward. Our commitment to excellence and a client-centric approach has established us as a trusted partner for individuals and businesses alike.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
                <motion.div 
                    key={index} 
                    className="bg-gray-800 p-8 rounded-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                    <p className="text-5xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-gray-400">{stat.label}</p>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Our Values Section */}
      <Section className="bg-black">
        <SectionTitle>Dedicated Justice Served - Our Core Values</SectionTitle>
        <div className="space-y-12">
            {values.map((value, index) => (
                <motion.div 
                    key={index}
                    className="grid md:grid-cols-3 gap-8 items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="md:col-span-1 flex items-center gap-4">
                        <Check className="w-8 h-8 text-white flex-shrink-0"/>
                        <h3 className="text-2xl font-semibold text-white">{value.title}</h3>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Founder & Team Section */}
       <section className="bg-black text-white py-24 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* --- Founder Image --- */}
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
            <Image
              src={founder.imageUrl}
              alt={founder.name}
              fill
              className="object-cover"
            />
          </div>

          {/* --- Founder Details --- */}
          <div className="text-left">
            <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-4">
              Meet Our Founder
            </h2>
            <h3 className="text-3xl font-semibold text-white mb-2">{founder.name}</h3>
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

{/* --- Redesigned Meet The Team Section --- */}
      <section className="bg-transparent py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Heading */}
    <motion.h2
      className="text-5xl md:text-6xl font-light tracking-wide text-white mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id='meetTheTeam'
    >
      Meet Our Experts
    </motion.h2>

    {/* Cards Wrapper */}
    <motion.div
      className="flex flex-wrap justify-center gap-12"
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
          className="relative group w-full sm:w-[400px] md:w-[420px] h-[480px] rounded-2xl overflow-hidden shadow-2xl"
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

          {/* Hover Content */}
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



      

      {/* Featured Services */}
      <Section className="bg-black">
        <SectionTitle>Our Featured Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
                <motion.div
                    key={index}
                    className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:bg-gray-700 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                    <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                    <Link href={`/services/${service.slug}`} className="font-semibold text-white hover:underline">
                        Learn More
                    </Link>
                </motion.div>
            ))}
        </div>
      </Section>

      
    </div>
  );
}
