'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, JSX } from 'react';

// Reusable components (can be extracted to a separate file)
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 text-center">
        {children}
    </h2>
);

export default function StartupAdvisoryPage(): JSX.Element {
  
  // Data specific to Startup Advisory
  const whyChooseUsItems = [
    { title: "Founder-Focused Legal Advice", description: "We understand the startup hustle and provide practical, actionable legal advice for founders." },
    { title: "Scalable Legal Frameworks", description: "Our solutions are designed to grow with your business, from seed stage to series funding and beyond." },
    { title: "Full-Spectrum Startup Support", description: "We cover everything from incorporation and founder agreements to funding and IP protection." },
    { title: "Pragmatic & Cost-Effective", description: "We offer flexible and affordable legal services tailored to the lean budgets of early-stage startups." },
  ];

  const includedServices = [
    { title: "Business Structuring" },
    { title: "Fundraising Guidance" },
    { title: "Intellectual Property" },
    { title: "Contract Drafting" },
    { title: "Compliance Audits" },
    { title: "Risk Mitigation" },
  ];

  const faqs = [
    { question: "What is the best legal structure for my startup?", answer: "The most common legal structure for startups in India seeking funding is a Private Limited Company. This structure provides limited liability for its owners (shareholders), makes it easier to raise capital, and offers a clear ownership framework through shares." },
    { question: "What key agreements do I need when starting up?", answer: "At a minimum, you should have a Founders' Agreement (outlining roles, responsibilities, and equity), an Employment Agreement for key hires, and Non-Disclosure Agreements (NDAs) to protect your ideas when speaking with potential partners or investors." },
    { question: "How can I protect my startup's brand and idea?", answer: "Protecting your brand typically involves trademarking your name and logo. Protecting your core idea or invention may involve filing for a patent. It's crucial to have a clear IP strategy from day one, which includes using NDAs and having robust 'work-for-hire' clauses in employee and contractor agreements." },
  ];

  const relatedServices = [
    { title: "Consumer Law", slug: "consumer-law" },
    { title: "RERA Compliance", slug: "rera-compliance" },
    { title: "NCLT Litigation", slug: "nclt-litigation" },
  ];

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <section className="relative bg-gray-50 pt-36 pb-24 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-8">
            <motion.h1 
                className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Startup Advisory: Expert<br/>Guidance for Business Success
            </motion.h1>
            <motion.p 
                className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                From ideation to investment, we provide the legal backbone for your startup journey, ensuring you're structured for sustainable growth and success.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                    Get Startup Advice
                </Link>
            </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-light text-gray-900 mb-6">About Startup Advisory</h2>
                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                    <p>Startup advisory involves providing strategic legal and business guidance to early-stage companies. This specialized service helps founders navigate the complex landscape of incorporation, fundraising, intellectual property, and regulatory compliance, setting a solid foundation for future growth.</p>
                    <p>Our goal is to act as your strategic legal partner, anticipating challenges and creating opportunities. We provide proactive advice to help you avoid common pitfalls, protect your assets, and make informed decisions that align with your long-term vision.</p>
                </div>
            </motion.div>
            {/* <motion.div 
                className="relative h-80 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" alt="Startup team brainstorming" fill className="object-cover" />
            </motion.div> */}
        </div>
      </Section>
      
      {/* Why Choose GSLO & Contact Form */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="text-3xl font-light text-gray-900 mb-10">Why Choose GSLO?</h2>
                <div className="space-y-8">
                    {whyChooseUsItems.map((item, index) => (
                        <motion.div 
                            key={index}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="w-10 h-10 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">{index + 1}</div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect with us</h3>
                <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <textarea placeholder="Your Message" rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">Send Message</button>
                </form>
            </motion.div>
        </div>
      </Section>

      {/* Services Included */}
      <Section>
        <SectionTitle>Services Included in Startup Advisory</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {includedServices.map((service, index) => (
                <motion.div 
                    key={index} 
                    className="bg-gray-100 p-6 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-gray-50">
        <SectionTitle>Related Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
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

      {/* FAQ Section */}
      <Section>
        <SectionTitle>Questions related to your Startup? Your answers are here!</SectionTitle>
        <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        className="w-full flex justify-between items-center p-5 text-left font-semibold"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                        {faq.question}
                        {openFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                    </button>
                    <AnimatePresence>
                        {openFaq === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="p-5 pt-0 text-gray-600">{faq.answer}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
      </Section>
      
    </div>
  );
}
