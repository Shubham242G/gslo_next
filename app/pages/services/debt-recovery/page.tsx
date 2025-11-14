'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { JSX } from 'react';

const DebtRecoveryPage = (): JSX.Element => {
  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section 
  className="relative bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] py-28 px-6 text-center flex flex-col justify-center items-center min-h-[90vh]"
  style={{
    backgroundImage: "url('/assets/debt-recovery.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black opacity-60 z-0" />

  <div className="relative z-10 max-w-4xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight max-w-2xl mx-auto"
    >
      Effective Debt Recovery,
      <br /> Strategic Legal Solutions.
    </motion.h1>

    <p className="text-white max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
      Unpaid debts can cripple cash flow and hinder growth. We provide
      strategic, ethical, and effective legal solutions to recover your
      outstanding dues while preserving your professional relationships.
    </p>

    {/* Contact Us Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Link href="/pages/contactUs">
        <button className="px-8 py-3 bg-[#1dd3b0] text-white font-semibold rounded-full hover:bg-[#17b89a] transition-all duration-300 shadow-lg hover:shadow-xl">
          Contact Us
        </button>
      </Link>
    </motion.div>
  </div>
</section>


      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#111827] to-[#0b0f19] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-4 text-white">
            About Debt Recovery
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Debt recovery involves the legal process of collecting outstanding
            payments from individuals or businesses. A structured legal approach
            is essential to ensure creditors reclaim funds efficiently and
            lawfully. Our firm specializes in both commercial and individual
            debt recovery, maintaining the highest ethical standards to protect
            your reputation.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#0b0f19] border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { value: '95%', label: 'Debt Recovery Success Rate' },
            { value: '10+', label: 'Years of Legal Expertise' },
            { value: '1000+', label: 'Cases Resolved Ethically' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#1a2238] to-[#0b0f19] border border-white/10 rounded-2xl py-10"
            >
              <h3 className="text-4xl font-bold text-white mb-2">
                {item.value}
              </h3>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center bg-gradient-to-t from-[#0b0f19] via-[#111827] to-[#0b0f19]">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Need Legal Assistance for Debt Recovery?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Our expert legal team helps businesses and individuals recover debts
          efficiently while maintaining professionalism and compliance.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="inline-block bg-[#1dd3b0] text-[#0b0f19] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition"
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
};

export default DebtRecoveryPage;
