"use client";

import { motion } from "framer-motion";
import { Lightbulb, Globe, Copyright, CheckCircle } from "lucide-react";

export default function IntellectualPropertyPage() {
  const whyChooseUsItems = [
    {
      icon: Lightbulb,
      title: "End-to-End IP Lifecycle Management",
      description:
        "From initial registration to enforcement and litigation, we manage the entire lifecycle of your IP assets.",
    },
    {
      icon: Globe,
      title: "Global IP Strategy",
      description:
        "We provide strategic advice for protecting your intellectual property not just in India, but across international jurisdictions.",
    },
    {
      icon: Copyright,
      title: "Specialized IP Litigators",
      description:
        "Our dedicated team of IP lawyers has extensive experience in handling complex infringement and validity disputes.",
    },
  ];

  const includedServices = [
    {
      title: "Patent Protection",
      description: "Safeguarding your novel inventions and technologies.",
    },
    {
      title: "Trademark Registration",
      description: "Protecting your brand identity, logos, and slogans.",
    },
    {
      title: "Copyright Protection",
      description: "Securing rights for your creative and artistic works.",
    },
    {
      title: "Trade Secret Management",
      description:
        "Implementing strategies to protect confidential business information.",
    },
    {
      title: "IP Litigation & Dispute Resolution",
      description: "Aggressively defending your IP rights in court.",
    },
    {
      title: "Technology Transfer",
      description: "Facilitating the legal transfer of intellectual property.",
    },
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] py-28 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
          style={{
            lineHeight: "1.15",
            fontWeight: 300,
          }}
        >
          Protect What Defines You,  
          <br /> Secure Your Intellectual Property.
        </motion.h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Safeguard your ideas, inventions, and creative works with legal
          precision. From trademarks to patents, we help you protect your most
          valuable assets.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12 text-white">
            Our Intellectual Property Edge
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {whyChooseUsItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center text-center bg-gradient-to-br from-[#1a2238] to-[#0b0f19] p-8 rounded-2xl border border-white/10 shadow-lg"
              >
                <div className="bg-[#1dd3b0]/10 p-4 rounded-full mb-5">
                  <item.icon className="w-10 h-10 text-[#1dd3b0]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#0b0f19] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-12">
            Our Intellectual Property Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedServices.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start bg-gradient-to-br from-[#111827] to-[#0b0f19] p-6 rounded-2xl border border-white/10 shadow-lg"
              >
                <CheckCircle className="text-[#1dd3b0] w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 text-center bg-gradient-to-t from-[#0b0f19] via-[#111827] to-[#0b0f19]">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Protect Your Innovations Today
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Your ideas deserve the best legal protection. Contact our IP experts
          to learn how we can help you safeguard your intellectual property
          rights.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="inline-block bg-[#1dd3b0] text-[#0b0f19] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition"
        >
          Request IP Consultation
        </motion.a>
      </section>
    </div>
  );
}
