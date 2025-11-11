'use client';

import { motion } from 'framer-motion';
// Icons relevant to Property Law
import { Home, LandPlot, FileSignature } from 'lucide-react'; 
import Image from 'next/image';
import { useState, JSX } from 'react';

// --- Reusable Section Component ---
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function PropertyLawPage(): JSX.Element {
  
  // --- Data for Property Law ---
  const whyChooseUsItems = [
    { icon: Home, title: "Thorough Due Diligence", description: "We conduct exhaustive title searches and property verification to ensure your investment is secure." },
    { icon: LandPlot, title: "Expertise in RERA Compliance", description: "Specialized knowledge of the Real Estate (Regulation and Development) Act to protect homebuyers." },
    { icon: FileSignature, title: "Seamless Transaction Management", description: "From drafting agreements to final registration, we manage every step of your property transaction." },
  ];

  const includedServices = [
    { title: "Property Due Diligence", description: "Verifying titles, encumbrances, and legal compliance of properties." },
    { title: "Sale & Purchase Agreements", description: "Drafting and vetting comprehensive real estate agreements." },
    { title: "RERA Compliance & Litigation", description: "Advising and representing clients in matters before RERA." },
    { title: "Lease & Rental Agreements", description: "Creating robust lease agreements for residential and commercial properties." },
    { title: "Landlord-Tenant Disputes", description: "Resolving conflicts related to rent, eviction, and maintenance." },
    { title: "Construction & Development Projects", description: "Providing legal oversight for real estate development." },
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
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800" 
                  alt="A modern house representing real estate" 
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
                    Property & Real Estate Law
                </h1>
                <p className="text-lg text-gray-600">
                  Whether buying your first home or developing a commercial project, our expert legal counsel ensures your real estate transactions are secure, compliant, and seamless.
                </p>
            </motion.div>
        </div>
      </Section>
      
      {/* --- Why Choose GSLO --- */}
      <Section className="bg-[#F7F3EE]">
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Your Foundation for Secure Investment</h2>
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
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Our Property Law Services</h2>
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
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6">Secure Your Property Transaction</h2>
            <p className="text-lg text-gray-600 mb-10">Ensure your real estate dealings are legally sound. Contact us for a consultation on due diligence, RERA compliance, or any property-related matter.</p>
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
                    <textarea placeholder="Briefly describe your property law needs" rows={5} className="w-full p-4 border border-gray-300 rounded-md"></textarea>
                    <button type="submit" className="w-full bg-[#B8860B] text-white p-4 rounded-md font-bold text-lg hover:bg-opacity-90">Request a Property Law Consultation</button>
                </form>
            </motion.div>
        </div>
      </Section>
    </div>
  );
}
