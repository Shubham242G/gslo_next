'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, Gavel, Handshake, ScrollText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, JSX } from 'react';


// --- Reusable Components for this Design ---
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);


export default function ConsumerLawPageDesign3(): JSX.Element {
  
  // --- Data (Content remains the same) ---
  const whyChooseUsItems = [
    { icon: Gavel, title: "Deep Legal Acumen", description: "Expert knowledge of the Consumer Protection Act, 2019 to champion your rights." },
    { icon: Handshake, title: "Strategic Resolution", description: "Skilled in both negotiation and courtroom litigation to achieve the best outcome." },
    { icon: ScrollText, title: "Full-Service Handling", description: "We manage your case from the initial complaint to the final resolution." },
  ];

  const includedServices = [
    { title: "Consumer Rights Protection", description: "Defending your fundamental rights as a consumer." },
    { title: "Product Liability Claims", description: "Holding manufacturers accountable for defective products." },
    { title: "Medical Negligence", description: "Addressing failures in healthcare services." },
    { title: "Dispute Resolution", description: "Expert negotiation and mediation services." },
    { title: "E-commerce & Digital Issues", description: "Tackling legal challenges in the online marketplace." },
    { title: "Class Action Lawsuits", description: "Representing groups of consumers with similar grievances." },
  ];



  const relatedServices = [
    { title: "Estate Planning", slug: "estate-planning" },
    { title: "Intellectual Property", slug: "intellectual-property" },
    { title: "Supreme Court Practice", slug: "supreme-court-practice" },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);


  return (
    <div className="bg-[#FDFCFB] text-[#4a4a4a] font-serif">
      
      {/* --- Hero Section --- */}
      <Section className="text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
        >
            <p className="text-[#B8860B] font-medium mb-4">A GSLO Practice Area</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                Consumer Law Advocacy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ensuring fairness in the marketplace by protecting you from defective products, false advertising, and poor service.
            </p>
        </motion.div>
      </Section>


      {/* --- About Section --- */}
      <Section>
        <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
                className="relative h-[500px] rounded-md overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            >
                {/* <Image src="https://images.unsplash.com/photo-1556742044-53331fe3a1f3?w=800" alt="Customer making an informed purchase" layout="fill" className="object-cover" /> */}
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6">Your Advocate in the Marketplace</h2>
                <div className="space-y-6 text-gray-600 text-base leading-relaxed">
                    <p>Consumer law is the principle of fairness that governs commerce. It empowers you, the consumer, and holds businesses accountable for their promises. From the quality of goods to the transparency of services, these laws are your guarantee of a fair deal.</p>
                    <p>Our practice is built on a deep understanding of the Consumer Protection Act. We use this powerful legislation to defend your rights and ensure that justice is served, turning your consumer grievances into successful resolutions.</p>
                </div>
            </motion.div>
        </div>
      </Section>
      
      {/* --- Why Choose GSLO --- */}
      <Section className="bg-[#F7F3EE]">
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Why Partner with GSLO?</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
            {whyChooseUsItems.map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                    <div className="w-16 h-16 bg-[#B8860B] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </motion.div>
            ))}
        </div>
      </Section>


      {/* --- Services Included --- */}
      <Section>
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Our Consumer Law Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedServices.map((service, index) => (
                <motion.div 
                    key={index} 
                    className="bg-white p-8 rounded-lg border border-gray-200"
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm">{service.description}</p>
                </motion.div>
            ))}
        </div>
      </Section>

    </div>
  );
}

