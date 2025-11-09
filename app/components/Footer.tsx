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
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const navLinks = [
    { name: 'ABOUT', href: '/about' },
    { name: 'SOLUTIONS', href: '/services' },
    { name: 'INSIGHTS', href: '/blogs' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: FaXTwitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#0a1f0a] text-white">
      <div className="max-w-[1400px] mx-auto px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Company Info */}
          <div className="space-y-8">
            {/* Logo */}
            <h2 className="text-4xl font-bold tracking-widest">GSLO</h2>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 text-sm font-light tracking-wide hover:text-white transition-colors duration-300 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Address and Contact */}
            <div className="space-y-2">
              <p className="text-gray-300 text-sm font-light">
                Terry Francine Street, San Francisco, CA 94158
              </p>
              <p className="text-gray-300 text-sm font-light">
                info@mysite.com | 123-456-7890
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-gray-400 text-xs font-light hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/accessibility"
                className="text-gray-400 text-xs font-light hover:text-white transition-colors duration-300"
              >
                Accessibility Statement
              </Link>
            </div>
          </div>

          {/* Right Side - Newsletter Signup */}
          <div className="flex flex-col justify-start">
            <h3 className="text-3xl font-light mb-8 tracking-wide">
              Stay Updated with the Latest
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm mb-3 text-gray-300">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border-b border-gray-500 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder=""
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={subscribed}
                  onChange={(e) => setSubscribed(e.target.checked)}
                  className="mt-1 w-4 h-4 bg-transparent border border-gray-500 rounded-sm cursor-pointer"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-300 font-light cursor-pointer">
                  Yes, subscribe me to your newsletter.
                </label>
              </div>

              {/* Submit Button */}
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

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-xs font-light text-right">
            © 2035 by GSLO. Made with Wix Studio™
          </p>
        </div>
      </div>
    </footer>
  );
}
