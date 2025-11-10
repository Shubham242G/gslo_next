'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JSX } from 'react';

interface Service {
  title: string;
  description: string;
  slug: string;
  summary: string; // Added summary for hover effect
}

export default function ServicesPage(): JSX.Element {
  const services: Service[] = [
    {
      title: 'Family Law',
      description: 'Navigating the complexities of family law can be overwhelming, from provisions for divorce to...',
      slug: 'familyLaw',
      summary: 'Comprehensive legal support for divorce, child custody, and marital property disputes.',
    },
    {
      title: 'Criminal Litigation',
      description: 'From the assertion of one\'s legal rights to formulating an effective defense, the complexities of...',
      slug: 'criminal-litigation',
      summary: 'Expert defense in criminal cases, ensuring your rights are protected at every stage.',
    },
    {
      title: 'Property Law',
      description: 'Property Law deals with disputes relating to properties, ownership disputes, and breaches of...',
      slug: 'property-law',
      summary: 'Guidance on property transactions, ownership disputes, and real estate litigation.',
    },
    {
      title: 'Labour Law',
      description: 'Rights and knowledge of their rights to employees, although sometimes they may b...',
      slug: 'labour-law',
      summary: 'Advising on employment contracts, workplace disputes, and statutory compliance for both employers and employees.',
    },
    {
      title: 'Consumer Law',
      description: 'It becomes challenging to comprehend and establish your consumer rights due to the...',
      slug: 'consumer-law',
      summary: 'Protecting consumers from unfair trade practices and defective goods or services.',
    },
    {
      title: 'Intellectual Property',
      description: 'Intellectual Property Rights (IPR) protect creations of the mind, including inventions, trademark...',
      slug: 'intellectual-property',
      summary: 'Safeguarding your patents, trademarks, and copyrights to protect your valuable creations.',
    },
    {
      title: 'Hospitality Law',
      description: 'GSLO enables your comfortable navigation of the labyrinth of hospitality law while ensuring your...',
      slug: 'hospitality-law',
      summary: 'Specialized legal services for hotels, restaurants, and tourism businesses, covering licensing and regulatory issues.',
    },
    {
      title: 'Debt Recovery',
      description: 'Unpaid debts can disrupt cash flow and hinder business growth. Whether you\'re a business...',
      slug: 'debt-recovery',
      summary: 'Efficient and ethical legal solutions for recovering outstanding debts and managing credit risks.',
    },
    {
      title: 'Startup Advisory',
      description: 'Are you starting something new? With GSLO\'s expert advisory services, you can navigate the...',
      slug: 'startup-advisory',
      summary: 'From incorporation to funding rounds, we provide the legal framework for your startup\'s success.',
    },
    {
      title: 'NCLT Practice',
      description: 'Navigating corporate legal matters requires expertise and precision. Our NCLT National...',
      slug: 'nclt-practice',
      summary: 'Representation in matters of corporate insolvency, mergers, and shareholder disputes before the NCLT.',
    },
    {
      title: 'Estate Planning, Trusts and Succession Law',
      description: 'Estate planning, trusts, and succession law are the essential things required for transferring...',
      slug: 'estate-planning',
      summary: 'Securing your legacy through meticulous planning of wills, trusts, and inheritance.',
    },
    {
      title: 'Writ Litigation',
      description: 'Writ Litigation is one of the prominent provisions when seeking for justice against the...',
      slug: 'writ-litigation',
      summary: 'Filing writ petitions to enforce fundamental rights against administrative or governmental actions.',
    },
    {
      title: 'NRI Services',
      description: 'At GSLO, we\'re all about helping Non-Resident Indians (NRIs) tackle the tricky world of legal...',
      slug: 'nri-services',
      summary: 'Dedicated legal assistance for Non-Resident Indians on property, investment, and family matters in India.',
    },
    {
      title: 'Supreme Court Practice',
      description: 'GSLO Supreme Court Practice is an unparalleled asset of legal representation at the Supreme...',
      slug: 'supreme-court-practice',
      summary: 'Expert representation and strategic counsel for matters before the Supreme Court of India.',
    },
    {
      title: 'RERA Compliance',
      description: 'For developers, investors, and homebuyers, navigating the complexities of real estate...',
      slug: 'rera-compliance',
      summary: 'Ensuring compliance with the Real Estate (Regulation and Development) Act for all stakeholders.',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-16 px-8">
        <div className="max-w-[1400px] mx-auto relative">
          <div className="flex items-start justify-between">
            <motion.h1
              className="text-5xl md:text-6xl font-light tracking-tight text-gray-900"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Services Listing
            </motion.h1>

            {/* Decorative Line Art */}
            <motion.div
              className="hidden lg:flex items-center gap-8 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="w-32 h-px bg-gray-300" />
              <div className="w-24 h-48 border-l-2 border-r-2 border-gray-300 rounded-t-full" />
              <div className="w-20 h-32 border-l-2 border-r-2 border-gray-300 rounded-t-full" />
              <motion.div
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={20} className="text-gray-400" />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Underline Image */}
          <div 
            className="absolute -bottom-8 left-0 w-full h-16 bg-no-repeat bg-left-bottom"
            style={{
              backgroundImage: 'url(/images/trees_underline.png)',
              backgroundSize: 'contain'
            }}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service: Service, index: number) => (
              <motion.div
                key={index}
                className="group relative bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gray-900 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                variants={cardVariants}
              >
                {/* Visible Content */}
                <div className="transition-all duration-300 group-hover:opacity-20 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-normal text-gray-900 mb-4 tracking-tight">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                        {service.description}
                    </p>
                    <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm text-gray-900 font-normal hover:gap-3"
                    >
                        <span className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-gray-900 rounded-full" />
                        View Detail
                        </span>
                    </Link>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 p-8 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-base font-light mb-6">
                    {service.summary}
                  </p>
                  <Link
                      href={`/pages/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-white font-normal border border-white/50 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
                  >
                      Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
