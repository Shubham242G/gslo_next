'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { JSX, useState } from 'react';

export default function Footer(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const navLinks = [
    { name: 'ABOUT', href: '/pages/about' },
    { name: 'SERVICES', href: 'pages/services' },
    // { name: 'INSIGHTS', href: '/blogs' },
    { name: 'CONTACT', href: 'pages/contactUs' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#03050d] to-[#020206] text-white py-12 px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left: Offices + Contact + Social Icons */}
        <div className="space-y-8">

          {/* Contact */}
          <div className="space-y-2 text-[#b88b6c] text-lg">
            <div className="flex items-center gap-3">
              <img src="/assets/Call.png" alt="phone" className="h-[18px] w-[20px]" />
              <span className="text-white text-xl font-medium">+91-8595650338</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="/assets/Message.png" alt="email" className="h-[18px] w-[20px]" />
              <span className="text-white text-xl font-medium">info@gslo.in</span>
            </div>
          </div>
          {/* Offices */}
          <div>
            <h2 className="text-white font-semibold mb-4 text-lg">Our Offices</h2>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><span className="font-semibold text-white">Delhi:</span> Plot No. 25, Fourth Floor, Thana Road, Near Chhawla Stand, Najafgarh, New Delhi - 110043</li>
              <li><span className="font-semibold text-white">Gurgaon:</span> 412, Emaar Colonande, Golf Course Extension Rd, Sec-66, Gurgaon-122018</li>
              <li><span className="font-semibold text-white">Noida:</span> 208-209, Tower-E, Alphathum, Noida-201305</li>
              <li><span className="font-semibold text-white">Bhopal:</span> 401, B-Block HIG, Vijay Stambh, Zone-1, MP Nagar, Bhopal-462011</li>
              <li><span className="font-semibold text-white">Indore:</span> 205, B-Block, The One, RNT Marg, Near High Court, Indore-452001</li>
            </ul>
          </div>


          {/* Social Icons */}
          <div className="flex items-center gap-5 text-gray-300 mt-6">
            <a href="https://www.linkedin.com/in/gaurav-sharma-82a87125b/" aria-label="LinkedIn" className="hover:text-white transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/gslo_official?igsh=MXU5YTdmemszdzB2bQ==" aria-label="Instagram" className="hover:text-white transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/share/177Ktm5qT6/" aria-label="Facebook" className="hover:text-[#3b5998] mt-1 transition-colors duration-300">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Right: Navigation + Newsletter */}
        <div className="flex gap-10">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 flex-1 text-gray-300 text-sm font-light">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-fit hover:text-white transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}

            <span className="mt-4 font-semibold text-white">Additional Links</span>
            <Link href="/" className="w-fit hover:text-white transition-colors duration-300">Home</Link>
            <Link href="#whoAreWe" className="w-fit hover:text-white transition-colors duration-300">About GSLO</Link>
            <Link href="#whyUs" className="w-fit hover:text-white transition-colors duration-300">Why Us</Link>
            <Link href="/pages/services" className="w-fit hover:text-white transition-colors duration-300">How GSLO Works</Link>
            <Link href="/pages/contactUs" className="w-fit hover:text-white transition-colors duration-300">Contact Us</Link>
          </nav>

          {/* Newsletter */}
          <div className="flex flex-col flex-1">
            <h3 className="text-white text-xl font-light mb-6">Stay Updated with the Latest</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm mb-3 text-gray-300">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border-b border-gray-500 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={subscribed}
                  onChange={(e) => setSubscribed(e.target.checked)}
                  className="mt-1 w-4 h-4 bg-transparent border border-gray-500 rounded-sm cursor-pointer"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full max-w-xs px-8 py-3 border border-white rounded-full text-white font-light text-sm tracking-wide hover:bg-white hover:text-[#0a1f0a] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-gray-700 text-gray-400 text-xs text-center">
        GSLO © 2023, All Rights Reserved
      </div>
    </footer>
  );
}
