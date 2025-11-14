"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const EstatePlanningPage = () => {
  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
  className="relative bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] py-28 px-6 text-center"
  style={{
    backgroundImage: "url('/assets/estate-planning.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black opacity-60 z-0" />

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
      style={{ lineHeight: "1.15", fontWeight: 300 }}
    >
      Secure Your Legacy,<br /> Plan Your Estate with Confidence.
    </motion.h1>
    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
      Expert estate planning and succession solutions to protect your
      family’s wealth, reduce disputes, and ensure smooth legacy transfer.
    </p>
    <Link href="/pages/contactUs">
              <button className="px-8 py-3 bg-[#1dd3b0] text-white font-semibold rounded-full hover:bg-[#17b89a] transition-all duration-300 shadow-lg hover:shadow-xl mt-8">
                Contact Us
              </button>
            </Link>
  </div>
</section>


      {/* Intro Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#111827] to-[#0b0f19] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Strategic Wealth & Legacy Management
          </h2>
          <p className="text-gray-400">
            We assist individuals, families, and business owners with
            comprehensive estate planning—covering wills, trusts, succession,
            and asset protection. Our focus is to simplify complex processes
            while preserving family harmony and long-term financial stability.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0b0f19]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { value: "15+", label: "Years of Legal Expertise" },
            { value: "98%", label: "Client Satisfaction Rate" },
            { value: "1000+", label: "Plans Successfully Executed" },
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

      {/* Core Services Section */}
      <section className="bg-[#0b0f19] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-12">
            Our Core Estate Planning Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Wills & Testament Planning",
                desc: "Drafting clear and legally sound wills to ensure your assets are distributed as per your wishes.",
              },
              {
                title: "Trust Creation & Management",
                desc: "Establishing and managing trusts to safeguard wealth and control inheritance efficiently.",
              },
              {
                title: "Succession Planning for Businesses",
                desc: "Ensuring smooth leadership and ownership transition for family-run enterprises.",
              },
              {
                title: "Asset Protection & Tax Efficiency",
                desc: "Structuring estates to minimize tax liabilities while protecting family assets.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start bg-gradient-to-br from-[#111827] to-[#0b0f19] p-6 rounded-2xl border border-white/10 shadow-lg"
              >
                <CheckCircle className="text-[#1dd3b0] w-6 h-6 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center bg-gradient-to-t from-[#0b0f19] via-[#111827] to-[#0b0f19]">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Plan Your Legacy with Confidence
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Contact our estate planning experts today to discuss wills, trusts,
          and succession strategies that protect what matters most.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/pages/contactUs"
          className="inline-block bg-[#1dd3b0] text-[#0b0f19] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition"
        >
          Schedule a Consultation
        </motion.a>
      </section>
    </div>
  );
};

export default EstatePlanningPage;
