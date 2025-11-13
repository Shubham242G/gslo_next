"use client";

import { motion } from "framer-motion";
import { Gavel, Shield, Scale } from "lucide-react";
import Image from "next/image";
import { JSX } from "react";

// --- Reusable Section Wrapper ---
const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function CriminalLitigationPage(): JSX.Element {
  const whyChooseUsItems = [
    {
      icon: Gavel,
      title: "Strategic Defense Planning",
      description:
        "We meticulously analyze evidence to build a robust defense strategy tailored to your case.",
    },
    {
      icon: Shield,
      title: "Aggressive Courtroom Representation",
      description:
        "Our experienced litigators are formidable advocates in the courtroom, protecting your rights.",
    },
    {
      icon: Scale,
      title: "Bail and Anticipatory Bail Expertise",
      description:
        "We have a strong track record in securing timely bail for our clients.",
    },
  ];

  const includedServices = [
    {
      title: "Bail & Anticipatory Bail",
      description: "Securing your freedom at the earliest opportunity.",
    },
    {
      title: "Evidence Analysis",
      description: "Meticulous review of evidence to build a strong defense.",
    },
    {
      title: "Cybercrime Defense",
      description: "Navigating the complexities of digital-age criminal law.",
    },
    {
      title: "Criminal Appeals",
      description: "Challenging convictions and seeking justice at higher courts.",
    },
    {
      title: "White-Collar Crime",
      description: "Defending allegations of financial and corporate fraud.",
    },
    {
      title: "Domestic Violence Defense",
      description: "Handling sensitive cases with discretion and expertise.",
    },
  ];

  // Reusable animation helpers
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, delay },
  });

  return (
    <div className="bg-[#0b0f19] text-gray-100 font-sans">
      {/* --- Hero Section (fixed animation) --- */}
      <Section>
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <Image
              src="https://images.unsplash.com/photo-1605664042212-75b85c35c344?w=1600&q=80&auto=format&fit=crop"
              alt="Gavel and law books symbolizing justice"
              fill
              className="object-cover"
              priority
            /> */}
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-[#1dd3b0] font-medium mb-4">
              A GSLO Practice Area
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Criminal Law & Litigation
            </h1>
            <p className="text-lg text-gray-400">
              Facing criminal charges requires a proactive and strategic defense. Our team provides robust representation to protect your freedom and your future.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* --- Why Choose GSLO --- */}
      <Section className="bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <motion.h2
          {...fadeUp()}
          className="text-4xl font-semibold text-center text-white mb-16"
        >
          Why Partner with GSLO?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {whyChooseUsItems.map((item, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.15)}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#1a2238] to-[#0b0f19] border border-white/10 hover:shadow-lg transition"
            >
              <div className="w-16 h-16 bg-[#1dd3b0]/10 text-[#1dd3b0] rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Services Included --- */}
      <Section className="bg-[#0b0f19]">
        <motion.h2
          {...fadeUp()}
          className="text-4xl font-semibold text-center text-white mb-16"
        >
          Our Criminal Defense Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {includedServices.map((service, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.1)}
              className="bg-gradient-to-br from-[#111827] to-[#0b0f19] p-8 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Contact Form --- */}
      <Section className="bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            {...fadeUp()}
            className="text-4xl font-semibold text-white mb-6"
          >
            Request a Confidential Case Evaluation
          </motion.h2>

          <motion.p
            {...fadeUp(0.1)}
            className="text-lg text-gray-400 mb-10"
          >
            Your privacy is our priority. Contact us for a confidential
            consultation to discuss your case.
          </motion.p>

          <motion.div
            {...fadeUp(0.2)}
            className="bg-gradient-to-br from-[#1a2238] to-[#0b0f19] p-10 rounded-2xl border border-white/10 shadow-lg"
          >
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-[#0b0f19] border border-white/20 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1dd3b0]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-[#0b0f19] border border-white/20 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1dd3b0]"
              />
              <textarea
                placeholder="Briefly and confidentially describe your case"
                rows={5}
                className="w-full p-4 bg-[#0b0f19] border border-white/20 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1dd3b0]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#1dd3b0] text-[#0b0f19] p-4 rounded-md font-semibold text-lg hover:shadow-lg transition"
              >
                Submit Confidential Request
              </button>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
