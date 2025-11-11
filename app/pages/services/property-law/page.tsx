'use client';

import { motion } from 'framer-motion';
// Icons relevant to Startup Advisory
import { Rocket, FileText, Scaling } from 'lucide-react'; 
import Image from 'next/image';
import { useState, JSX } from 'react';

// --- Reusable Section Component ---
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function StartupAdvisoryPage(): JSX.Element {
  
  // --- Data for Startup Advisory ---
  const whyChooseUsItems = [
    { icon: Rocket, title: "Founder-Focused Legal Advice", description: "We understand the startup hustle and provide practical, actionable legal advice that aligns with your vision." },
    { icon: FileText, title: "Robust Legal Documentation", description: "From shareholder agreements to ESOPs, we ensure your legal foundation is solid from day one." },
    { icon: Scaling, title: "Scalable Legal Solutions", description: "Our services grow with you, providing strategic counsel from seed stage to Series A and beyond." },
  ];

  const includedServices = [
    { title: "Company Incorporation", description: "Choosing and establishing the right legal structure for your startup." },
    { title: "Founder Agreements", description: "Drafting clear and fair agreements between co-founders." },
    { title: "Fundraising Legal Support", description: "Guiding you through term sheets, due diligence, and shareholder agreements." },
    { title: "ESOP & Equity Plans", description: "Designing and implementing employee stock ownership plans." },
    { title: "Contracts & Negotiations", description: "Drafting and negotiating vendor, client, and technology agreements." },
    { title: "Intellectual Property Protection", description: "Securing your trademarks, copyrights, and patents." },
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
                {/* <Image 
                  src="https://images.unsplash.com/photo-1556761175-57738c42b4a1?w=800" 
                  alt="A group of entrepreneurs collaborating on a startup idea" 
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
                    Startup Legal Advisory
                </h1>
                <p className="text-lg text-gray-600">
                  From incorporation to investment, we are the legal co-pilots for ambitious founders. Let us handle the legal complexities, so you can focus on building your vision.
                </p>
            </motion.div>
        </div>
      </Section>
      
      {/* --- Why Choose GSLO --- */}
      <Section className="bg-[#F7F3EE]">
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Why Founders Choose GSLO</h2>
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
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Our Startup Advisory Services</h2>
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
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6">Build Your Foundation with Us</h2>
            <p className="text-lg text-gray-600 mb-10">Ready to take the next step? Contact us for a consultation to discuss your startup's legal needs and how we can help you grow.</p>
            <motion.div 
                className="bg-white p-10 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <form className="space-y-5">
                    <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-md" />
                    <input type="email" placeholder="Your Business Email" className="w-full p-4 border border-gray-300 rounded-md" />
                    <textarea placeholder="Briefly describe your startup and legal needs" rows={5} className="w-full p-4 border border-gray-300 rounded-md"></textarea>
                    <button type="submit" className="w-full bg-[#B8860B] text-white p-4 rounded-md font-bold text-lg hover:bg-opacity-90">Book a Founder's Consultation</button>
                </form>
            </motion.div>
        </div>
      </Section>
    </div>
  );
}
