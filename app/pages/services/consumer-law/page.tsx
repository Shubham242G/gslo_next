'use client';

import { motion } from 'framer-motion';
import { Gavel, Handshake, ScrollText } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Section = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`py-24 md:py-32 ${className}`}>
    <div className="max-w-6xl mx-auto px-6 md:px-10">{children}</div>
  </section>
);

export default function ConsumerLawPage() {
  const whyChooseUsItems = [
    {
      icon: Gavel,
      title: 'Deep Legal Acumen',
      description:
        'Expert knowledge of the Consumer Protection Act, 2019 to champion your rights.',
    },
    {
      icon: Handshake,
      title: 'Strategic Resolution',
      description:
        'Skilled in both negotiation and courtroom litigation to achieve the best outcome.',
    },
    {
      icon: ScrollText,
      title: 'Full-Service Handling',
      description:
        'We manage your case from the initial complaint to the final resolution.',
    },
  ];

  const includedServices = [
    {
      title: 'Consumer Rights Protection',
      description: 'Defending your fundamental rights as a consumer.',
    },
    {
      title: 'Product Liability Claims',
      description: 'Holding manufacturers accountable for defective products.',
    },
    {
      title: 'Medical Negligence',
      description: 'Addressing failures in healthcare services.',
    },
    {
      title: 'Dispute Resolution',
      description: 'Expert negotiation and mediation services.',
    },
    {
      title: 'E-commerce & Digital Issues',
      description: 'Tackling legal challenges in the online marketplace.',
    },
    {
      title: 'Class Action Lawsuits',
      description: 'Representing groups of consumers with similar grievances.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#1C2233] via-[#0F1421] to-[#070A14] text-white font-[Inter] min-h-screen">
      {/* --- Hero Section --- */}
      <Section className="text-center relative overflow-hidden bg-gradient-to-b from-gray-800 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <p className="text-[#d4af37] font-medium mb-4 tracking-[2px] uppercase">
            A GSLO Practice Area
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">
            Consumer Law Advocacy
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Protecting your rights from unfair trade practices, defective goods,
            and misleading services — because justice in the marketplace matters.
          </p>

          <div className="mt-10">
            <button className="px-8 py-3 border border-[#d4af37] text-[#d4af37] rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300">
              Consult Us
            </button>
          </div>
        </motion.div>
      </Section>

      {/* --- About Section --- */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1556742044-53331fe3a1f3?w=800"
              alt="Consumer protection visual"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Your Advocate in the Marketplace
            </h2>
            <div className="space-y-6 text-gray-300 text-base leading-relaxed">
              <p>
                Consumer law ensures fairness in trade and empowers individuals
                to hold corporations accountable. Whether it’s misleading
                advertising, product defects, or poor services — you have rights.
              </p>
              <p>
                At GSLO, we transform grievances into victories. Our approach
                blends strategic negotiation with strong litigation to ensure
                justice for every client.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- Why Choose GSLO --- */}
      <Section>
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-white mb-16">
          Why Partner with GSLO?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {whyChooseUsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 shadow-lg border border-white/10 hover:border-[#d4af37]/40 hover:shadow-[#d4af37]/20 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#d4af37] text-black rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Services Included --- */}
      <Section>
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-white mb-16">
          Our Consumer Law Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {includedServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-md hover:border-[#d4af37]/30 hover:shadow-[#d4af37]/20 hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
