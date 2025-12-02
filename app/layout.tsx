import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { JSX } from 'react';
import Footer from './components/Footer';
import ChatBot from './bot/bot'
import DisclaimerModal from './components/DisclaimerModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GSLO - Gaurav Sharma Law Offices',
  description: 'Professional legal services including Healthcare Law, Family Law, IPR, Criminal Litigation, and Consumer Law',
  icons: {
    icon: "/assets/GSLO-black.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} px-4 sm:px-6 md:px-8`}>
        <DisclaimerModal />
        {/* Navbar will appear on EVERY page */}
        <Navbar />
        {/* Page content goes here */}
        {children}
        <ChatBot/>
        <Footer/>
      </body>
    </html>
  );
}
