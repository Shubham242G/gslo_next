'use client';

import { motion } from 'framer-motion';
import { JSX, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const result = await emailjs.sendForm(
        'service_ypeplcf',      // Your service ID
        'contact_form',     // Your template ID (or create a new one for contact form)
        formRef.current!,
        'am1VZPuktoi7yeO5J'     // Your public key
      );
      
      console.log('Email sent successfully:', result.text);
      setStatus('success');
      formRef.current?.reset(); // Reset form after success
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setLoading(false);
    }
  };

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
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <input 
          type="text" 
          name="name"
          placeholder={formPlaceholders.name} 
          required
          className="w-full p-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors" 
        />
        <input 
          type="email" 
          name="email"
          placeholder={formPlaceholders.email} 
          required
          className="w-full p-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors" 
        />
        {formPlaceholders.phone && (
          <input 
            type="tel" 
            name="phone"
            placeholder={formPlaceholders.phone} 
            className="w-full p-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors" 
          />
        )}
        <textarea 
          name="message"
          placeholder={formPlaceholders.message} 
          rows={5}
          required
          className="w-full p-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
        ></textarea>

        {/* Status Messages */}
        {status === 'success' && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-sm font-medium"
          >
            ✅ Message sent successfully! We'll get back to you soon.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm font-medium"
          >
            ❌ Failed to send message. Please try again.
          </motion.p>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-white text-black p-4 rounded-md font-semibold text-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : buttonText}
        </button>
      </form>
    </motion.div>
  );
}
