'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

// Reusable components for this page
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center">
        {children}
    </h2>
);

export default function AboutUsPage(): JSX.Element {
  
  // Data for the page sections
  const stats = [
    { value: "17", label: "Years of Legal Experience" },
    { value: "98%", label: "Client Success Rate" },
    { value: "20+", label: "Areas of Law Expertise" },
  ];

  const values = [
    { title: "Client-First Approach", description: "Your objectives are our purpose. We tailor our legal strategies to your unique needs, ensuring that your goals are always at the forefront of our practice." },
    { title: "Unwavering Dedication", description: "We are relentlessly committed to achieving the best possible outcomes, navigating complex legal challenges with persistence and skill." },
    { title: "Transparent Communication", description: "We believe in open and honest communication, keeping you informed at every stage of the legal process and providing clarity in complex matters." },
    { title: "Strategic Legal Thinking", description: "Our team combines deep legal knowledge with creative problem-solving to develop innovative strategies that address your specific challenges." },
  ];

  const featuredServices = [
    { title: "Family Law", slug: "family-law" },
    { title: "Criminal Litigation", slug: "criminal-litigation" },
    { title: "Property Law", slug: "property-law" },
  ];

  return (
    <div className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="relative bg-gray-50 pt-40 pb-24 text-left overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
                    Your Objectives,<br/>Our Purpose.
                </h1>
                <p className="text-base md:text-lg text-gray-600 max-w-lg">
                    Customized legal services from a renowned law firm dedicated to simplifying complexities and achieving your goals.
                </p>
            </motion.div>
            <motion.div 
                className="hidden md:block"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Placeholder for the line art */}
                <svg width="100%" height="150" viewBox="0 0 300 150">
                    <path d="M 50 130 C 100 130, 100 20, 150 20 S 200 130, 250 130" stroke="#E5E7EB" strokeWidth="2" fill="none" />
                    <circle cx="150" cy="20" r="4" fill="#60A5FA" />
                </svg>
            </motion.div>
        </div>
      </section>

      {/* Firm Overview & Stats */}
      <Section>
        <div className="text-center mb-20">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Simplifying Legal Complexities, One Case at a Time</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
                At GSLO, we transform intricate legal challenges into clear, manageable paths forward. Our commitment to excellence and a client-centric approach has established us as a trusted partner for individuals and businesses alike.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
                <motion.div 
                    key={index} 
                    className="bg-gray-50 p-8 rounded-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                    <p className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</p>
                    <p className="text-gray-700">{stat.label}</p>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Our Values Section */}
      <Section className="bg-gray-50">
        <SectionTitle>Dedicated Justice Served - Our Core Values</SectionTitle>
        <div className="space-y-12">
            {values.map((value, index) => (
                <motion.div 
                    key={index}
                    className="grid md:grid-cols-3 gap-8 items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="md:col-span-1 flex items-center gap-4">
                        <Check className="w-8 h-8 text-blue-500 flex-shrink-0"/>
                        <h3 className="text-2xl font-semibold text-gray-800">{value.title}</h3>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Founder Section */}
      <Section>
        <SectionTitle>Meet Our Founder</SectionTitle>
        <div className="grid md:grid-cols-3 gap-16 items-center">
            {/* <motion.div 
                className="relative h-96 w-full rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <Image src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=800" alt="Gaurav Sharma, Founder" fill className="object-cover" />
            </motion.div> */}
            <motion.div 
                className="md:col-span-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">Gaurav Sharma</h3>
                <p className="text-blue-600 font-medium mb-6">Founder & Managing Partner</p>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Gaurav Sharma established GSLO with a vision to create a law firm that combines deep legal expertise with a genuine commitment to client success. With over 17 years of experience, he has earned a reputation as a formidable litigator and a trusted advisor.</p>
                    <p>His practice focuses on complex corporate litigation and advisory, but his passion lies in building lasting relationships with clients and mentoring the next generation of legal talent at the firm.</p>
                </div>
            </motion.div>
        </div>
      </Section>

      {/* Featured Services */}
      <Section className="bg-gray-50">
        <SectionTitle>Our Featured Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
                <motion.div
                    key={index}
                    className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <Link href={`/services/${service.slug}`} className="font-semibold text-blue-600 hover:underline">
                        Learn More
                    </Link>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="text-3xl font-light text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-8">We're here to help. Reach out to us for a consultation, and let's discuss how we can assist you with your legal needs.</p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">info@gslo.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">+91 123-456-7890</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">123 Legal Avenue, New Delhi, India</span>
                    </div>
                </div>
            </div>
            <motion.div 
                className="bg-gray-50 p-8 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <textarea placeholder="Your Message" rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">Submit</button>
                </form>
            </motion.div>
        </div>
      </Section>
      
    </div>
  );
}
