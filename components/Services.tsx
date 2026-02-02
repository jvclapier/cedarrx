'use client';

import { motion } from 'framer-motion';
import { Pill, Home, Droplet, Heart, Scale } from 'lucide-react';

const config = {
  heading: 'Pharmacy Services',
  subheading: 'Comprehensive care tailored to your unique needs',
  services: [
    {
      id: 'compounding',
      title: 'Compounding',
      description: 'Custom medications formulated specifically for your individual needs and preferences.',
      icon: Pill,
      href: '/services/compounding'
    },
    {
      id: 'weight-loss',
      title: 'Weight Loss',
      description: 'Personalized weight management programs with GLP-1 medications and expert guidance.',
      icon: Scale,
      href: '/services/weight-loss'
    },
    {
      id: 'dermatology',
      title: 'Dermatology',
      description: 'Specialized dermatological compounds for acne, eczema, and other skin conditions.',
      icon: Droplet,
      href: '/services/dermatology'
    },
    {
      id: 'ed-treatment',
      title: 'ED Treatment',
      description: 'Discreet, effective erectile dysfunction treatments tailored to your health profile.',
      icon: Heart,
      href: '/services/erectile-dysfunction'
    },
    {
      id: 'home-delivery',
      title: 'Free Home Delivery',
      description: 'Convenient delivery service bringing your medications directly to your door.',
      icon: Home,
      href: '/services/home-delivery'
    },
  ]
};

export default function Services() {
  return (
    <section className="relative w-full bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.a
                key={service.id}
                href={service.href}
                className="bg-white rounded-2xl p-6 shadow-sm block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: '0 12px 24px rgba(30, 64, 56, 0.08)',
                  transition: { duration: 0.2 }
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-cream-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-cedar transition-colors duration-200">
                  <Icon className="w-7 h-7 text-cedar group-hover:text-white transition-colors duration-200" />
                </div>
                
                {/* Title */}
                <h3 className="text-neutral-dark text-[20px] font-semibold mb-2 group-hover:text-cedar transition-colors duration-200">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-text text-[15px] leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow */}
                <motion.div 
                  className="mt-4 text-cedar text-[14px] font-medium flex items-center gap-1"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn more
                  <span>→</span>
                </motion.div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
