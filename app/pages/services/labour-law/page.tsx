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

export default function LabourLawPage(): JSX.Element {
  
  // Data specific to Labour Law
  const whyChooseUsItems = [
    { title: "Dual Representation Expertise", description: "We offer balanced and insightful legal counsel to both employers and employees." },
    { title: "Proactive Compliance Audits", description: "Our team helps businesses stay ahead of regulatory changes with comprehensive compliance checks." },
    { title: "Strong Negotiation & Litigation", description: "Skilled in both amicable settlements and aggressive courtroom representation to protect your interests." },
    { title: "In-depth Policy Drafting", description: "We draft clear, compliant, and enforceable employment policies, contracts, and handbooks." },
  ];

  const includedServices = [
    { title: "Employment Contracts" },
    { title: "Workplace Discrimination" },
    { title: "Wrongful Termination" },
    { title: "Industrial Disputes" },
    { title: "Collective Bargaining" },
    { title: "Safety Compliance (OSHA)" },
  ];

  const faqs = [
    { question: "What are my basic rights as an employee in India?", answer: "As an employee, you are entitled to a safe work environment, timely payment of wages, prescribed work hours, and protection against discrimination and harassment. Specific rights can vary based on your employment contract and applicable state laws." },
    { question: "What constitutes wrongful termination?", answer: "Wrongful termination occurs if an employer fires an employee for illegal reasons, such as discrimination (based on gender, age, religion, etc.), in retaliation for reporting illegal activities (whistleblowing), or in breach of an employment contract." },
    { question: "How can I address workplace harassment?", answer: "The first step is to report the harassment to your HR department or a designated authority as per your company's policy. If the issue is not resolved internally, you may file a formal complaint with the appropriate government body. It is advisable to consult a lawyer to guide you through the process." },
  ];

  const relatedServices = [
    { title: "Debt Recovery", slug: "debt-recovery" },
    { title: "Consumer Law", slug: "consumer-law" },
    { title: "NRI Services", slug: "nri-services" },
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
                Labour Law: Guaranteeing<br/>Fairness and Workers' Rights
            </motion.h1>
            <motion.p 
                className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                From contract disputes to workplace safety, we ensure the rights and obligations of both employers and employees are upheld with clarity and fairness.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                    Request a Consultation
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
                <h2 className="text-3xl font-light text-gray-900 mb-6">About Labour Law</h2>
                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                    <p>Labour law, also known as employment law, is the body of laws, administrative rulings, and precedents which address the legal rights of, and restrictions on, working people and their organizations. It governs the relationship between employers, employees, and trade unions.</p>
                    <p>Our expertise covers all aspects of this relationship, from drafting employment contracts and ensuring regulatory compliance to representing clients in disputes over wages, termination, and workplace conditions. We aim to foster fair and productive work environments.</p>
                </div>
            </motion.div>
            {/* <motion.div 
                className="relative h-80 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <Image src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800" alt="Team meeting in an office" fill className="object-cover" />
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect with us</h3>
                <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <textarea placeholder="Your Message" rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">Send Message</button>
                </form>
            </motion.div>
        </div>
      </Section>

      {/* Services Included */}
      <Section>
        <SectionTitle>Services Included in Labour Law</SectionTitle>
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
        <SectionTitle>What Are My Rights as an Employee? Find Out Here!</SectionTitle>
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
