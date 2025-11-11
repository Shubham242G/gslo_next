'use client';

import { motion } from 'framer-motion';
// Icons relevant to NRI Services
import { Globe, Home, Briefcase } from 'lucide-react'; 
import Image from 'next/image';
import { JSX } from 'react';

// --- Reusable Section Component ---
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function NRIServicesPage(): JSX.Element {
  
  // --- Data for the NRI Services Page ---
  const whyChooseUsItems = [
    { icon: Globe, title: "Expertise in International and Indian Legal Frameworks", description: "We have a comprehensive knowledge of both Indian and international legal systems, providing holistic and efficient provisions for our NRI clients." },
    { icon: Briefcase, title: "Personalized Legal Solutions", description: "We recognize that all NRIs face their own unique legal challenges. Our specialized team delivers easy-to-understand advice and tailor-made solutions." },
    { icon: Home, title: "Seamless Global Legal Representation", description: "Our efficient representation is achieved across several jurisdictions, both in India and abroad, delivering assistance to NRIs as speedily as possible." },
  ];

  const includedServices = [
    { title: "Property Transactions and Management", description: "GSLO is committed to facilitating property transactions for NRIs, such as acquisition, sale, leasing, and management, under Indian law." },
    { title: "Succession Planning and Will Drafting", description: "The concept of estate planning is popular with NRIs. GSLO understands this and therefore guides NRIs on this important matter." },
    { title: "Investment and Financial Guidance", description: "We provide strategic advice on investment in Indian markets, including stocks, bonds, and real estate, along with tax planning." },
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
                  src="/path-to-your-nri-services-image.jpg" // Replace with your actual image path
                  alt="A globe and a passport, symbolizing NRI services" 
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
                    Seamless Legal Solutions for NRIs: Protecting Your Interests in India
                </h1>
                <p className="text-lg text-gray-600">
                  At GSLO, we're all about helping Non-Resident Indians (NRIs) tackle the tricky world of legal, financial, and property issues in India. We offer smart, customized solutions to safeguard your rights and interests.
                </p>
            </motion.div>
        </div>
      </Section>
      
      {/* --- Why Choose GSLO --- */}
      <Section className="bg-[#F7F3EE]">
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Why Choose GSLO for NRI Services?</h2>
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
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Our NRI Services</h2>
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
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6">Connect With Us</h2>
            <p className="text-lg text-gray-600 mb-10">Living abroad doesn't mean you have to manage your Indian affairs alone. Contact us today for seamless legal support.</p>
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
                    <textarea placeholder="Briefly describe your legal needs in India" rows={5} className="w-full p-4 border border-gray-300 rounded-md"></textarea>
                    <button type="submit" className="w-full bg-[#B8860B] text-white p-4 rounded-md font-bold text-lg hover:bg-opacity-90">Contact Us Today!</button>
                </form>
            </motion.div>
        </div>
      </Section>
    </div>
  );
}
