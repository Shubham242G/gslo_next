"use client";

import { motion } from "framer-motion";
import { Users, FileCheck, Shield, CheckCircle } from "lucide-react";
import { JSX } from "react";

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

export default function LabourLawPage(): JSX.Element {
  const whyChooseUsItems = [
    {
      icon: Users,
      title: "Dual Representation Expertise",
      description:
        "We offer balanced and insightful legal counsel to both employers and employees.",
    },
    {
      icon: FileCheck,
      title: "Proactive Compliance Audits",
      description:
        "Our team helps businesses stay ahead of regulatory changes with comprehensive compliance checks.",
    },
    {
      icon: Shield,
      title: "Strong Negotiation & Litigation",
      description:
        "Skilled in both amicable settlements and aggressive courtroom representation.",
    },
  ];

  const includedServices = [
    {
      title: "Employment Contracts",
      description: "Drafting and reviewing legally sound employment agreements.",
    },
    {
      title: "Workplace Discrimination",
      description:
        "Fighting against unfair treatment based on protected characteristics.",
    },
    {
      title: "Wrongful Termination",
      description:
        "Challenging dismissals that violate legal and contractual rights.",
    },
    {
      title: "Industrial Disputes",
      description: "Resolving conflicts between management and employee unions.",
    },
    {
      title: "Collective Bargaining",
      description: "Facilitating negotiations for fair labour contracts.",
    },
    {
      title: "Workplace Safety Compliance",
      description:
        "Ensuring adherence to health and safety regulations in every workplace.",
    },
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen font-sans">
      {/* --- Hero Section --- */}
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
    Upholding Fairness,  
    <br /> Empowering Workplaces.
  </motion.h1>

  <p className="text-gray-400 max-w-2xl mx-auto text-lg">
    From employment contracts to workplace safety, our labour law experts
    ensure compliance, fairness, and harmony between employers and employees.
  </p>
</section>

      {/* --- Why Choose Us --- */}
      <Section className="bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <h2 className="text-3xl font-semibold text-center text-white mb-16">
          Your Strategic HR Legal Partner
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {whyChooseUsItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center bg-gradient-to-br from-[#1a2238] to-[#0b0f19] p-8 rounded-2xl border border-white/10 shadow-lg"
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
      </Section>

      {/* --- Services Included --- */}
      <Section>
        <h2 className="text-3xl font-semibold text-center text-white mb-16">
          Our Labour Law & Compliance Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {includedServices.map((service, index) => (
            <motion.div
              key={index}
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
      </Section>

      {/* --- Contact Section --- */}
      <Section className="bg-gradient-to-t from-[#0b0f19] via-[#111827] to-[#0b0f19] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Ensure Your Business is Compliant
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Proactive legal advice is the best defense against costly labour
            disputes. Contact us for a comprehensive compliance audit or
            consultation.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="inline-block bg-[#1dd3b0] text-[#0b0f19] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition"
          >
            Request a Consultation
          </motion.a>
        </div>
      </Section>
    </div>
  );
}
