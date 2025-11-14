'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { JSX } from 'react';
import ContactForm from '../../components/contactForm';

const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function ContactUsPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#050610] text-white relative">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-0"
        style={{ 
          backgroundImage: "url('/assets/contact.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/50 via-[#0a0e27]/60 to-[#050610]/70 z-0" />

      {/* Content */}
      <div className="relative z-10">

        {/* Main Contact Section - Centered Form */}
        <Section className="pb-24">
          <div className="flex flex-col items-center">

            {/* Contact Form - Centered */}
            <motion.div
              className="w-full max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ContactForm
                title="Send a Direct Message"
                formPlaceholders={{
                  name: "Your Name",
                  email: "Your Email",
                  phone: "Your Phone",
                  message: "How can we help you?",
                }}
                buttonText="Submit Your Request"
              />
            </motion.div>
          </div>
        </Section>
      </div>
    </div>
  );
}
