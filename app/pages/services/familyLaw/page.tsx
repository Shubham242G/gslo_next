'use client';

import { motion } from 'framer-motion';
// Icons relevant to Debt Recovery
import { Briefcase, Milestone, HandCoins } from 'lucide-react'; 
import Image from 'next/image';
import { useState, JSX } from 'react';

// --- Reusable Section Component ---
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function DebtRecoveryPage(): JSX.Element {
  
  // --- Data for Debt Recovery ---
  const whyChooseUsItems = [
    { icon: Briefcase, title: "Customized Recovery Strategies", description: "We tailor our approach based on the debt amount, debtor's history, and your business relationship." },
    { icon: Milestone, title: "High Success Rate", description: "Our firm has a proven track record of successfully recovering debts for a diverse range of clients." },
    { icon: HandCoins, title: "Pre-Litigation Expertise", description: "We emphasize resolving matters through negotiation before resorting to costly litigation." },
  ];

  const includedServices = [
    { title: "Debt Assessment & Strategy", description: "Analyzing the debt and formulating a clear recovery plan." },
    { title: "Legal Proceedings", description: "Filing civil suits or insolvency petitions as required." },
    { title: "Negotiation and Settlement", description: "Expert negotiation to secure payment without a lengthy trial." },
    { title: "Tracing and Asset Recovery", description: "Locating debtor assets to enforce judgments." },
    { title: "Insolvency Petitions", description: "Utilizing the IBC framework for corporate debtors." },
    { title: "Enforcement of Decrees", description: "Ensuring court orders for payment are successfully executed." },
  ];

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
                Debt Recovery Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unpaid debts can cripple cash flow and hinder growth. We provide strategic, ethical, and effective legal solutions to recover what's rightfully yours.
            </p>
        </motion.div>
      </Section>

      {/* --- About Section --- */}
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
                  alt="Financial documents, a calculator, and a pen" 
                  layout="fill" 
                  className="object-cover" 
                /> */}
            </motion.div> 
            
            {/* Text on the Right */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6">Restoring Your Financial Health</h2>
                <div className="space-y-6 text-gray-600 text-base leading-relaxed">
                    <p>Debt recovery is the legal process of collecting outstanding payments from individuals or businesses. A structured legal approach is essential for ensuring that creditors can reclaim their funds in a timely and lawful manner, thereby maintaining financial stability and operational health.</p>
                    <p>Our firm specializes in both commercial and individual debt recovery. We utilize a range of legal tools—from demand notices and negotiation to civil suits and insolvency proceedings—all while adhering to the highest ethical standards to protect our clients' reputations.</p>
                </div>
            </motion.div>
        </div>
      </Section>
      
      {/* --- Why Choose GSLO --- */}
      <Section className="bg-[#F7F3EE]">
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Why Entrust Us with Your Recovery?</h2>
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
        <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-16">Our Debt Recovery Services</h2>
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
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6">Initiate Your Debt Recovery Process</h2>
            <p className="text-lg text-gray-600 mb-10">Don't let outstanding debts affect your bottom line. Contact us for a consultation on the best strategy to recover your funds.</p>
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
                    <textarea placeholder="Briefly describe the debt and amount" rows={5} className="w-full p-4 border border-gray-300 rounded-md"></textarea>
                    <button type="submit" className="w-full bg-[#B8860B] text-white p-4 rounded-md font-bold text-lg hover:bg-opacity-90">Request Consultation</button>
                </form>
            </motion.div>
        </div>
      </Section>
    </div>
  );
}
