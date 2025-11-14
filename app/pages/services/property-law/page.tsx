'use client';

import { motion } from 'framer-motion';
import { Home, Shield, FileText, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

// --- Reusable Section Component ---
const Section = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function PropertyLawPage(): JSX.Element {
  const whyChooseUsItems = [
    {
      icon: Home,
      title: 'Trusted Property Law Experts',
      description:
        'Decades of experience navigating the complexities of property ownership and disputes.',
    },
    {
      icon: Shield,
      title: 'Comprehensive Legal Protection',
      description:
        'Safeguarding your property rights with clear, practical legal counsel.',
    },
    {
      icon: FileText,
      title: 'Meticulous Documentation',
      description:
        'Ensuring all contracts and property transactions are legally sound and compliant.',
    },
  ];

  const includedServices = [
    {
      title: 'Property Ownership Disputes',
      description:
        'Resolving conflicts related to ownership and boundaries efficiently.',
    },
    {
      title: 'Sale & Purchase Agreements',
      description:
        'Drafting and reviewing contracts to secure your transactions.',
    },
    {
      title: 'Leases & Tenancies',
      description:
        'Handling legal aspects related to rental agreements and leases.',
    },
    {
      title: 'Property Litigation',
      description:
        'Representing clients in court for property-related cases.',
    },
    {
      title: 'Title Verification & Due Diligence',
      description:
        'Ensuring clean titles and identifying legal risks before transactions.',
    },
    {
      title: 'Eviction and Recovery',
      description:
        'Legal procedures to regain possession in tenancy disputes.',
    },
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen font-sans">
      {/* --- Hero Section --- */}
      <section
  className="relative bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] py-28 px-6 text-center"
  style={{
    backgroundImage: "url('/assets/property-law.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>
  {/* Black overlay for shade */}
  <div className="absolute inset-0 bg-black opacity-60 z-0" />

  {/* Content on top */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
      style={{ lineHeight: "1.15", fontWeight: 300 }}
    >
      Secure Your Property, Protect Your Rights
    </motion.h1>
    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
      We provide expert legal assistance with property-related matters,
      ensuring your ownership and investment are shielded by comprehensive law.
    </p>
    <Link href="/pages/contactUs">
              <button className="px-8 py-3 bg-[#1dd3b0] text-white font-semibold rounded-full hover:bg-[#17b89a] transition-all duration-300 shadow-lg hover:shadow-xl mt-8">
                Contact Us
              </button>
            </Link>
  </div>
</section>


      {/* --- Why Choose GSLO --- */}
      <Section className="bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <h2 className="text-3xl font-semibold text-center text-white mb-16">
          Why Choose GSLO for Property Law?
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {whyChooseUsItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex flex-col items-center bg-gradient-to-br from-[#1a2238] to-[#0b0f19] p-8 rounded-2xl border border-white/10 shadow-lg"
            >
              <div className="bg-[#1dd3b0]/10 p-4 rounded-full mb-5">
                <item.icon className="w-10 h-10 text-[#1dd3b0]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Services Included --- */}
      <Section>
        <h2 className="text-3xl font-semibold text-center text-white mb-16">
          Our Property Law Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {includedServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex items-start bg-gradient-to-br from-[#111827] to-[#0b0f19] p-6 rounded-2xl border border-white/10 shadow-lg"
            >
              <CheckCircle className="text-[#1dd3b0] w-6 h-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Contact Form Section --- */}
      <Section className="bg-gradient-to-t from-[#0b0f19] via-[#111827] to-[#0b0f19] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Discuss Your Property Matters
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Facing property disputes or planning transactions? Contact GSLO for expert legal advice and representation.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/pages/contactUs"
            className="inline-block bg-[#1dd3b0] text-[#0b0f19] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition"
          >
            Contact Us
          </motion.a>
        </div>
      </Section>
    </div>
  );
}
