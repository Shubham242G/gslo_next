'use client';

import { motion } from 'framer-motion';
import { Building, Files, UserCheck, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

const Section = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="max-w-6xl mx-auto px-8">{children}</div>
  </section>
);

export default function RERACompliancePage(): JSX.Element {
  const whyChooseUsItems = [
    {
      icon: Building,
      title: "RERA Compliance Support",
      description:
        "We assist developers, investors, and homebuyers in meeting the legal requirements under the Real Estate (Regulation and Development) Act (RERA).",
    },
    {
      icon: Files,
      title: "Comprehensive Real Estate Analysis",
      description:
        "We cover legal, financial, and regulatory aspects in our assessment to help stakeholders understand risks and opportunities.",
    },
    {
      icon: UserCheck,
      title: "Customized Support for Every Participant",
      description:
        "GSLO advises promoters, investors, and homebuyers at every stage, ensuring smooth and successful transactions.",
    },
  ];

  const includedServices = [
    {
      title: "Comprehensive Due Diligence",
      description:
        "Conducting thorough real estate due diligence with our in-depth legal, financial, and regulatory reviews.",
    },
    {
      title: "Stakeholder Specific Guidance",
      description:
        "Get promoter, investor, lender, and homebuyer specific advisory services from our experts.",
    },
    {
      title: "Regulatory Insights by State",
      description:
        "Take advantage of our in-depth experience across India and knowledge of specific state RERA rules.",
    },
    {
      title: "Transactional Advisory",
      description:
        "Professional advisory services for all real estate transactions, from drafting agreements to final registration.",
    },
    {
      title: "Litigation Support",
      description:
        "Get legal support in resolving real estate disputes and litigation matters before RERA authorities.",
    },
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen font-sans">
      {/* --- Hero Section --- */}
      <section
  className="relative bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] py-28 px-6 text-center"
  style={{
    backgroundImage: "url('/assets/rera-compliance.jpg')",
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
      style={{ lineHeight: '1.15', fontWeight: 300 }}
    >
      RERA Compliance
    </motion.h1>
    <p className="text-white max-w-2xl mx-auto text-lg">
      For developers, investors, and homebuyers, navigating the complexities of real estate regulations is critical. Full compliance with RERA promotes transparency, accountability, and legal security.
    </p>
    <Link href="/pages/contact-us">
              <button className="px-8 py-3 bg-[#1dd3b0] text-white font-semibold rounded-full hover:bg-[#17b89a] transition-all duration-300 shadow-lg hover:shadow-xl mt-8">
                Contact Us
              </button>
            </Link>
  </div>
</section>


      {/* --- Why Choose Us --- */}
      <Section className="bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <h2 className="text-3xl font-semibold text-center text-white mb-16">
          Why Choose GSLO for RERA Matters?
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {whyChooseUsItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex flex-col items-center bg-gradient-to-br from-[#1a2238] to-[#0b0f19] p-8 rounded-2xl border border-white/10 shadow-lg"
            >
              <div className="bg-[#B8860B]/20 p-4 rounded-full mb-5">
                <item.icon className="w-10 h-10 text-[#B8860B]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Services Included --- */}
      <Section>
        <h2 className="text-3xl font-semibold text-center text-white mb-16">
          Our RERA Compliance Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {includedServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex items-start bg-gradient-to-br from-[#111827] to-[#0b0f19] p-6 rounded-2xl border border-white/10 shadow-lg"
            >
              <CheckCircle className="text-[#B8860B] w-6 h-6 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- Contact Form Section --- */}
      <Section className="bg-gradient-to-t from-[#0b0f19] via-[#111827] to-[#0b0f19] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Consult Our RERA Experts Today
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Ensure your real estate projects are fully compliant and legally secure. Contact us for a consultation with our RERA specialists.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="inline-block bg-[#B8860B] text-[#0b0f19] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition"
          >
            Request a RERA Consultation
          </motion.a>
        </div>
      </Section>
    </div>
  );
}
