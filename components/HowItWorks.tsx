'use client';

import { motion } from 'framer-motion';
import { FileText, Pill, Truck } from 'lucide-react';

const config = {
  heading: 'How It Works',
  subheading: 'Simple, fast, and personalized care in three easy steps',
  steps: [
    {
      id: 'consult',
      title: 'Get Your Prescription',
      description: 'Visit us in person, call, or have your doctor send your prescription directly to us.',
      icon: FileText,
    },
    {
      id: 'compound',
      title: 'We Compound',
      description: 'Our expert pharmacists carefully prepare your personalized medication to your exact specifications.',
      icon: Pill,
    },
    {
      id: 'deliver',
      title: 'Receive & Enjoy',
      description: 'Pick up in store or enjoy free home delivery. Your health, made easy.',
      icon: Truck,
    },
  ]
};

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-cream py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-neutral-border" 
               style={{ left: 'calc(16.666% + 40px)', right: 'calc(16.666% + 40px)' }} 
          />

          {config.steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={step.id}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Number Badge */}
                <motion.div 
                  className="relative z-10 w-16 h-16 bg-cedar text-white rounded-full flex items-center justify-center text-[24px] font-bold mx-auto mb-6 shadow-cedar"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                >
                  {index + 1}
                </motion.div>

                {/* Icon */}
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Icon className="w-7 h-7 text-cedar" />
                </div>
                
                {/* Title */}
                <h3 className="text-neutral-dark text-[22px] font-semibold mb-3">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-text text-[16px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="/contact"
            className="inline-block bg-cedar text-white px-8 py-4 rounded-lg text-[16px] font-semibold"
            whileHover={{ scale: 1.02, backgroundColor: '#1E4038' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
