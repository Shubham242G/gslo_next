'use client';

import { motion } from 'framer-motion';
import { Scale, Landmark, FileText, CheckCircle } from 'lucide-react';
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

export default function SupremeCourtPage(): JSX.Element {
  const whyChooseUsItems = [
    {
      icon: Scale,
      title: 'Unparalleled Legal Expertise',
      description:
        'Our lawyers possess a deep and nuanced understanding of Supreme Court procedures and jurisprudence.',
    },
    {
      icon: Landmark,
      title: 'Strategic Case Presentation',
      description:
        'We are masters of oral arguments and written submissions, presenting your case with clarity and conviction.',
    },
    {
      icon: FileText,
      title: 'Meticulous Research & Drafting',
      description:
        'Every petition and argument is built on a foundation of exhaustive legal research and precise drafting.',
    },
  ];

  const includedServices = [
    { title: 'Special Leave Petitions (SLPs)', description: 'Seeking leave from the Supreme Court to appeal against any judgment or order.' },
    { title: 'Writ Petitions', description: 'Filing petitions to enforce fundamental rights under Article 32 of the Constitution.' },
    { title: 'Constitutional Law Matters', description: 'Handling cases that involve significant questions of constitutional interpretation.' },
    { title: 'Civil & Criminal Appeals', description: 'Representing clients in appeals against High Court judgments.' },
    { title: 'Public Interest Litigations (PILs)', description: 'Advocating for matters of public importance before the nation\'s highest court.' },
    { title: 'Advisory Jurisdiction', description: 'Assisting in matters where the President of India seeks the opinion of the Supreme Court.' },
  ];

  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section
  className="relative bg-gradient-to-b from-[#0b0f19] via-[#111827] to-[#0b0f19] py-28 px-6 text-center"
  style={{
    backgroundImage: "url('/assets/supreme-court.jpg')",
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
      Supreme Court Practice
    </motion.h1>
    <p className="text-white max-w-2xl mx-auto text-lg">
      GSLO Supreme Court Practice is an unparalleled asset of legal representation at the Supreme Court of India, the highest court of the land and the highest judicial forum in India.
    </p>
    <Link href="/pages/contactUs">

              <button className="px-8 py-3 bg-[#1dd3b0] text-white font-semibold rounded-full hover:bg-[#17b89a] transition-all duration-300 shadow-lg hover:shadow-xl mt-8">
                Contact Us
              </button>
            </Link>
  </div>
</section>


      {/* Why Choose GSLO */}
      <Section className="bg-gradient-to-b from-[#111827] to-[#0b0f19]">
        <h2 className="text-3xl font-semibold text-center text-white mb-16">
          Why Choose GSLO for Supreme Court Matters?
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

      {/* Services Included */}
      <Section>
        <h2 className="text-3xl font-semibold text-center text-white mb-16">
          Our Supreme Court Practice Areas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {includedServices.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-gradient-to-br from-[#111827] to-[#0b0f19] p-6 rounded-2xl border border-white/10 shadow-lg"
            >
              <CheckCircle className="text-[#B8860B] w-6 h-6 mt-1 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-gradient-to-t from-[#0b0f19] via-[#111827] to-[#0b0f19] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Seek Representation at the Highest Level
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Matters before the Supreme Court require the highest level of legal expertise. Contact us for a consultation to discuss your case.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-[#111827] p-10 rounded-lg shadow-lg mx-auto max-w-xl"
          >
            <form className="space-y-5">
              <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-700 rounded-md bg-[#0b0f19] text-gray-100" />
              <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-700 rounded-md bg-[#0b0f19] text-gray-100" />
              <textarea placeholder="Briefly describe your case and its history" rows={5} className="w-full p-4 border border-gray-700 rounded-md bg-[#0b0f19] text-gray-100"></textarea>
              <Link href="/pages/contactUs">

              <button className="px-8 py-3 bg-[#1dd3b0] text-white font-semibold rounded-full hover:bg-[#17b89a] transition-all duration-300 shadow-lg hover:shadow-xl mt-8">
                Contact Us
              </button>
            </Link>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
