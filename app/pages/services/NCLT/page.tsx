'use client';

import { motion } from 'framer-motion';
// Icons relevant to NCLT & Corporate Law
import { Landmark, Shield, Briefcase } from 'lucide-react'; 
import Image from 'next/image';
import { useState, JSX } from 'react';

// --- Reusable Section Component ---
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function NCLTPage(): JSX.Element {
  
  // --- Data for NCLT & Corporate Law ---
  const whyChooseUsItems = [
    { icon: Landmark, title: "Deep Domain Expertise", description: "In-depth knowledge of the Insolvency and Bankruptcy Code (IBC) and corporate law." },
    { icon: Shield, title: "Strategic Representation", description: "Representing both creditors and corporate debtors with tailored legal strategies." },
    { icon: Briefcase, title: "Proven Track Record", description: "A history of successful outcomes in complex corporate insolvency and restructuring cases." },
  ];

  const includedServices = [
    { title: "Insolvency Proceedings (CIRP)", description: "Guiding companies through the Corporate Insolvency Resolution Process." },
    { title: "Mergers & Amalgamations", description: "Advising on and securing NCLT approval for corporate restructuring." },
    { title: "Shareholder Disputes", description: "Representing clients in matters of oppression and mismanagement." },
    { title: "Creditor & Debtor Representation", description: "Advocating for the rights of both financial and operational creditors." },
    { title: "Voluntary Liquidation", description: "Assisting companies with the process of winding up affairs." },
    { title: "Restructuring & Turnaround", description: "Developing strategies for financial revival and operational stability." },
  ];

  return (
    <div className="bg-[#FDFCFB] text-[#4a4a4a] font-serif">
      
      {/* --- Hero Section --- */}
      <Section>
        <div className="grid md:grid-cols-2 gap-20 items-center">
            
            {/* Image on the Left */}
            <motion.div 
                className="relative h-[500px] rounded-md overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            >
                <Image 
                  src="/path-to-your-nclt-image.jpg" // **REPLACE THIS with the actual image path**
                  alt="A modern corporate building, representing NCLT and corporate law" 
                  layout="fill" 
                  className="object-cover" 
                />
            </motion.div> 
            
            {/* Text on the Right */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            >
                <p className="text-[#B8860B] font-medium mb-4">A GSLO Practice Area</p>
                <h1 className="text-5xl md:text-7xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                    NCLT & Corporate Law
                </h1>
                <p className="text-lg text-gray-600">
                  We provide expert navigation through the complex landscape of corporate law, insolvency, and restructuring before the National Company Law Tribunal (NCLT).
                </p>
            </motion.div>
        </div>
      </Section>
      
      {/* --- Why Choose GSLO --- */}
      <Section className="bg-[#F7F3EE]">
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Your Trusted Corporate Counsel</h2>
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
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Our NCLT & Corporate Law Services</h2>
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

       {/* --- Contact Form Section --- */}
      <Section className="bg-[#F7F3EE]">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6">Discuss Your Corporate Matter</h2>
            <p className="text-lg text-gray-600 mb-10">Whether facing insolvency or planning a merger, our expert team is ready to provide strategic legal guidance. Contact us for a confidential consultation.</p>
            <motion.div 
                className="bg-white p-10 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <form className="space-y-5">
                    <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-md" />
                    <input type="email" placeholder="Your Corporate Email" className="w-full p-4 border border-gray-300 rounded-md" />
                    <textarea placeholder="Briefly describe your legal query" rows={5} className="w-full p-4 border border-gray-300 rounded-md"></textarea>
                    <button type="submit" className="w-full bg-[#B8860B] text-white p-4 rounded-md font-bold text-lg hover:bg-opacity-90">Request a Consultation</button>
                </form>
            </motion.div>
        </div>
      </Section>
    </div>
  );
}
