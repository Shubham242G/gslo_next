'use client';

import { motion } from 'framer-motion';
// Icons relevant to Estate Planning
import { Handshake, FileSignature, KeyRound } from 'lucide-react'; 
import Image from 'next/image';
import { JSX } from 'react';

// --- Reusable Section Component ---
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function EstatePlanningPage(): JSX.Element {
  
  // --- Data for the Estate Planning Page ---
  const whyChooseUsItems = [
    { icon: Handshake, title: "Comprehensive Legacy Planning", description: "We take a holistic view of legacy planning, addressing all aspects of wealth preservation, family governance, and asset distribution." },
    { icon: FileSignature, title: "Legal Documents Tailored to Your Needs", description: "We draft customized legal documents like wills, trusts, and family charters as per your needs, ensuring they are clear, compliant, and enforceable." },
    { icon: KeyRound, title: "Strategic Family Settlements", description: "Our innovative family wealth distribution strategies help avoid disputes and facilitate fair agreements, promoting peace and lasting financial prosperity." },
  ];

  const includedServices = [
    { title: "Comprehensive Estate Planning", description: "GSLO helps clients create comprehensive estate plans that include wills, trusts, and other important legal instruments." },
    { title: "Formation and Administration of Trusts", description: "We offer fiduciary services related to the formation and administration of trusts, ensuring they are developed and operated to meet your objectives." },
    { title: "Succession Planning", description: "We provide strategic advice to business families on succession planning, ensuring a smooth transition of leadership and ownership." },
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
                  src="/path-to-your-estate-planning-image.jpg" // Replace with your actual image path
                  alt="A family discussing their future, symbolizing estate planning" 
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
                    Secure Your Legacy: Expert Estate Planning & Succession Solutions
                </h1>
                <p className="text-lg text-gray-600">
                  Estate planning, trusts, and succession law are essential for transferring wealth more smoothly. Expert legal guidance helps you to minimize disputes, optimize tax benefits, and secure the financial future of your family.
                </p>
            </motion.div>
        </div>
      </Section>
      
      {/* --- Why Choose GSLO --- */}
      <Section className="bg-[#F7F3EE]">
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Why Choose GSLO for Estate Planning?</h2>
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
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Our Estate Planning & Succession Services</h2>
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
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6">Let's Discuss Your Options</h2>
            <p className="text-lg text-gray-600 mb-10">Secure your family's future and your peace of mind. Contact us to discuss your estate planning needs with our expert team.</p>
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
                    <textarea placeholder="Briefly describe your estate planning needs" rows={5} className="w-full p-4 border border-gray-300 rounded-md"></textarea>
                    <button type="submit" className="w-full bg-[#B8860B] text-white p-4 rounded-md font-bold text-lg hover:bg-opacity-90">Book a Consultation</button>
                </form>
            </motion.div>
        </div>
      </Section>
    </div>
  );
}
