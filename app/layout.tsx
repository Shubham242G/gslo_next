import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { JSX } from 'react';
import Footer from './components/Footer';
import ChatBot from './bot/bot'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GSLO - Gaurav Sharma Law Offices',
  description: 'Professional legal services including Healthcare Law, Family Law, IPR, Criminal Litigation, and Consumer Law',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
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
