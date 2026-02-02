'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Clock, Shield } from 'lucide-react';

const config = {
  heading: 'Why Choose CedarRX',
  subheading: 'Local expertise meets personalized care',
  reasons: [
    {
      id: 'expert',
      title: 'Expert Pharmacists',
      description: 'Our expertly trained pharmacists provide personalized consultations and answer all your questions.',
      icon: Users,
      stat: '15+',
      statLabel: 'Years Experience'
    },
    {
      id: 'personalized',
      title: 'Personalized Care',
      description: 'We believe in customized healthcare solutions that meet your unique needs and preferences.',
      icon: Heart,
      stat: '100%',
      statLabel: 'Custom Formulated'
    },
    {
      id: 'convenient',
      title: 'Convenient Service',
      description: 'Free home delivery and flexible hours make getting your medications easy and stress-free.',
      icon: Clock,
      stat: '24hr',
      statLabel: 'Delivery Time'
    },
    {
      id: 'trusted',
      title: 'Trusted Local',
      description: 'An independent pharmacy serving Twin Falls with trusted, high-quality pharmaceutical care.',
      icon: Shield,
      stat: '5000+',
      statLabel: 'Patients Served'
    },
  ]
};

export default function WhyCedarRX() {
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

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.reasons.map((reason, index) => {
            const Icon = reason.icon;
            
            return (
              <motion.div
                key={reason.id}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Icon Circle */}
                <motion.div 
                  className="w-20 h-20 bg-cream-light rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.05, backgroundColor: '#2D5F4F' }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-10 h-10 text-cedar" />
                </motion.div>

                {/* Stat */}
                <div className="mb-4">
                  <div className="text-[40px] md:text-[48px] font-bold text-cedar leading-none mb-2">
                    {reason.stat}
                  </div>
                  <div className="text-[13px] text-neutral-text uppercase tracking-wide font-medium">
                    {reason.statLabel}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-neutral-dark text-[20px] font-semibold mb-3">
                  {reason.title}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-text text-[15px] leading-relaxed">
                  {reason.description}
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
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-neutral-text text-[16px] mb-6">
            Your family's health is our top priority
          </p>
          <motion.a
            href="/about"
            className="inline-flex items-center gap-2 text-cedar text-[16px] font-semibold hover:text-cedar-forest transition-colors"
            whileHover={{ x: 3 }}
          >
            Learn more about us
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
