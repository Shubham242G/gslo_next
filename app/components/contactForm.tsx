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
      className="bg-transparent p-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-semibold text-white mb-2">{title}</h3>
      {description && <p className="text-gray-400 mb-6">{description}</p>}
      
      <form className="space-y-6">
        <input 
          type="text" 
          placeholder={formPlaceholders.name} 
          className="w-full p-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors" 
        />
        <input 
          type="email" 
          placeholder={formPlaceholders.email} 
          className="w-full p-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors" 
        />
        {formPlaceholders.phone && (
          <input 
            type="tel" 
            placeholder={formPlaceholders.phone} 
            className="w-full p-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors" 
          />
        )}
        <textarea 
          placeholder={formPlaceholders.message} 
          rows={5} 
          className="w-full p-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
        ></textarea>
        <button 
          type="submit" 
          className="w-full bg-white text-black p-4 rounded-md font-semibold text-lg hover:bg-gray-200 transition-colors"
        >
          {buttonText}
        </button>
      </form>
    </motion.div>
  );
}
