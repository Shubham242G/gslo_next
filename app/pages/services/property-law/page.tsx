'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, JSX } from 'react';

// Reusable components (can be extracted to a separate file)
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 text-center">
        {children}
    </h2>
);

export default function CriminalLitigationPage(): JSX.Element {
  
  // Data specific to Criminal Litigation
  const whyChooseUsItems = [
    { title: "Strategic Defense Planning", description: "We meticulously analyze evidence to build a robust defense strategy tailored to your case." },
    { title: "Aggressive Courtroom Representation", description: "Our experienced litigators are formidable advocates in the courtroom, protecting your rights." },
    { title: "Bail and Anticipatory Bail Expertise", description: "We have a strong track record in securing timely bail and anticipatory bail for our clients." },
    { title: "Confidential & Discreet Counsel", description: "We handle every case with the utmost confidentiality and professional discretion." },
  ];

  const includedServices = [
    { title: "Bail & Anticipatory Bail" },
    { title: "Evidence Analysis" },
    { title: "Cybercrime Defense" },
    { title: "Criminal Appeals" },
    { title: "White-Collar Crime" },
    { title: "Domestic Violence Defense" },
  ];

  const faqs = [
    { question: "What should I do if I'm arrested or charged with a crime?", answer: "The most critical first step is to exercise your right to remain silent and immediately contact an experienced criminal defense lawyer. Do not speak to the police or any investigators without your lawyer present." },
    { question: "What is the difference between bail and anticipatory bail?", answer: "Bail is sought after an arrest to secure release from custody. Anticipatory bail is a pre-emptive measure sought when you have reason to believe you may be arrested for a non-bailable offense." },
    { question: "Can a criminal conviction be appealed?", answer: "Yes, you have the right to appeal a conviction. An appeal is not a retrial but a review of the trial court's proceedings for legal errors that may have affected the outcome of your case." },
  ];

  const relatedServices = [
    { title: "Family Law", slug: "family-law" },
    { title: "NCLT Practice", slug: "nclt-practice" },
    { title: "Startup Advisory", slug: "startup-advisory" },
  ];

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="relative bg-gray-50 pt-36 pb-24 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-8">
            <motion.h1 
                className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Criminal Litigation: A Guide to<br/>Legal Rights and Defense
            </motion.h1>
            <motion.p 
                className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Facing criminal charges requires a proactive and strategic defense. Our team provides robust representation to protect your freedom and future.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                    Get Legal Help Now
                </Link>
            </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-light text-gray-900 mb-6">About Criminal Litigation</h2>
                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                    <p>The Indian criminal justice system, based on the principles of presumption of innocence, navigates a complex journey from alleged offense to final judgment. It is a structured process involving investigation, trial, and adjudication, ensuring that every individual's rights are upheld.</p>
                    <p>Our firm is dedicated to guiding clients through this intricate process, offering strategic defense and unwavering support at every stage, from police investigations and bail hearings to trial and appeals.</p>
                </div>
            </motion.div>
            {/* <motion.div 
                className="relative h-80 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <Image src="https://images.unsplash.com/photo-1605664042212-75b85c35c344?w=800" alt="Gavel and law books" fill className="object-cover" />
            </motion.div> */}
        </div>
      </Section>
      
      {/* Why Choose GSLO & Contact Form */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="text-3xl font-light text-gray-900 mb-10">Why Choose GSLO?</h2>
                <div className="space-y-8">
                    {whyChooseUsItems.map((item, index) => (
                        <motion.div 
                            key={index}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="w-10 h-10 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">{index + 1}</div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Request a Case Evaluation</h3>
                <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <textarea placeholder="Briefly describe your case" rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">Submit Request</button>
                </form>
            </motion.div>
        </div>
      </Section>

      {/* Services Included */}
      <Section>
        <SectionTitle>Services Included in Criminal Litigation</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {includedServices.map((service, index) => (
                <motion.div 
                    key={index} 
                    className="bg-gray-100 p-6 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-gray-50">
        <SectionTitle>Related Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
                <motion.div
                    key={index}
                    className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <Link href={`/services/${service.slug}`} className="font-semibold text-blue-600 hover:underline">
                        Learn More
                    </Link>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionTitle>Criminal Appeal Process: Answers You Need</SectionTitle>
        <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        className="w-full flex justify-between items-center p-5 text-left font-semibold"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                        {faq.question}
                        {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                    </button>
                    <AnimatePresence>
                        {openFaq === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="p-5 pt-0 text-gray-600">{faq.answer}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
      </Section>
      
    </div>
  );
}
