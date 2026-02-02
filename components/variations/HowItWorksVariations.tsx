'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Pill, Truck, ArrowRight, User } from 'lucide-react';

const defaultConfig = {
  heading: 'How It Works',
  subheading: 'Three simple steps to personalized medication',
  steps: [
    {
      id: 'consult',
      number: '01',
      title: 'Consult',
      description: 'Talk with our expert pharmacists about your health needs and medication goals. We listen and provide expert guidance.',
      icon: MessageSquare,
    },
    {
      id: 'compound',
      number: '02',
      title: 'Compound',
      description: 'Our certified compounding pharmacists create your personalized medication using the highest quality ingredients.',
      icon: Pill,
    },
    {
      id: 'deliver',
      number: '03',
      title: 'Deliver',
      description: 'Receive your medication via free home delivery or pick it up at our pharmacy in Twin Falls.',
      icon: Truck,
    },
  ],
};

// ========================================
// V1: SLEEK & MODERN (3-Column Grid)
// Clean, centered, professional
// ========================================
export function HowItWorksV1({ config = defaultConfig }: { config?: any }) {
  return (
    <section className="relative w-full bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-semibold text-[32px] md:text-[36px] text-neutral-dark mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[17px] text-neutral-text">
            {config.subheading}
          </p>
        </motion.div>

        {/* Steps - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.steps.map((step: any, index: number) => {
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
                <div className="w-16 h-16 bg-cedar text-white rounded-full flex items-center justify-center text-[24px] font-bold font-display mx-auto mb-6">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-cream rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-cedar" />
                </div>
                
                {/* Title */}
                <h3 className="font-serif font-semibold text-[22px] text-neutral-dark mb-4">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-[15px] leading-relaxed text-neutral-text">
                  {step.description}
                </p>

                {/* Connector Line (not on last) */}
                {index < config.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-gradient-to-r from-cedar/30 to-cedar/10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V2: CREATIVE & GEOMETRIC (Cards with Hover)
// Interactive cards, subtle geometric touches
// ========================================
export function HowItWorksV2({ config = defaultConfig }: { config?: any }) {
  return (
    <section className="relative w-full bg-cream py-20 md:py-28 overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header - Left aligned */}
        <motion.div 
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-[36px] md:text-[40px] text-neutral-dark mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-neutral-text">
            {config.subheading}
          </p>
        </motion.div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {config.steps.map((step: any, index: number) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-neutral-border relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cedar/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Number */}
                  <div className="font-display font-bold text-[48px] text-cedar/10 leading-none mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-cedar/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cedar group-hover:scale-105 transition-all">
                    <Icon className="w-7 h-7 text-cedar group-hover:text-white transition-colors" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-serif font-bold text-[22px] text-neutral-dark mb-4 group-hover:text-cedar transition-colors">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-sans text-[15px] leading-relaxed text-neutral-text">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V3: SUPER IMAGINATIVE (Refined Timeline with Images)
// Editorial timeline, image placeholders, tasteful
// ========================================
export function HowItWorksV3({ config = defaultConfig }: { config?: any }) {
  return (
    <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-cedar" />
            <span className="text-cedar font-sans text-[14px] uppercase tracking-wider font-medium">
              Simple Process
            </span>
            <div className="w-12 h-[2px] bg-cedar" />
          </div>
          <h2 className="font-display font-bold text-[40px] md:text-[44px] text-neutral-dark mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-neutral-text">
            {config.subheading}
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {config.steps.map((step: any, index: number) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={step.id}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Connector (not on last) */}
                {index < config.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-[calc(100%-16px)] w-[calc(100%/3+32px)] h-[2px] bg-gradient-to-r from-cedar/30 via-cedar/20 to-cedar/30 z-0" />
                )}

                {/* Card */}
                <motion.div 
                  className="relative z-10"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-cedar text-white rounded-full flex items-center justify-center font-display font-bold text-[20px]">
                      {index + 1}
                    </div>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-cedar/20 to-transparent lg:hidden" />
                  </div>

                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-cream rounded-xl overflow-hidden mb-6 shadow-sm">
                    <div className="w-full h-full bg-gradient-to-br from-cedar/10 to-sage/20 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="w-12 h-12 text-cedar/30 mx-auto mb-2" />
                        <span className="text-neutral-text/40 text-[12px] font-sans">Step {index + 1} Image</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display font-bold text-[24px] text-neutral-dark mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="font-sans text-[15px] leading-relaxed text-neutral-text mb-4">
                    {step.description}
                  </p>

                  {/* Learn More */}
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-cedar font-semibold text-[14px] hover:gap-3 transition-all"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="/get-started"
            className="inline-flex items-center gap-3 bg-cedar text-white px-8 py-4 rounded-full text-[16px] font-semibold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
