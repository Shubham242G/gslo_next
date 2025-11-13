'use client';

import { motion } from 'framer-motion';
import { Rocket, FileText, Scaling, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { JSX } from 'react';

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

export default function StartupAdvisoryPage(): JSX.Element {
  const whyChooseUsItems = [
    {
      icon: Rocket,
      title: 'Founder-Focused Legal Advice',
      description:
        'We understand the startup hustle and provide practical, actionable legal advice that aligns with your vision.',
    },
    {
      icon: FileText,
      title: 'Robust Legal Documentation',
      description:
        'From shareholder agreements to ESOPs, we ensure your legal foundation is solid from day one.',
    },
    {
      icon: Scaling,
      title: 'Scalable Legal Solutions',
      description:
        'Our services grow with you, providing strategic counsel from seed stage to Series A and beyond.',
    },
  ];

  const includedServices = [
    {
      title: 'Company Incorporation',
      description: 'Choosing and establishing the right legal structure for your startup.',
    },
    {
      title: 'Founder Agreements',
      description: 'Drafting clear and fair agreements between co-founders.',
    },
    {
      title: 'Fundraising Legal Support',
      description: 'Guiding you through term sheets, due diligence, and shareholder agreements.',
    },
    {
      title: 'ESOP & Equity Plans',
      description: 'Designing and implementing employee stock ownership plans.',
    },
    {
      title: 'Contracts & Negotiations',
      description: 'Drafting and negotiating vendor, client, and technology agreements.',
    },
    {
      title: 'Intellectual Property Protection',
      description: 'Securing your trademarks, copyrights, and patents.',
    },
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen font-sans">
      {/* --- Hero Section --- */}
      <section className="relative bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] py-28 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
          style={{ lineHeight: '1.15', fontWeight: 300 }}
        >
          Startup Legal Advisory
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          From incorporation to investment, we are the legal co-pilots for ambitious founders. Let us handle the legal complexities, so you can focus on building your vision.
        </p>
      </section>

      {/* --- Why Choose GSLO --- */}
      <Section className="bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <h2 className="text-3xl font-semibold text-center text-white mb-16">
          Why Founders Choose GSLO
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
          Our Startup Advisory Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {includedServices.map((service, idx) => (
            <motion.div
              key={idx}
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
          <h2 className="text-3xl font-semibold text-white mb-4">Build Your Foundation with Us</h2>
          <p className="text-gray-400 text-lg mb-10">
            Ready to take the next step? Contact us for a consultation to discuss your startup's legal needs and how we can help you grow.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="inline-block bg-[#1dd3b0] text-[#0b0f19] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition"
          >
            Book a Founder's Consultation
          </motion.a>
        </div>
      </Section>
    </div>
  );
}
