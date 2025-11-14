'use client';

import { motion } from 'framer-motion';
import { Landmark, Shield, Briefcase, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

// --- Reusable Section Component ---
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

export default function NCLTPage(): JSX.Element {
  const whyChooseUsItems = [
    { icon: Landmark, title: "Deep Domain Expertise", description: "In-depth knowledge of the Insolvency and Bankruptcy Code (IBC) and corporate law." },
    { icon: Shield, title: "Strategic Representation", description: "Representing both creditors and corporate debtors with tailored legal strategies." },
    { icon: Briefcase, title: "Proven Track Record", description: "A history of successful outcomes in complex corporate insolvency and restructuring cases." },
  ];

  const includedServices = [
    { title: "Insolvency Proceedings (CIRP)", description: "Guiding companies through the Corporate Insolvency Resolution Process." },
    { title: "Mergers & Amalgamations", description: "Advising on and securing NCLT approval for corporate restructuring." },
    { title: "Shareholder Disputes", description: "Representing clients in matters of oppression and mismanagement." },
    { title: "Creditor & Debtor Representation", description: "Advocating for the rights of both financial and operational creditors." },
    { title: "Voluntary Liquidation", description: "Assisting companies with the process of winding up affairs." },
    { title: "Restructuring & Turnaround", description: "Developing strategies for financial revival and operational stability." },
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen font-sans">
      {/* --- Hero Section --- */}
      <section
  className="relative py-30 px-6 text-center flex flex-col justify-center items-center min-h-[60vh]"
  style={{
    backgroundImage: "url('/assets/nclt.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black opacity-60 z-0" />

  {/* Content on top of overlay */}
  <div className="relative z-10 max-w-2xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight"
      style={{ lineHeight: "1.15", fontWeight: 300 }}
    >
      NCLT & Corporate Law<br />
      Strategic Insolvency & Dispute Solutions
    </motion.h1>

    <p className="text-gray-400 text-lg">
      We provide expert navigation through the complex landscape of corporate law, insolvency, and restructuring before the National Company Law Tribunal (NCLT).
    </p>
    <Link href="/pages/contactUs">
              <button className="px-8 py-3 bg-[#1dd3b0] text-white font-semibold rounded-full hover:bg-[#17b89a] transition-all duration-300 shadow-lg hover:shadow-xl mt-8">
                Contact Us
              </button>
            </Link>
  </div>
</section>



      {/* --- Why Choose Us --- */}
      <Section className="bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <h2 className="text-3xl font-semibold text-center text-white mb-16">
          Your Trusted Corporate Counsel
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
          Our NCLT & Corporate Law Services
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
            Discuss Your Corporate Matter
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Whether facing insolvency or planning a merger, our expert team is ready to provide strategic legal guidance. Contact us for a confidential consultation.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/pages/contactUs"
            className="inline-block bg-[#1dd3b0] text-[#0b0f19] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transition"
          >
            Request a Consultation
          </motion.a>
        </div>
      </Section>
    </div>
  );
}
