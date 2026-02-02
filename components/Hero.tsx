'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';

const config = {
  eyebrow: 'Twin Falls, Idaho',
  title: 'Your Expert',
  titleAccent: 'Compounding Pharmacy',
  description: 'Personalized medications crafted by expert pharmacists for your unique health needs. Experience care that\'s as unique as you are.',
  primaryCta: {
    text: 'Refill Prescription',
    href: '/refill'
  },
  secondaryCta: {
    text: 'Contact Us',
    href: '/contact'
  },
  contactInfo: {
    phone: '208-329-7811',
    address: '1309 Blue Lakes Blvd. N, Twin Falls, ID 83301'
  }
};

export default function Hero() {
  return (
    <section className="relative w-full bg-cream py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-cedar font-medium text-[14px] mb-6"
          >
            <MapPin className="w-4 h-4" />
            <span>{config.eyebrow}</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-neutral-dark font-semibold leading-tight">
            <span className="block text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
              {config.title}{' '}
            </span>
            <span className="block text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-cedar">
              {config.titleAccent}
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-neutral-text text-[18px] md:text-[20px] font-normal mt-6 leading-relaxed max-w-2xl mx-auto">
            {config.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <motion.a
              href={config.primaryCta.href}
              className="bg-cedar text-white px-8 py-4 rounded-lg text-[16px] font-semibold"
              whileHover={{ scale: 1.02, backgroundColor: '#1E4038' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {config.primaryCta.text}
            </motion.a>
            
            <motion.a
              href={config.secondaryCta.href}
              className="bg-white text-cedar px-8 py-4 rounded-lg text-[16px] font-semibold border-2 border-neutral-border"
              whileHover={{ scale: 1.02, borderColor: '#2D5F4F' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {config.secondaryCta.text}
            </motion.a>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-neutral-border flex flex-col sm:flex-row items-center justify-center gap-6 text-[14px] text-neutral-text"
          >
            <a 
              href={`tel:${config.contactInfo.phone}`}
              className="flex items-center gap-2 hover:text-cedar transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{config.contactInfo.phone}</span>
            </a>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{config.contactInfo.address}</span>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-[14px] text-neutral-text"
          >
            Mon - Fri: 9am - 6pm • Sat-Sun: Closed
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
