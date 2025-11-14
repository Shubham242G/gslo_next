'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { JSX } from 'react';

export default function HospitalityLawPage(): JSX.Element {

  const whyChooseUsItems = [
    { title: "Industry-Specific Expertise", description: "Deep understanding of the hospitality sector's unique legal landscape and operational challenges." },
    { title: "Proactive Legal Strategies", description: "We anticipate issues and provide solutions that protect and grow your hospitality business." },
    { title: "Regulatory Compliance Mastery", description: "Expert guidance through complex licensing, health codes, and safety regulations." },
    { title: "End-to-End Support", description: "From business formation to crisis management, we handle all your legal needs." },
  ];

  const includedServices = [
    { title: "Licensing and Regulatory Compliance" },
    { title: "Contract Drafting and Review" },
    { title: "Intellectual Property Protection" },
    { title: "Corporate Compliance" },
    { title: "Finance and Debt Restructuring" },
    { title: "Hospitality Business Formation, Licenses and Renewal" },
    { title: "Documentation for New Hotels" },
  ];

  const relatedServices = [
    { title: "Estate Planning, Trusts and Succession Law", slug: "estate-planning" },
    { title: "NRI Services", slug: "nri-services" },
    { title: "Family Law", slug: "familyLaw" },
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100">

      {/* HERO SECTION */}
      <section
        className="relative bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] py-20 px-8 text-center"
        style={{
          backgroundImage: "url('/assets/hospital.jpg')",
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
            Hospitality Law: Navigating Legal Challenges in the Industry
          </motion.h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            The hospitality industry faces unique legal and regulatory challenges. Our expert team provides tailored legal solutions to ensure your business not only complies but also thrives.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link href="/pages/contactUs">
              <button className="inline-block bg-[#1dd3b0] text-[#0b0f19] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition">
                Connect with Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT HOSPITALITY LAW */}
      <section className="py-20 px-8 bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <div className="max-w-5xl mx-auto flex justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl font-light text-white mb-6">About Hospitality Law</h2>

            <div className="text-gray-400 leading-relaxed space-y-4 text-left">
              <p>
                The hospitality industry is vast—including hotels, restaurants, travel, tourism, events, and entertainment. With such diversity comes a myriad of legal challenges: from obtaining and renewing licenses to navigating health codes, employment regulations, intellectual property rights, and contracts with vendors, suppliers, and customers.
              </p>

              <p>
                The unique nature of hospitality businesses means legal issues arise quickly and unpredictably. Whether you're launching a boutique hotel, managing a restaurant chain, or operating a tourism venture, staying compliant and protected is not just advisable—it's essential.
              </p>

              <p>
                At GSLO, we offer end-to-end legal support tailored specifically for the hospitality sector. From business formation to daily operations, crisis response, and growth strategies, we ensure you're prepared for every scenario.
              </p>

              <div className="mt-6">
                <h3 className="text-white font-semibold mb-3">Key Areas of Hospitality Law We Cover:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Licensing and Permits: Navigating the maze of local, state, and federal requirements for food service, liquor licenses, tourism permits, and more.</li>
                  <li>Health and Safety Compliance: Ensuring your operations meet stringent health codes, workplace safety standards, and fire regulations.</li>
                  <li>Employment Law: Drafting contracts, managing disputes, handling terminations, and ensuring compliance with labor laws and wage regulations.</li>
                  <li>Contract Management: Reviewing and negotiating agreements with vendors, suppliers, partners, and clients.</li>
                  <li>Intellectual Property: Protecting your brand, trademarks, and unique offerings from infringement.</li>
                  <li>Liability and Risk Management: Mitigating risks related to customer injuries, property damage, and other potential liabilities.</li>
                  <li>Real Estate and Property Law: Guiding you through leases, property purchases, zoning laws, and construction agreements.</li>
                  <li>Crisis and Reputation Management: Handling legal emergencies, public relations issues, and damage control efficiently.</li>
                </ul>
              </div>

              <p className="mt-6">
                Hospitality businesses thrive on reputation, customer satisfaction, and smooth operations. Legal complications can derail any of these critical factors. That's why having proactive legal counsel isn't just a safety net—it's a strategic advantage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE GSLO */}
      <section className="py-20 px-8 bg-[#0b0f19]">
        <h2 className="text-3xl font-light text-white text-center mb-12">Why Choose GSLO?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {whyChooseUsItems.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#1a2238] p-6 rounded-xl border border-white/10 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES INCLUDED */}
      <section className="py-20 px-8 bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <h2 className="text-3xl font-light text-white text-center mb-12">Services Included in Hospitality Law</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {includedServices.map((service, i) => (
            <motion.div
              key={i}
              className="bg-[#1a2238] p-6 rounded-xl border border-white/10 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-base font-semibold text-white">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-20 px-8 bg-[#0b0f19]">
        <h2 className="text-3xl font-light text-white text-center mb-12">Related Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              <Link href={`/pages/contactUs`} className="text-[#1dd3b0] font-semibold hover:underline inline-flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
