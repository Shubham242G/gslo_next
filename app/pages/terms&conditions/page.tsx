'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Check, FileText, Scale, Gavel } from 'lucide-react';
import Link from 'next/link';
import { JSX } from 'react';

// Reusable components for this page
const Section = ({ children, className = '', id = '' }: { 
  children: React.ReactNode; 
  className?: string;
  id?: string;  // Add this line
}) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center">
    {children}
  </h2>
);

export default function TermsConditionsPage(): JSX.Element {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-black pt-48 pb-40 text-center overflow-hidden">
        {/* VIDEO BACKGROUND */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://ik.imagekit.io/f3plnz4hj/hero.mp4?updatedAt=1763148853428"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <FileText className="w-6 h-6" />
              <span className="text-lg font-medium">Terms & Conditions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              Legal Terms of Service
            </h1>

            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Our binding agreement that governs your use of GSLO.in services and website. 
              Last updated February 24, 2026.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <Link
                href="/pages/contactUs"
                className="
                  inline-flex items-center gap-3 px-8 py-3 
                  border border-white/40 
                  text-white text-lg 
                  rounded-full 
                  backdrop-blur-sm
                  transition-all duration-300 
                  hover:border-white 
                  hover:bg-white/10 
                  hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
                "
              >
                Contact Legal Team <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Last Updated & Table of Contents */}
      <Section className="border-b border-gray-700/50">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm mb-2">Effective Date: February 24, 2026</p>
          <p className="text-gray-500 text-xs">Last Modified: February 24, 2026</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <a href="#section-1" className="group p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#B8860B]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8860B]/40 transition-colors">
                <span className="text-[#B8860B] font-mono text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Introduction</h3>
                <p className="text-gray-400 text-sm">Welcome and agreement overview</p>
              </div>
            </div>
          </a>
          <a href="#section-2" className="group p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#B8860B]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8860B]/40 transition-colors">
                <span className="text-[#B8860B] font-mono text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Services Scope</h3>
                <p className="text-gray-400 text-sm">What we provide and limitations</p>
              </div>
            </div>
          </a>
          <a href="#section-3" className="group p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#B8860B]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8860B]/40 transition-colors">
                <span className="text-[#B8860B] font-mono text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">User Responsibilities</h3>
                <p className="text-gray-400 text-sm">Your obligations and conduct</p>
              </div>
            </div>
          </a>
        </div>
      </Section>

      {/* Section 1: Introduction */}
      <Section id="section-1">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-6 mb-8"
          >
            <div className="w-12 h-12 bg-[#B8860B]/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-2">
              <Gavel className="w-6 h-6 text-[#B8860B]" />
            </div>
            <div>
              <h2 className="text-4xl font-light text-white mb-2">1. Introduction</h2>
              <p className="text-gray-400 text-lg">These Terms and Conditions constitute a legally binding agreement between you and GSLO Law Office.</p>
            </div>
          </motion.div>

          <div className="space-y-8 text-lg leading-relaxed">
            <div className="bg-gray-900/50 border border-gray-700 p-8 rounded-2xl">
              <p className="text-gray-300 mb-6">
                GSLO.in ("Website", "we", "us", "our") is owned and operated by GSLO Law Office, a full-service law firm 
                providing legal consultation, advisory services, and representation across multiple practice areas.
              </p>
              <p className="text-gray-300 mb-6">
                By accessing this Website or using any services offered through it, you agree to be bound by these Terms. 
                If you do not agree, you must not use this Website.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li><Check className="w-5 h-5 inline mr-3 text-[#B8860B] flex-shrink-0" />Acceptance creates a contractual relationship</li>
                <li><Check className="w-5 h-5 inline mr-3 text-[#B8860B] flex-shrink-0" />Modifications require your continued use constitutes acceptance</li>
                <li><Check className="w-5 h-5 inline mr-3 text-[#B8860B] flex-shrink-0" />Governed by laws of India</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 2: Services */}
      <Section className="bg-black" id="section-2">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-6 mb-8"
          >
            <div className="w-12 h-12 bg-[#B8860B]/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-2">
              <Scale className="w-6 h-6 text-[#B8860B]" />
            </div>
            <div>
              <h2 className="text-4xl font-light text-white mb-2">2. Services Scope</h2>
              <p className="text-gray-400 text-lg">Clear definition of what constitutes our professional services.</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              className="bg-gray-900/50 border border-gray-700 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <FileText className="w-7 h-7" /> What We Provide
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Initial legal consultations and case evaluations</li>
                <li>• Legal research and preliminary advisory opinions</li>
                <li>• Document review and basic drafting services</li>
                <li>• Court representation and litigation support</li>
                <li>• Alternative dispute resolution facilitation</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gray-900/50 border border-gray-700 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <FileText className="w-7 h-7" /> What We Do Not Provide
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Guaranteed legal outcomes or results</li>
                <li>• Emergency legal services outside business hours</li>
                <li>• Representation without formal engagement letter</li>
                <li>• Legal services in jurisdictions where unlicensed</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Section 3: User Responsibilities */}
      <Section id="section-3">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-6 mb-8"
          >
            <div className="w-12 h-12 bg-[#B8860B]/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-2">
              <Check className="w-6 h-6 text-[#B8860B]" />
            </div>
            <div>
              <h2 className="text-4xl font-light text-white mb-2">3. User Responsibilities</h2>
              <p className="text-gray-400 text-lg">Your obligations to ensure productive legal engagement.</p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-[#B8860B]/20 p-8 rounded-2xl">
              <h4 className="text-2xl font-semibold text-white mb-6">Information Accuracy</h4>
              <p className="text-gray-300 leading-relaxed">
                You agree to provide complete, accurate, and truthful information. Any material misrepresentation may result 
                in termination of services and potential legal consequences.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-[#B8860B]/20 p-8 rounded-2xl">
              <h4 className="text-2xl font-semibold text-white mb-6">Timely Communication</h4>
              <p className="text-gray-300 leading-relaxed">
                You must respond to our communications within reasonable timeframes and meet agreed deadlines. 
                Delays attributable to you may affect case outcomes.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-900/70 to-gray-800/70 border border-[#B8860B]/20 p-8 rounded-2xl">
              <h4 className="text-2xl font-semibold text-white mb-6">Payment Obligations</h4>
              <p className="text-gray-300 leading-relaxed">
                All fees are due as specified in engagement agreements. Late payments incur statutory interest and 
                may result in suspension of services.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Final Section: Governing Law & Contact */}
      <Section className="bg-black border-t border-gray-700/50">
        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle>Governing Law & Jurisdiction</SectionTitle>
          
          <div className="bg-gradient-to-b from-gray-900/50 to-black/50 border border-gray-700 p-12 rounded-3xl backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-12">
              <div className="text-left">
                <h3 className="text-3xl font-semibold text-white mb-4">Jurisdiction</h3>
                <p className="text-gray-400 mb-4">Exclusive jurisdiction of courts in Delhi, India</p>
                <p className="text-gray-400 mb-4">Governed by laws of the Republic of India</p>
                <p className="text-sm text-gray-500">Dispute resolution through arbitration preferred</p>
              </div>
              
              <div className="w-px h-48 bg-gray-700 hidden md:block"></div>
              
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full border border-white/20 mb-6">
                  <Gavel className="w-5 h-5" />
                  <span>Legally Binding</span>
                </div>
                <Link href="/pages/contactUs" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#B8860B] to-[#B8860B]/90 text-black font-semibold rounded-2xl hover:shadow-[0_0_25px_rgba(184,134,11,0.4)] transition-all duration-300">
                  Seek Legal Advice <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <p className="text-gray-500 mt-12 text-sm">
            © 2026 GSLO Law Office. All rights reserved. These terms may be updated periodically.
          </p>
        </div>
      </Section>
    </div>
  );
}
