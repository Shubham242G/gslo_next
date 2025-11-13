"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { Gavel, Handshake, ScrollText } from "lucide-react";
import Image from "next/image";

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

export default function ConsumerLawPage(): JSX.Element {
  const whyChooseUsItems = [
    {
      icon: Gavel,
      title: "Deep Legal Acumen",
      description:
        "Expert knowledge of the Consumer Protection Act, 2019 to champion your rights.",
    },
    {
      icon: Handshake,
      title: "Strategic Resolution",
      description:
        "Skilled in both negotiation and courtroom litigation to achieve the best outcome.",
    },
    {
      icon: ScrollText,
      title: "Full-Service Handling",
      description:
        "We manage your case from the initial complaint to the final resolution.",
    },
  ];

  const includedServices = [
    {
      title: "Consumer Rights Protection",
      description: "Defending your fundamental rights as a consumer.",
    },
    {
      title: "Product Liability Claims",
      description: "Holding manufacturers accountable for defective products.",
    },
    {
      title: "Medical Negligence",
      description: "Addressing failures in healthcare services.",
    },
    {
      title: "Dispute Resolution",
      description: "Expert negotiation and mediation services.",
    },
    {
      title: "E-commerce & Digital Issues",
      description: "Tackling legal challenges in the online marketplace.",
    },
    {
      title: "Class Action Lawsuits",
      description: "Representing groups of consumers with similar grievances.",
    },
  ];

  // simple, reusable animation settings
  const heroAnim = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 } };
  const fadeUp = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.6, delay } });

  return (
    <div className="bg-[#0b0f19] text-gray-100 font-sans">
      {/* --- Hero Section: matches CriminalLitigation layout (image left, text right) --- */}
      <Section>
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Image (LEFT) */}
          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            {...heroAnim}
          >
            {/* <Image
              src="https://images.unsplash.com/photo-1556742044-53331fe3a1f3?w=1600&q=80&auto=format&fit=crop"
              alt="Customer making an informed purchase"
              fill
              className="object-cover"
              priority
            /> */}
          </motion.div>

          {/* Text (RIGHT) */}
          <motion.div {...heroAnim}>
            <p className="text-[#1dd3b0] font-medium mb-4">A GSLO Practice Area</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Consumer Law Advocacy
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">
              Ensuring fairness in the marketplace by protecting you from defective products,
              false advertising, and poor service. We turn consumer grievances into clear,
              enforceable resolutions using the Consumer Protection Act and strategic litigation.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block px-8 py-3 border border-[#1dd3b0] text-[#0b0f19] bg-[#1dd3b0] rounded-full font-semibold shadow-sm hover:shadow-md transition"
              >
                Get Legal Assistance
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- About / Intro Section --- */}
      <Section className="bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <motion.div {...fadeUp()}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Your Advocate in the Marketplace</h2>
            <p className="text-gray-400">
              Consumer law governs fairness in commerce—empowering you and holding businesses accountable for their promises.
              From quality of goods to transparency of services, these laws are your guarantee of a fair deal.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* --- Why Choose GSLO --- */}
      <Section>
        <h2 className="text-4xl font-semibold text-center text-white mb-16">Why Partner with GSLO?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {whyChooseUsItems.map((item, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.12)}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#1a2238] to-[#0b0f19] border border-white/10 hover:shadow-lg transition"
            >
              <div className="w-16 h-16 bg-[#1dd3b0]/10 text-[#1dd3b0] rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Services Included --- */}
      <Section className="bg-[#0b0f19]">
        <h2 className="text-4xl font-semibold text-center text-white mb-16">Our Consumer Law Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {includedServices.map((service, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.08)}
              className="bg-gradient-to-br from-[#111827] to-[#0b0f19] p-8 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Contact / CTA Section --- */}
      <Section className="bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 {...fadeUp()} className="text-4xl font-semibold text-white mb-6">
            Request a Confidential Case Evaluation
          </motion.h2>
          <motion.p {...fadeUp(0.05)} className="text-lg text-gray-400 mb-10">
            Your privacy is our priority. Contact us for a confidential consultation to discuss your case.
          </motion.p>

          <motion.div
            {...fadeUp(0.1)}
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
