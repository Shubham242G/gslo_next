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

export default function ConsumerLawPage(): JSX.Element {
  
  // Data specific to Consumer Law
  const whyChooseUsItems = [
    { title: "Expertise in Consumer Protection Act", description: "Deep understanding of the Consumer Protection Act, 2019 to champion your rights effectively." },
    { title: "Strategic Dispute Resolution", description: "Skilled in negotiation and litigation to resolve disputes with service providers and sellers." },
    { title: "Comprehensive Case Handling", description: "From filing the initial complaint to representing you in consumer forums, we manage the entire process." },
    { title: "Focus on Fair Compensation", description: "We aggressively pursue rightful compensation for financial loss, damages, and mental agony." },
  ];

  const includedServices = [
    { title: "Consumer Rights Protection" },
    { title: "Product Liability Claims" },
    { title: "Medical Negligence" },
    { title: "Dispute Resolution" },
    { title: "Warranty & E-commerce Issues" },
    { title: "Class Action Lawsuits" },
  ];

  const faqs = [
    { question: "What are my basic rights as a consumer?", answer: "As a consumer, you have the right to be protected against the marketing of goods and services which are hazardous to life and property, the right to be informed about the quality, quantity, potency, purity, standard, and price of goods or services, the right to choose, and the right to seek redressal against unfair trade practices." },
    { question: "How and where do I file a consumer complaint?", answer: "A complaint can be filed in the District, State, or National Consumer Disputes Redressal Commission, depending on the value of the goods or services and the compensation sought. The complaint can be filed by the consumer, any recognized consumer association, or a group of consumers with the same interest." },
    { question: "Is there a time limit for filing a consumer complaint?", answer: "Yes, a consumer complaint must be filed within two years from the date on which the cause of action has arisen. The consumer forum may entertain a complaint filed after this period if there is sufficient cause for the delay." },
  ];

  const relatedServices = [
    { title: "Estate Planning", slug: "estate-planning" },
    { title: "Intellectual Property", slug: "intellectual-property" },
    { title: "Supreme Court Practice", slug: "supreme-court-practice" },
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
                Consumer Laws: Protection of<br/>Consumer Rights and Fair Trade
            </motion.h1>
            <motion.p 
                className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Empowering consumers by defending their rights against unfair trade practices, defective products, and deficient services.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                    File a Complaint
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
                <h2 className="text-3xl font-light text-gray-900 mb-6">About Consumer Laws</h2>
                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                    <p>Consumer laws are designed to protect and empower consumers against anything from unfair prices to hazardous products. These regulations create a more equitable marketplace, ensuring that sellers and service providers are held accountable for their offerings.</p>
                    <p>The Consumer Protection Act, 2019, is the cornerstone of consumer rights in India, providing a three-tier quasi-judicial mechanism for speedy and simple redressal of consumer disputes. Our firm leverages this framework to ensure your rights as a consumer are vigorously defended.</p>
                </div>
            </motion.div>
            {/* <motion.div 
                className="relative h-80 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <Image src="https://images.unsplash.com/photo-1556742044-53331fe3a1f3?w=800" alt="Customer making a purchase" fill className="object-cover" />
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
        <SectionTitle>Services Included</SectionTitle>
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
        <SectionTitle>What Are My Rights as a Consumer? Find Out Here!</SectionTitle>
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
