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

export default function DebtRecoveryPage(): JSX.Element {
  
  // Data specific to Debt Recovery
  const whyChooseUsItems = [
    { title: "Customized Recovery Strategies", description: "We tailor our approach based on the debt amount, debtor's history, and your business relationship." },
    { title: "High Success Rate", description: "Our firm has a proven track record of successfully recovering debts for a diverse range of clients." },
    { title: "Pre-Litigation Expertise", description: "We emphasize resolving matters through negotiation and settlement before resorting to costly litigation." },
    { title: "Transparent and Ethical Process", description: "Our methods are always compliant with legal standards, ensuring your brand's reputation is protected." },
  ];

  const includedServices = [
    { title: "Debt Assessment & Strategy" },
    { title: "Legal Proceedings" },
    { title: "Negotiation and Settlement" },
    { title: "Tracing and Asset Recovery" },
    { title: "Insolvency Petitions" },
    { title: "Enforcement of Decrees" },
  ];

  const relatedServices = [
    { title: "Property Law", slug: "property-law" },
    { title: "Labour Law", slug: "labour-law" },
    { title: "Hospitality Law", slug: "hospitality-law" },
  ];

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-20 items-center">
            
            {/* Image on the Left */}
            <motion.div 
                className="relative h-[500px] rounded-md overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            >
                {/* <Image 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800" 
                  alt="Financial documents and a calculator symbolizing debt recovery" 
                  layout="fill" 
                  className="object-cover" 
                /> */}
            </motion.div> 
            
            {/* Text on the Right */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            >
                <p className="text-[#B8860B] font-medium mb-4">A GSLO Practice Area</p>
                <h1 className="text-5xl md:text-7xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                    Effective Debt Recovery Solutions
                </h1>
                <p className="text-lg text-gray-600">
                  Unpaid debts can cripple cash flow and hinder growth. We provide strategic, ethical, and effective legal solutions to recover your outstanding dues.
                </p>
            </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-light text-gray-900 mb-6">About Debt Recovery</h2>
                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                    <p>Debt recovery involves the legal process of collecting outstanding payments from individuals or businesses. A structured legal approach is essential for ensuring that creditors can reclaim their funds in a timely and lawful manner, thereby maintaining financial stability and operational health.</p>
                    <p>Our firm specializes in both commercial and individual debt recovery. We utilize a range of legal tools, from demand notices and negotiation to civil suits and insolvency proceedings, all while adhering to the highest ethical standards to protect our clients' reputations.</p>
                </div>
            </motion.div>
            {/* <motion.div 
                className="relative h-80 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <Image src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800" alt="Financial documents and a calculator" fill className="object-cover" />
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
        <SectionTitle>Services Included in Debt Recovery</SectionTitle>
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

      
    </div>
  );
}
