"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Gavel, Scale } from "lucide-react";

const CriminalLitigationPage = () => {
  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
  className="relative bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] py-28 px-6 text-center"
  style={{
    backgroundImage: "url('/assets/criminal-litigation.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>
  {/* Black overlay for shade */}
  <div className="absolute inset-0 bg-black opacity-60 z-0" />

  {/* Content on top */}
  <div className="relative z-10">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight"
    >
      Defending Rights, <br /> Delivering Justice.
    </motion.h1>
    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
      Our Criminal Litigation team provides strategic defense and
      courtroom advocacy — ensuring every client’s rights are protected
      with precision and integrity.
    </p>
  </div>
</section>

      {/* Intro Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#111827] to-[#0b0f19] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Strong Defense for Every Case
          </h2>
          <p className="text-gray-400">
            Whether facing accusations or seeking justice, our team combines
            deep legal acumen with a client-first approach. We manage
            everything — from investigations to appeals — ensuring you receive
            the strongest defense possible.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0b0f19]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { value: "15+", label: "Years of Legal Experience" },
            { value: "92%", label: "Success in Major Cases" },
            { value: "1000+", label: "Clients Represented" },
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
            Our Core Criminal Defense Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: Gavel,
                title: "Bail & Anticipatory Bail",
                desc: "Assisting clients in securing bail and ensuring freedom during ongoing investigations.",
              },
              {
                icon: Shield,
                title: "Courtroom Representation",
                desc: "Providing assertive and ethical representation in all criminal courts across jurisdictions.",
              },
              {
                icon: Scale,
                title: "Evidence Analysis & Case Strategy",
                desc: "Careful examination of facts and evidence to construct a strong, well-structured defense.",
              },
              {
                icon: Shield,
                title: "White-Collar & Cybercrime Defense",
                desc: "Expert defense for financial fraud, cybercrime, and corporate criminal allegations.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start bg-gradient-to-br from-[#111827] to-[#0b0f19] p-6 rounded-2xl border border-white/10 shadow-lg"
              >
                <item.icon className="text-[#1dd3b0] w-6 h-6 mt-1 mr-4" />
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
          Facing Criminal Charges or Legal Threats?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Contact our defense experts for a confidential consultation. We’ll
          evaluate your case, guide you through your options, and defend your
          rights with precision.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="inline-block bg-[#1dd3b0] text-[#0b0f19] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition"
        >
          Get Legal Assistance
        </motion.a>
      </section>
    </div>
  );
};

export default CriminalLitigationPage;
