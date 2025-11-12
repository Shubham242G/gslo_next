'use client';

import { motion } from 'framer-motion';
import { JSX } from 'react';

interface ContactFormProps {
  title?: string;
  description?: string;
  formPlaceholders: {
    name: string;
    email: string;
    phone?: string;
    message: string;
  };
  buttonText: string;
}

export default function ContactForm({
  title = "Send Us a Message",
  description,
  formPlaceholders,
  buttonText
}: ContactFormProps): JSX.Element {
  return (
    <motion.div
      className="bg-white p-10 rounded-lg shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold text-[#2C2C2C] mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-6">{description}</p>}
      
      <form className="space-y-5">
        <input 
          type="text" 
          placeholder={formPlaceholders.name} 
          className="w-full p-4 border border-gray-300 rounded-md font-sans" 
        />
        <input 
          type="email" 
          placeholder={formPlaceholders.email} 
          className="w-full p-4 border border-gray-300 rounded-md font-sans" 
        />
        {formPlaceholders.phone && (
          <input 
            type="tel" 
            placeholder={formPlaceholders.phone} 
            className="w-full p-4 border border-gray-300 rounded-md font-sans" 
          />
        )}
        <textarea 
          placeholder={formPlaceholders.message} 
          rows={5} 
          className="w-full p-4 border border-gray-300 rounded-md font-sans"
        ></textarea>
        <button 
          type="submit" 
          className="w-full bg-[#B8860B] text-white p-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition-colors"
        >
          {buttonText}
        </button>
      </form>
    </motion.div>
  );
}
