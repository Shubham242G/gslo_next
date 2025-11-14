'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { useState, JSX } from 'react';

export default function FamilyLawPage(): JSX.Element {

  const whyChooseUsItems = [
    { title: "Client-Centric Approach", description: "Our focus is on your needs, ensuring personalized and empathetic guidance." },
    { title: "Proven Track Record", description: "A history of successful outcomes and satisfied clients in complex family law cases." },
    { title: "Holistic Legal Solutions", description: "We consider all aspects of your situation to provide comprehensive legal strategies." },
    { title: "Experienced Legal Expertise", description: "Decades of combined experience in all facets of family law litigation and negotiation." },
  ];

  const includedServices = [
    { title: "Divorce and Separation" },
    { title: "Property Division" },
    { title: "Child Custody and Support" },
    { title: "Spousal Maintenance" },
    { title: "Adoption" },
    { title: "Domestic Violence" },
  ];

  const faqs = [
    { question: "What are the first steps in a divorce case?", answer: "The first step is to consult with an experienced family law attorney to understand your rights and options." },
    { question: "How is child custody determined during a divorce?", answer: "Courts determine custody based on the best interests of the child considering stability, preference, and parental involvement." },
    { question: "Can I modify a child support or custody order?", answer: "Yes, orders can be modified if there has been a substantial change in circumstances." },
  ];

  const relatedServices = [
    { title: "Writ Litigation", slug: "writ-litigation" },
    { title: "Supreme Court Practice", slug: "supreme-court-practice" },
    { title: "Debt Recovery", slug: "debt-recovery" },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#0b0f19] text-gray-100">

      {/* HERO SECTION (Estate Planning Style) */}
      <section
        className="relative bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] py-32 px-8 text-center"
        style={{
          backgroundImage: "url('/assets/family-law.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
            style={{ lineHeight: "1.15" }}
          >
            Family Law Demystified:<br /> Understanding Your Rights
          </motion.h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Navigating the complexities of family law can be overwhelming, but our experienced team is here to clarify your options and safeguard your interests.
          </p>

          {/* CTA JUST LIKE ESTATE PAGE */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="inline-block bg-[#1dd3b0] text-[#0b0f19] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition"
          >
            Schedule a Consultation
          </motion.a>
        </div>
      </section>

      {/* ABOUT FAMILY LAW */}
      <section className="py-20 px-8 bg-gradient-to-b from-[#111827] to-[#0b0f19]">
  <div className="max-w-5xl mx-auto flex justify-center items-center text-center">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      <h2 className="text-3xl font-light text-white mb-6">About Family Law</h2>

      <p className="text-gray-400 leading-relaxed mb-4">
        Family law is a specialized field that focuses on legal issues involving family relationships, including marriage, divorce, custody, adoption, and domestic matters.
      </p>

      <p className="text-gray-400 leading-relaxed">
        Our approach ensures resolutions that protect your interests while minimizing emotional and financial challenges.
      </p>
    </motion.div>
  </div>
</section>


    

      {/* SERVICES INCLUDED */}
      <section className="py-20 px-8 bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <h2 className="text-3xl font-light text-white text-center mb-12">Services Included</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {includedServices.map((service, i) => (
            <motion.div
              key={i}
              className="bg-[#1a2238] p-6 rounded-xl border border-white/10 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-20 px-8 bg-[#0b0f19]">
        <h2 className="text-3xl font-light text-white text-center mb-12">Related Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service, i) => (
            <motion.div
              key={i}
              className="bg-[#111827] p-8 rounded-xl border border-white/10 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <Link href={`/services/${service.slug}`} className="text-[#1dd3b0] font-semibold hover:underline">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
