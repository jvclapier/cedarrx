'use client';

import { motion } from 'framer-motion';
import { Pill, Home, Droplet, Heart, Scale, ArrowRight } from 'lucide-react';

const defaultConfig = {
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

// ========================================
// V1: SLEEK & MODERN (Clean Grid)
// Traditional 3-column grid, clean cards, 32-36px headlines
// ========================================
export function ServicesV1({ config = defaultConfig }: { config?: any }) {
  return (
    <section className="relative w-full bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header - Centered */}
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

        {/* Services Grid - Clean 3 Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.map((service: any, index: number) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href={service.href}
                className="group bg-cream rounded-xl p-8 hover:bg-white transition-colors border border-transparent hover:border-cedar/20 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-5 group-hover:bg-cedar/10 transition-colors">
                  <Icon className="w-7 h-7 text-cedar" />
                </div>
                
                {/* Title */}
                <h3 className="font-serif font-semibold text-[20px] text-neutral-dark mb-3 group-hover:text-cedar transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-[15px] leading-relaxed text-neutral-text mb-4">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-cedar text-[14px] font-semibold group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V2: CREATIVE & GEOMETRIC (Bento Grid)
// Mixed sizes, some overlap, 36-42px headlines
// ========================================
export function ServicesV2({ config = defaultConfig }: { config?: any }) {
  return (
    <section className="relative w-full bg-gradient-to-b from-cream to-white py-20 md:py-28 overflow-hidden">
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

        {/* Bento Grid - Mixed Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-fr">
          {/* First service - Large */}
          <motion.a
            href={config.services[0].href}
            className="group md:col-span-2 lg:col-span-3 bg-cedar text-white rounded-2xl p-8 md:p-10 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <config.services[0].icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-[28px] mb-4">
                {config.services[0].title}
              </h3>
              <p className="font-sans text-[16px] leading-relaxed text-white/90 mb-6">
                {config.services[0].description}
              </p>
              <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.a>

          {/* Services 2-3 - Medium */}
          {config.services.slice(1, 3).map((service: any, index: number) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href={service.href}
                className="group md:col-span-2 lg:col-span-3 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-neutral-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="w-14 h-14 bg-terra/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-terra" />
                </div>
                <h3 className="font-serif font-bold text-[22px] text-neutral-dark mb-3 group-hover:text-cedar transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-neutral-text mb-4">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-cedar font-semibold group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            );
          })}

          {/* Services 4-5 - Small */}
          {config.services.slice(3, 5).map((service: any, index: number) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href={service.href}
                className="group md:col-span-2 lg:col-span-3 bg-gradient-to-br from-sage-light/20 to-cream rounded-2xl p-8 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-7 h-7 text-burgundy" />
                </div>
                <h3 className="font-serif font-bold text-[22px] text-neutral-dark mb-3 group-hover:text-cedar transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-neutral-text mb-4">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-cedar font-semibold group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V3: SUPER IMAGINATIVE (Asymmetric Masonry)
// Creative angles, overlaps, 40-48px headlines
// ========================================
export function ServicesV3({ config = defaultConfig }: { config?: any }) {
  return (
    <section className="relative w-full bg-neutral-dark text-white py-20 md:py-32 overflow-hidden">
      {/* Geometric decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-terra/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cedar/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header - Dramatic */}
        <motion.div 
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative inline-block">
            <h2 className="font-display font-black text-[40px] md:text-[48px] leading-tight mb-6">
              <span className="block">{config.heading.split(' ')[0]}</span>
              <span className="block text-terra italic">{config.heading.split(' ').slice(1).join(' ')}</span>
            </h2>
            <div className="absolute -bottom-2 left-0 w-32 h-4 bg-terra/40 blur-sm" />
          </div>
          <p className="font-sans text-[19px] text-white/80 leading-relaxed mt-8">
            {config.subheading}
          </p>
        </motion.div>

        {/* Asymmetric Masonry Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto">
          {/* Service 1 - Top left, rotated */}
          <motion.a
            href={config.services[0].href}
            className="group lg:col-span-5 bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 hover:bg-white/10 transition-all relative"
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
          >
            <div className="w-16 h-16 bg-cedar rounded-2xl flex items-center justify-center mb-6">
              <config.services[0].icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-[28px] mb-4 group-hover:text-terra transition-colors">
              {config.services[0].title}
            </h3>
            <p className="font-sans text-[16px] leading-relaxed text-white/70 mb-6">
              {config.services[0].description}
            </p>
            <div className="inline-flex items-center gap-3 text-terra font-semibold group-hover:gap-4 transition-all">
              <span>Explore</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.a>

          {/* Service 2 - Top right, elevated */}
          <motion.a
            href={config.services[1].href}
            className="group lg:col-span-7 bg-gradient-to-br from-terra to-burgundy rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-terra/20 transition-all relative overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <config.services[1].icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-[28px] mb-4">
                {config.services[1].title}
              </h3>
              <p className="font-sans text-[16px] leading-relaxed text-white/90 mb-6">
                {config.services[1].description}
              </p>
              <div className="inline-flex items-center gap-3 text-white font-bold group-hover:gap-4 transition-all">
                <span>Explore</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.a>

          {/* Service 3 - Middle left */}
          <motion.a
            href={config.services[2].href}
            className="group lg:col-span-4 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ x: 6, scale: 1.02 }}
          >
            <div className="w-14 h-14 bg-sage-light/20 rounded-xl flex items-center justify-center mb-5">
              <config.services[2].icon className="w-7 h-7 text-sage-light" />
            </div>
            <h3 className="font-serif font-bold text-[24px] mb-4 group-hover:text-terra transition-colors">
              {config.services[2].title}
            </h3>
            <p className="font-sans text-[15px] leading-relaxed text-white/70 mb-5">
              {config.services[2].description}
            </p>
            <div className="inline-flex items-center gap-2 text-sage-light font-semibold group-hover:gap-3 transition-all">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.a>

          {/* Service 4 - Middle center, rotated */}
          <motion.a
            href={config.services[3].href}
            className="group lg:col-span-4 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all relative"
            initial={{ opacity: 0, rotate: 2 }}
            whileInView={{ opacity: 1, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
          >
            <div className="w-14 h-14 bg-burgundy/30 rounded-xl flex items-center justify-center mb-5">
              <config.services[3].icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-serif font-bold text-[24px] mb-4 group-hover:text-terra transition-colors">
              {config.services[3].title}
            </h3>
            <p className="font-sans text-[15px] leading-relaxed text-white/70 mb-5">
              {config.services[3].description}
            </p>
            <div className="inline-flex items-center gap-2 text-terra font-semibold group-hover:gap-3 transition-all">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.a>

          {/* Service 5 - Middle right */}
          <motion.a
            href={config.services[4].href}
            className="group lg:col-span-4 bg-cedar rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ x: -6, scale: 1.02 }}
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <config.services[4].icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-serif font-bold text-[24px] mb-4 group-hover:text-white/90 transition-colors">
              {config.services[4].title}
            </h3>
            <p className="font-sans text-[15px] leading-relaxed text-white/80 mb-5">
              {config.services[4].description}
            </p>
            <div className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-3 transition-all">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
