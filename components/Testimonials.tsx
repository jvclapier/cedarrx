'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const config = {
  heading: 'What Our Patients Say',
  subheading: 'Real experiences from real people in our community',
  testimonials: [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Twin Falls, ID',
      quote: 'CedarRX has been a lifesaver for my dermatology needs. The personalized compounds work so much better than anything I could find at a regular pharmacy. The staff is incredibly knowledgeable and caring.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Twin Falls, ID',
      quote: 'I was skeptical about compounding at first, but CedarRX changed my mind. My weight loss journey has been so much easier with their personalized medications and supportive team.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      location: 'Twin Falls, ID',
      quote: 'The free home delivery is so convenient! The pharmacists take the time to answer all my questions and make sure I understand my medications. Truly exceptional service.',
      rating: 5
    },
  ]
};

export default function Testimonials() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-neutral-dark text-[36px] md:text-[48px] font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {config.heading}
          </motion.h2>
          <motion.p 
            className="text-neutral-text text-[18px] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {config.subheading}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-cream rounded-2xl p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-cedar" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-cedar" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-text text-[15px] leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-neutral-border pt-4">
                <p className="text-neutral-dark font-semibold text-[16px]">
                  {testimonial.name}
                </p>
                <p className="text-neutral-text text-[14px]">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 bg-cream px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-cedar rounded-full border-2 border-white" />
              <div className="w-8 h-8 bg-cedar-light rounded-full border-2 border-white" />
              <div className="w-8 h-8 bg-cedar-teal rounded-full border-2 border-white" />
            </div>
            <span className="text-neutral-text text-[14px] font-medium">
              Join 5,000+ satisfied patients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
