'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { JSX } from 'react';
import ContactForm from '../../components/contactForm'; // Assuming the form component path

// --- Reusable Section Component ---
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function ContactUsPage(): JSX.Element {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white">
      
      {/* --- Hero Section --- */}
      <Section className="text-center bg-black">
        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
        >
            <p className="text-[#B8860B] font-medium mb-4">Get in Touch</p>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
                Contact Our Legal Experts
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We are ready to listen. Reach out for a confidential consultation, and let us provide the strategic legal guidance you deserve.
            </p>
        </motion.div>
      </Section>

      {/* --- Main Contact Section --- */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* --- Video on the Left --- */}
            <motion.div 
                className="relative h-[700px] rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/assets/contact-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>

            {/* --- Contact Info & Form on the Right --- */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-white mb-6">Office Details</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-[#B8860B] flex-shrink-0 mt-1" />
                            <p className="text-gray-300">Plot No. 7, Fourth Floor, Arihant Nagar, Main Rohtak Road, Punjabi Bagh, New Delhi-110026</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-[#B8860B]" />
                            <a href="mailto:info@gslo.in" className="text-gray-300 hover:text-[#B8860B] transition-colors">info@gslo.in</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-[#B8860B]" />
                            <a href="tel:+918595650338" className="text-gray-300 hover:text-[#B8860B] transition-colors">+91 8595-650-338</a>
                        </div>
                    </div>
                </div>
                
                {/* Reusable Contact Form Component */}
                <ContactForm
                    title="Send a Direct Message"
                    formPlaceholders={{
                        name: "Your Name",
                        email: "Your Email",
                        phone: "Your Phone (Optional)",
                        message: "How can we help you?",
                    }}
                    buttonText="Submit Your Request"
                />
            </motion.div>
            
        </div>
      </Section>
    </div>
  );
}
