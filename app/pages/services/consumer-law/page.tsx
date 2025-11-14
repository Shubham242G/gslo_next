"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const ConsumerLawPage = () => {
  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section 
  className="relative bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] py-20 px-6 text-center"
  style={{
    backgroundImage: "url('/assets/consumer-law.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black opacity-60 z-0" />

  <div className="relative z-10 max-w-4xl mx-auto p-8 rounded-md">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-semibold text-white mb-6"
    >
      Protecting Consumer Rights,
      <br /> Empowering Justice.
    </motion.h1>

    <p className="text-white max-w-2xl mx-auto text-lg mb-8">
      Our Consumer Law services ensure fair trade practices, protecting
      consumers from fraud, unfair treatment, and exploitation.
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

      {/* Intro Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#111827] to-[#0b0f19] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Simplifying Consumer Disputes
          </h2>
          <p className="text-gray-400">
            We assist individuals and businesses in resolving disputes related
            to defective goods, false advertising, unfair billing, or negligence
            in service. Our expert team navigates complex consumer issues with
            precision and empathy.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0b0f19]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { value: "10+", label: "Years of Legal Expertise" },
            { value: "95%", label: "Case Success Rate" },
            { value: "500+", label: "Clients Empowered" },
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
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Product Defect & Replacement Claims",
                desc: "Legal remedies for faulty or unsafe products, ensuring compensation or replacements for affected consumers.",
              },
              {
                title: "False Advertising & Misrepresentation",
                desc: "Protection from misleading promotions or unfair brand practices under the Consumer Protection Act.",
              },
              {
                title: "Unfair Trade & Service Negligence",
                desc: "Filing cases against service providers for negligence, delay, or deficiency in services.",
              },
              {
                title: "Online & E-commerce Complaints",
                desc: "Guiding clients through disputes involving online purchases, scams, and digital fraud.",
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
          Need Legal Support for a Consumer Issue?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Contact our legal experts today to safeguard your consumer rights and
          achieve swift resolution.
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

export default ConsumerLawPage;