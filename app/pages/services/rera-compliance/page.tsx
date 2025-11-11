'use client';

import { motion } from 'framer-motion';
// Icons relevant to RERA Compliance
import { Building, Files, UserCheck } from 'lucide-react'; 
import Image from 'next/image';
import { JSX } from 'react';

// --- Reusable Section Component ---
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function RERACompliancePage(): JSX.Element {
  
  // --- Data for the RERA Compliance Page ---
  const whyChooseUsItems = [
    { icon: Building, title: "RERA Compliance Support", description: "We assist developers, investors, and homebuyers in meeting the legal requirements under the Real Estate (Regulation and Development) Act (RERA)." },
    { icon: Files, title: "Comprehensive Real Estate Analysis", description: "We cover legal, financial, and regulatory aspects in our assessment to help stakeholders understand risks and opportunities." },
    { icon: UserCheck, title: "Customized Support for Every Participant", description: "GSLO advises promoters, investors, and homebuyers at every stage, ensuring smooth and successful transactions." },
  ];

  const includedServices = [
    { title: "Comprehensive Due Diligence", description: "Conducting thorough real estate due diligence with our in-depth legal, financial, and regulatory reviews." },
    { title: "Stakeholder Specific Guidance", description: "Get promoter, investor, lender, and homebuyer specific advisory services from our experts." },
    { title: "Regulatory Insights by State", description: "Take advantage of our in-depth experience across India and knowledge of specific state RERA rules." },
    { title: "Transactional Advisory", description: "Professional advisory services for all real estate transactions, from drafting agreements to final registration." },
    { title: "Litigation Support", description: "Get legal support in resolving real estate disputes and litigation matters before RERA authorities." },
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
                  src="/path-to-your-rera-image.jpg" // Replace with your actual image path
                  alt="A modern building under construction, symbolizing RERA compliance" 
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
                    RERA Compliance
                </h1>
                <p className="text-lg text-gray-600">
                  For developers, investors, and homebuyers, navigating the complexities of real estate regulations is critical. Full compliance with RERA promotes transparency, accountability, and legal security.
                </p>
            </motion.div>
        </div>
      </Section>
      
      {/* --- Why Choose GSLO --- */}
      <Section className="bg-[#F7F3EE]">
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Why Choose GSLO for RERA Matters?</h2>
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
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Our RERA Compliance Services</h2>
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
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6">Consult Our RERA Experts Today</h2>
            <p className="text-lg text-gray-600 mb-10">Ensure your real estate projects are fully compliant and legally secure. Contact us for a consultation with our RERA specialists.</p>
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
                    <textarea placeholder="Briefly describe your RERA-related query" rows={5} className="w-full p-4 border border-gray-300 rounded-md"></textarea>
                    <button type="submit" className="w-full bg-[#B8860B] text-white p-4 rounded-md font-bold text-lg hover:bg-opacity-90">Request a RERA Consultation</button>
                </form>
            </motion.div>
        </div>
      </Section>
    </div>
  );
}
