'use client';

import { motion } from 'framer-motion';
import { Pill, Home, Droplet, Heart, Scale, ArrowRight } from 'lucide-react';

const defaultConfig = {
  heading: 'Our Services',
  subheading: 'Personalized care for your unique health journey',
  services: [
    {
      id: 'compounding',
      title: 'Compounding',
      description: 'Custom medications formulated specifically for your individual needs and preferences.',
      icon: Pill,
      href: '/services/compounding',
      image: '/images/compounding_2.jpg'
    },
    {
      id: 'weight-loss',
      title: 'Weight Loss',
      description: 'GLP-1 and other weight management medications compounded to your doctor\'s specifications.',
      icon: Scale,
      href: '/services/weight-loss',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80'
    },
    {
      id: 'dermatology',
      title: 'Dermatology',
      description: 'Specialized dermatological compounds for acne, eczema, and other skin conditions.',
      icon: Droplet,
      href: '/services/dermatology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop&q=80'
    },
    {
      id: 'sexual-health',
      title: 'Sexual Health',
      description: 'Discreet, effective treatments tailored to your health profile.',
      icon: Heart,
      href: '/services/sexual-health',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80'
    },
    {
      id: 'home-delivery',
      title: 'Free Delivery',
      description: 'Convenient delivery service bringing your medications directly to your door.',
      icon: Home,
      href: '/services/home-delivery',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop&q=80'
    }
  ]
};

export function ServicesV1({ config = defaultConfig }: { config?: typeof defaultConfig }) {
  return (
    <section className="relative w-full bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href={service.href}
                className="group bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-sage/30 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-cedar/40" />
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cedar" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-[20px] text-neutral-dark mb-2 group-hover:text-cedar transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[15px] leading-relaxed text-neutral-text mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-cedar text-[14px] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServicesV2({ config = defaultConfig }: { config?: typeof defaultConfig }) {
  const FirstIcon = config.services[0].icon;
  
  return (
    <section className="relative w-full bg-cream py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-[36px] md:text-[42px] text-neutral-dark mb-4">
              {config.heading}
            </h2>
            <p className="font-sans text-[18px] text-neutral-text">
              {config.subheading}
            </p>
          </div>
          <motion.a
            href="/services"
            className="inline-flex items-center gap-2 bg-cedar text-white px-6 py-3 rounded-full font-semibold hover:bg-cedar-forest transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.a
            href={config.services[0].href}
            className="group lg:col-span-2 lg:row-span-2 bg-cedar rounded-3xl overflow-hidden relative min-h-[400px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cedar to-cedar-forest" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-white">
              <div>
                <div className="w-16 h-16 bg-lime/20 rounded-2xl flex items-center justify-center mb-6">
                  <FirstIcon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-[32px] md:text-[40px] mb-4">
                  {config.services[0].title}
                </h3>
                <p className="font-sans text-[18px] text-white/90 max-w-md leading-relaxed">
                  {config.services[0].description}
                </p>
              </div>
              <div className="flex items-center gap-3 text-white font-semibold group-hover:gap-4 transition-all">
                <div className="w-2 h-2 bg-lime rounded-full" />
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.a>

          {config.services.slice(1).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href={service.href}
                className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-14 h-14 bg-cedar/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-cedar group-hover:scale-105 transition-all">
                  <Icon className="w-7 h-7 text-cedar group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-[22px] text-neutral-dark mb-3 group-hover:text-cedar transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-neutral-text mb-4">
                  {service.description}
                </p>
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

export function ServicesV3({ config = defaultConfig }: { config?: typeof defaultConfig }) {
  return (
    <section className="relative w-full bg-neutral-dark py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cedar/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block text-white/60 font-serif italic text-[16px] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Personalized Care
          </motion.span>
          <h2 className="font-display font-bold text-[40px] md:text-[48px] text-white mb-6 leading-tight">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-white/70 leading-relaxed">
            {config.subheading}
          </p>
        </motion.div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.services.slice(0, 2).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.a
                  key={service.id}
                  href={service.href}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="h-56 relative overflow-hidden">
                    {service.image ? (
                      <>
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 to-transparent" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cedar/30 to-sage/20 flex items-center justify-center">
                        <Icon className="w-20 h-20 text-white/40" />
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="font-display font-bold text-[26px] text-white mb-3 group-hover:text-[#89b92b] transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-[16px] leading-relaxed text-white/70 mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-3 text-white/80 font-semibold group-hover:text-[#89b92b] group-hover:gap-4 transition-all">
                      <span>Explore</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.services.slice(2).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.a
                  key={service.id}
                  href={service.href}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#89b92b]/50 hover:bg-white/10 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#89b92b] group-hover:scale-105 transition-all">
                    <Icon className="w-7 h-7 text-white/60 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-serif font-bold text-[22px] text-white mb-3 group-hover:text-[#89b92b] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[15px] leading-relaxed text-white/60 mb-5">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/70 text-[14px] font-semibold group-hover:text-[#89b92b] group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

// Simple 4-service config (no Free Delivery)
const simpleServicesConfig = {
  heading: 'Our Services',
  subheading: 'Personalized care for your unique health journey',
  services: [
    {
      id: 'compounding',
      title: 'Compounding',
      description: 'Custom medications formulated specifically for your individual needs and preferences.',
    },
    {
      id: 'weight-loss',
      title: 'Weight Loss',
      description: 'GLP-1 and other weight management medications compounded to your doctor\'s specifications.',
    },
    {
      id: 'dermatology',
      title: 'Dermatology',
      description: 'Specialized dermatological compounds for acne, eczema, and other skin conditions.',
    },
    {
      id: 'sexual-health',
      title: 'Sexual Health',
      description: 'Discreet, effective treatments tailored to your health profile.',
    },
  ]
};

// ========================================
// V4: SIMPLE GRID (Minimal White Cards)
// Clean 2x2 grid, no icons, no images
// ========================================
export function ServicesV4({ config = simpleServicesConfig }: { config?: typeof simpleServicesConfig }) {
  return (
    <section className="relative w-full bg-cream py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-[36px] md:text-[42px] text-neutral-dark mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-neutral-text">
            {config.subheading}
          </p>
        </motion.div>

        {/* Simple 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-display font-bold text-[24px] text-neutral-dark mb-4">
                {service.title}
              </h3>
              <p className="font-sans text-[16px] leading-relaxed text-neutral-text">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V5: SIMPLE GRID (Elegant Bordered Cards)
// 2x2 grid with subtle borders and hover accent
// ========================================
export function ServicesV5({ config = simpleServicesConfig }: { config?: typeof simpleServicesConfig }) {
  return (
    <section className="relative w-full bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cedar font-serif italic text-[16px] mb-4 block">What We Offer</span>
          <h2 className="font-display font-bold text-[36px] md:text-[42px] text-neutral-dark mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-neutral-text">
            {config.subheading}
          </p>
        </motion.div>

        {/* 2x2 Grid with Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-cream/50 rounded-xl p-8 md:p-10 border border-neutral-border hover:border-cedar transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="font-display font-bold text-[22px] text-neutral-dark mb-3 group-hover:text-cedar transition-colors">
                {service.title}
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-neutral-text">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V6: SIMPLE GRID (Dark with Light Cards)
// Modern contrast, 2x2 grid
// ========================================
export function ServicesV6({ config = simpleServicesConfig }: { config?: typeof simpleServicesConfig }) {
  return (
    <section className="relative w-full bg-neutral-dark py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-[36px] md:text-[42px] text-white mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-white/70">
            {config.subheading}
          </p>
        </motion.div>

        {/* 2x2 Grid - Light Cards on Dark */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-white rounded-2xl p-8 md:p-10 hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-display font-bold text-[24px] text-neutral-dark mb-4">
                {service.title}
              </h3>
              <p className="font-sans text-[16px] leading-relaxed text-neutral-text">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Config with images for 4 services
const imageServicesConfig = {
  heading: 'Our Services',
  subheading: 'Personalized care for your unique health journey',
  services: [
    {
      id: 'compounding',
      title: 'Compounding',
      description: 'Custom medications formulated specifically for your individual needs and preferences.',
      image: '/images/compounding.png'
    },
    {
      id: 'weight-loss',
      title: 'Weight Loss',
      description: 'GLP-1 and other weight management medications compounded to your doctor\'s specifications.',
      image: '/images/weight_loss.png'
    },
    {
      id: 'dermatology',
      title: 'Dermatology',
      description: 'Specialized dermatological compounds for acne, eczema, and other skin conditions.',
      image: '/images/derm.png'
    },
    {
      id: 'sexual-health',
      title: 'Sexual Health',
      description: 'Discreet, effective treatments tailored to your health profile.',
      image: '/images/sexual health.png'
    },
  ]
};

// ========================================
// V7: SIMPLE GRID WITH IMAGES (Card Style)
// 2x2 grid with images above content
// ========================================
export function ServicesV7({ config = imageServicesConfig }: { config?: typeof imageServicesConfig }) {
  return (
    <section className="relative w-full bg-cream py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-[36px] md:text-[42px] text-neutral-dark mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-neutral-text">
            {config.subheading}
          </p>
        </motion.div>

        {/* 2x2 Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-8">
                <h3 className="font-display font-bold text-[24px] text-neutral-dark mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-[16px] leading-relaxed text-neutral-text">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V8: SIMPLE GRID WITH IMAGES (Overlay Style)
// 2x2 grid with text overlaid on images
// ========================================
export function ServicesV8({ config = imageServicesConfig }: { config?: typeof imageServicesConfig }) {
  return (
    <section className="relative w-full bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-[36px] md:text-[42px] text-neutral-dark mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-neutral-text">
            {config.subheading}
          </p>
        </motion.div>

        {/* 2x2 Grid - Image with Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/50 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display font-bold text-[26px] text-white mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-white/80">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V9: SIMPLE GRID WITH IMAGES (Side by Side)
// Alternating image/content layout
// ========================================
export function ServicesV9({ config = imageServicesConfig }: { config?: typeof imageServicesConfig }) {
  return (
    <section className="relative w-full bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-[36px] md:text-[42px] text-neutral-dark mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-neutral-text">
            {config.subheading}
          </p>
        </motion.div>

        {/* 2x2 Grid - Side by Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="w-2/5 flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="font-display font-bold text-[22px] text-neutral-dark mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-[14px] leading-relaxed text-neutral-text">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V10: SIMPLE GRID WITH IMAGES (Side by Side - Dark)
// Dark background with white cards
// ========================================
export function ServicesV10({ config = imageServicesConfig }: { config?: typeof imageServicesConfig }) {
  return (
    <section className="relative w-full bg-neutral-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-[36px] md:text-[42px] text-white mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-white/70">
            {config.subheading}
          </p>
        </motion.div>

        {/* 2x2 Grid - Side by Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="w-2/5 flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="font-display font-bold text-[22px] text-neutral-dark mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-[14px] leading-relaxed text-neutral-text">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V11: FULL DARK MODE (Glass Cards)
// Dark background, semi-transparent glass cards
// ========================================
export function ServicesV11({ config = imageServicesConfig }: { config?: typeof imageServicesConfig }) {
  return (
    <section className="relative w-full bg-neutral-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-[36px] md:text-[42px] text-white mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-white/70">
            {config.subheading}
          </p>
        </motion.div>

        {/* 2x2 Grid - Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all flex h-[200px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Image */}
              <div className="w-[200px] h-full flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="font-display font-bold text-[22px] text-white mb-2 group-hover:text-lime transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-[14px] leading-relaxed text-white/70">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V12: FULL DARK MODE (Image Cards with Overlay)
// Dark background, cards with image and text overlay
// ========================================
export function ServicesV12({ config = imageServicesConfig }: { config?: typeof imageServicesConfig }) {
  return (
    <section className="relative w-full bg-neutral-dark py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-[36px] md:text-[42px] text-white mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-white/70">
            {config.subheading}
          </p>
        </motion.div>

        {/* 2x2 Grid - Image Cards with Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative aspect-[3/2] rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 transition-all" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display font-bold text-[24px] text-white mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-[14px] leading-relaxed text-white/80">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V13: FULL DARK MODE (Minimal Text Cards)
// Dark background, simple text-only dark cards
// ========================================
export function ServicesV13({ config = imageServicesConfig }: { config?: typeof imageServicesConfig }) {
  return (
    <section className="relative w-full bg-neutral-dark py-20 md:py-28">
      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cedar/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cedar/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-[36px] md:text-[42px] text-white mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-white/70">
            {config.subheading}
          </p>
        </motion.div>

        {/* 2x2 Grid - Minimal Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-cedar/50 hover:bg-white/10 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="font-display font-bold text-[26px] text-white mb-3 group-hover:text-cedar-light transition-colors">
                {service.title}
              </h3>
              <p className="font-sans text-[16px] leading-relaxed text-white/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
