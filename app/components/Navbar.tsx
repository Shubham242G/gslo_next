'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Youtube, LucideIcon } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { JSX } from 'react';

interface NavLink {
  name: string;
  href: string;
}

interface SocialLink {
  icon: LucideIcon | IconType;
  href: string;
  label: string;
}

export default function Navbar(): JSX.Element {
  const navLinks: NavLink[] = [
    { name: 'ABOUT', href: '/pages/about' },
    { name: 'SERVICES', href: '/pages/services' },
    { name: 'BLOGS', href: '/pages/blogSection' },
    { name: 'CONTACT', href: '/pages/contactUs' },
    { name: 'TERMS & CONDITIONS', href: '/pages/terms&conditions' },

  ];

  const socialLinks: SocialLink[] = [
    { icon: Instagram, href: 'https://www.instagram.com/gslo_official?igsh=MXU5YTdmemszdzB2bQ==', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/177Ktm5qT6/', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gaurav-sharma-82a87125b/', label: 'LinkedIn' },
  ];

  return (
    <motion.header
      // The background color and backdrop-blur have been removed here
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Left Navigation Links */}
        <nav className="flex items-center gap-8 text-sm font-light tracking-wider">
          {navLinks.map((link: NavLink, index: number) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Center Logo */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'backOut' }}
        >
          <Link href="/">
            <img src='/assets/gslo-white.png' className='w-22 sm:ml-43 lg:mr-43' alt='company-logo'/> 
          </Link>
        </motion.div>

        {/* Right Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social: SocialLink, index: number) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-110"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.header>
  );
}
