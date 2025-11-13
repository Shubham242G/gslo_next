"use client";
import { motion } from "framer-motion";
import { Briefcase, Milestone, HandCoins, CheckCircle } from "lucide-react";

export default function DebtRecoveryPage() {
  const whyChooseUsItems = [
    {
      icon: Briefcase,
      title: "Customized Recovery Strategies",
      description:
        "Tailored debt recovery plans based on debtor history and business dynamics.",
    },
    {
      icon: Milestone,
      title: "High Success Rate",
      description:
        "Our firm has a proven record of recovering debts across diverse industries.",
    },
    {
      icon: HandCoins,
      title: "Pre-Litigation Expertise",
      description:
        "We focus on negotiation and settlement before resorting to litigation.",
    },
  ];

  const includedServices = [
    {
      title: "Debt Assessment & Strategy",
      desc: "Analyzing the debt case and structuring an effective recovery plan.",
    },
    {
      title: "Legal Proceedings",
      desc: "Initiating civil suits or insolvency petitions where required.",
    },
    {
      title: "Negotiation and Settlement",
      desc: "Resolving disputes through strategic mediation and dialogue.",
    },
    {
      title: "Tracing and Asset Recovery",
      desc: "Identifying debtor assets and enforcing recovery judgments.",
    },
    {
      title: "Insolvency Petitions",
      desc: "Leveraging the IBC framework for recovering corporate debts.",
    },
    {
      title: "Enforcement of Decrees",
      desc: "Ensuring court decrees are fully executed and payments are secured.",
    },
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] py-28 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
          style={{ lineHeight: "1.15", fontWeight: 300 }}
        >
          Effective Debt Recovery,
          <br /> Ethical Legal Solutions.
        </motion.h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Unpaid debts can hinder growth. We provide strategic, ethical, and
          efficient legal methods to recover what’s rightfully yours while
          preserving professional relationships.
        </p>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#111827] to-[#0b0f19] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Restoring Financial Stability
          </h2>
          <p className="text-gray-400">
            Debt recovery requires more than legal knowledge — it demands
            strategy and empathy. We help individuals and organizations reclaim
            their dues through structured, transparent, and legally compliant
            processes that protect your reputation and restore balance to your
            finances.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#0b0f19]">
        <h2 className="text-3xl font-semibold text-center text-white mb-12">
          Why Choose GSLO for Debt Recovery?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {whyChooseUsItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-[#111827] to-[#0b0f19] border border-white/10 rounded-2xl py-10 px-6 shadow-lg"
            >
              <item.icon className="w-10 h-10 text-[#1dd3b0] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#0b0f19] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-white text-center mb-12">
            Our Debt Recovery Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {includedServices.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start bg-gradient-to-br from-[#111827] to-[#0b0f19] p-6 rounded-2xl border border-white/10 shadow-lg"
              >
                <CheckCircle className="text-[#1dd3b0] w-6 h-6 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center bg-gradient-to-t from-[#0b0f19] via-[#111827] to-[#0b0f19]">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Begin Your Debt Recovery Journey Today
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Don’t let unpaid debts block your business growth. Connect with our
          experts to design a recovery strategy that’s efficient and ethical.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="inline-block bg-[#1dd3b0] text-[#0b0f19] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition"
        >
          Request a Consultation
        </motion.a>
      </section>
    </div>
  );
}
