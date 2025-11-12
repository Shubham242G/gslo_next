'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JSX } from 'react';

interface Service {
  title: string;
  description: string;
  slug: string;
  summary: string;
}

export default function ServicesPage(): JSX.Element {
  const services: Service[] = [
    {
      title: 'Family Law',
      description: 'Navigating the complexities of family law can be overwhelming, from provisions for divorce to child custody and adoption.',
      slug: 'familyLaw',
      summary: 'Comprehensive legal support for divorce, child custody, and marital property disputes.',
    },
    {
      title: 'Criminal Litigation',
      description: 'From the assertion of one\'s legal rights to formulating an effective defense, the complexities of criminal litigation can be very difficult to understand.',
      slug: 'criminal-litigation',
      summary: 'Expert defense in criminal cases, ensuring your rights are protected at every stage.',
    },
    {
      title: 'Property Law',
      description: 'Property Law deals with disputes relating to properties, ownership disputes, and breaches of contract, and ensures the balance of fairness.',
      slug: 'property-law',
      summary: 'Guidance on property transactions, ownership disputes, and real estate litigation.',
    },
    {
      title: 'Labour Law',
      description: 'Labour law is essential for protecting the rights of employees and outlining the responsibilities of employers. It ensures fair treatment and a safe working environment.',
      slug: 'labour-law',
      summary: 'Advising on employment contracts, workplace disputes, and statutory compliance for both employers and employees.',
    },
    {
      title: 'Consumer Law',
      description: 'It becomes challenging to comprehend and establish your consumer rights due to the intricate legal framework. We are here to simplify it for you.',
      slug: 'consumer-law',
      summary: 'Protecting consumers from unfair trade practices and defective goods or services.',
    },
    {
      title: 'Intellectual Property',
      description: 'Intellectual Property Rights (IPR) protect creations of the mind, including inventions, trademarks, and artistic works.',
      slug: 'intellectual-property',
      summary: 'Safeguarding your patents, trademarks, and copyrights to protect your valuable creations.',
    },
    {
      title: 'Hospitality Law',
      description: 'GSLO enables your comfortable navigation of the labyrinth of hospitality law while ensuring your business is compliant and protected.',
      slug: 'hospitality-law',
      summary: 'Specialized legal services for hotels, restaurants, and tourism businesses, covering licensing and regulatory issues.',
    },
    {
      title: 'Debt Recovery',
      description: 'Unpaid debts can disrupt cash flow and hinder business growth. Whether you\'re a business or an individual, we provide effective recovery solutions.',
      slug: 'debt-recovery',
      summary: 'Efficient and ethical legal solutions for recovering outstanding debts and managing credit risks.',
    },
    {
      title: 'Startup Advisory',
      description: 'Are you starting something new? With GSLO\'s expert advisory services, you can navigate the legal landscape with confidence.',
      slug: 'startup-advisory',
      summary: 'From incorporation to funding rounds, we provide the legal framework for your startup\'s success.',
    },
    {
      title: 'NCLT Practice',
      description: 'Navigating corporate legal matters requires expertise and precision. Our NCLT practice offers comprehensive solutions for businesses.',
      slug: 'NCLT',
      summary: 'Representation in matters of corporate insolvency, mergers, and shareholder disputes before the NCLT.',
    },
    {
      title: 'Estate Planning, Trusts & Succession Law',
      description: 'Estate planning, trusts, and succession law are essential for the smooth transfer of your assets to the next generation.',
      slug: 'estate-planning',
      summary: 'Securing your legacy through meticulous planning of wills, trusts, and inheritance.',
    },
    {
      title: 'Writ Litigation',
      description: 'Writ Litigation is one of the prominent provisions for seeking justice against administrative or governmental actions that infringe upon your rights.',
      slug: 'writ-litigation',
      summary: 'Filing writ petitions to enforce fundamental rights against administrative or governmental actions.',
    },
    {
      title: 'NRI Services',
      description: 'At GSLO, we are dedicated to helping Non-Resident Indians (NRIs) tackle the tricky world of legal and regulatory matters in India.',
      slug: 'nri-services',
      summary: 'Dedicated legal assistance for Non-Resident Indians on property, investment, and family matters in India.',
    },
    {
      title: 'Supreme Court Practice',
      description: 'GSLO Supreme Court Practice offers an unparalleled level of legal representation at the highest court in the nation.',
      slug: 'supreme-court-practice',
      summary: 'Expert representation and strategic counsel for matters before the Supreme Court of India.',
    },
    {
      title: 'RERA Compliance',
      description: 'For developers, investors, and homebuyers, navigating the complexities of real estate regulations is crucial for success.',
      slug: 'rera-compliance',
      summary: 'Ensuring compliance with the Real Estate (Regulation and Development) Act for all stakeholders.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative bg-black pt-48 pb-32 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-light tracking-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Areas of Expertise
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We provide comprehensive legal services across a wide range of practice areas, ensuring expert guidance for every legal challenge.
          </motion.p>
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
              <Link href={`/pages/services/${service.slug}`} key={index}>
                <motion.div
                  className="group relative bg-gray-900 border-2 border-gray-700 rounded-lg p-8 h-full hover:border-white hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-2xl font-normal text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-white font-normal group-hover:gap-3 transition-all">
                    <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    View Detail
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
