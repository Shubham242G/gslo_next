'use client';

import { motion } from 'framer-motion';
// Icons relevant to Supreme Court Practice
import { Scale, Landmark, FileText } from 'lucide-react'; 
import Image from 'next/image';
import { useState, JSX } from 'react';

// --- Reusable Section Component ---
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function SupremeCourtPage(): JSX.Element {
  
  // --- Data for Supreme Court Practice ---
  const whyChooseUsItems = [
    { icon: Scale, title: "Unparalleled Legal Expertise", description: "Our lawyers possess a deep and nuanced understanding of Supreme Court procedures and jurisprudence." },
    { icon: Landmark, title: "Strategic Case Presentation", description: "We are masters of oral arguments and written submissions, presenting your case with clarity and conviction." },
    { icon: FileText, title: "Meticulous Research & Drafting", description: "Every petition and argument is built on a foundation of exhaustive legal research and precise drafting." },
  ];

  const includedServices = [
    { title: "Special Leave Petitions (SLPs)", description: "Seeking leave from the Supreme Court to appeal against any judgment or order." },
    { title: "Writ Petitions", description: "Filing petitions to enforce fundamental rights under Article 32 of the Constitution." },
    { title: "Constitutional Law Matters", description: "Handling cases that involve significant questions of constitutional interpretation." },
    { title: "Civil & Criminal Appeals", description: "Representing clients in appeals against High Court judgments." },
    { title: "Public Interest Litigations (PILs)", description: "Advocating for matters of public importance before the nation's highest court." },
    { title: "Advisory Jurisdiction", description: "Assisting in matters where the President of India seeks the opinion of the Supreme Court." },
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
                  src="/path-to-your-supreme-court-image.jpg" // **REPLACE THIS with the actual image path**
                  alt="The Supreme Court of India building" 
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
                    Supreme Court Practice
                </h1>
                <p className="text-lg text-gray-600">
                  GSLO Supreme Court Practice is an unparalleled asset of legal representation at the Supreme Court of India, the highest court of the land and the highest judicial forum in India.
                </p>
            </motion.div>
        </div>
      </Section>
      
      {/* --- Why Choose GSLO --- */}
      <Section className="bg-[#F7F3EE]">
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Why Choose GSLO for Supreme Court Matters?</h2>
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
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Our Supreme Court Practice Areas</h2>
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
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6">Seek Representation at the Highest Level</h2>
            <p className="text-lg text-gray-600 mb-10">Matters before the Supreme Court require the highest level of legal expertise. Contact us for a consultation to discuss your case.</p>
            <motion.div 
                className="bg-white p-10 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <form className="space-y-5">
                    <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-md" />
                    <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-md" />
                    <textarea placeholder="Briefly describe your case and its history" rows={5} className="w-full p-4 border border-gray-300 rounded-md"></textarea>
                    <button type="submit" className="w-full bg-[#B8860B] text-white p-4 rounded-md font-bold text-lg hover:bg-opacity-90">Request a Supreme Court Case Consultation</button>
                </form>
            </motion.div>
        </div>
      </Section>
    </div>
  );
}
