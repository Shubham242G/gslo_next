'use client';

import { motion, Variants } from 'framer-motion';
import { JSX } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  company?: string;
}

export default function TestimonialsSection(): JSX.Element {
  const testimonials: Testimonial[] = [
    {
      quote:
        'Gaurav Sharma Law Offices provided exceptional legal guidance during a challenging time. Their expertise and professionalism were outstanding.',
      name: 'Neha Chaudhary',
    },
    {
      quote:
        "The team at Gaurav Sharma Law Offices demonstrated remarkable dedication and knowledge. They secured a favorable outcome for me, and I'm grateful for their support.",
      name: 'Anukrit Mahajan',
    },
    {
      quote:
        "I was impressed by the firm's attention to detail and strategic approach. Their legal advice was invaluable, and I highly recommend their services.",
      name: 'Mukesh Arora',
    },
    {
      quote:
        'Gaurav Sharma Law Offices went above and beyond to understand my case and deliver results. Their commitment to excellence is truly commendable.',
      name: 'Riddhima',
    },
    {
      quote:
        'The lawyers at Gaurav Sharma Law Offices are highly skilled and approachable. They made a stressful process much more manageable with their expertise and empathy.',
      name: 'Jaspreet Singh',
    },
    {
      quote:
        "I appreciate the firm's proactive communication and thorough preparation. Their efforts led to a successful resolution, and I'm thankful for their hard work.",
      name: 'Ravi Chaddha',
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#07091a] to-[#050713] flex flex-col">
      {/* Testimonials Section */}
      <div className="flex flex-col items-center justify-center px-8 py-20 flex-1 overflow-hidden">
        
        <motion.h2
          className="text-4xl md:text-6xl font-light text-center mb-20 tracking-wide text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          The Perfect Customer Experience
        </motion.h2>

        {/* Infinite Scrolling Testimonials */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1800] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[420px] bg-[#8b93ff]/40 backdrop-blur-sm border-2 border-[#5b63d8]/50 rounded-2xl p-9 flex flex-col justify-between min-h-[280px] hover:bg-[#8b93ff]/50 transition-all duration-300"
              >
                {/* Quote */}
                <p className="text-[#0f1535] text-lg leading-relaxed mb-10 font-light">
                  "{testimonial.quote}"
                </p>

                {/* Name + Company */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-[2px] bg-[#0f1535]" />
                  <div>
                    <p className="text-[#0f1535] font-medium text-base">
                      {testimonial.name}
                    </p>
                    {testimonial.company && (
                      <p className="text-[#0f1535]/70 text-sm mt-1">
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
