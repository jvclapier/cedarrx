'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, ArrowRight, Clock, Users } from 'lucide-react';

// ========================================
// V1: SLEEK & MODERN (Function Health Inspired)
// Clean, centered, professional, 32-36px headlines
// ========================================
export function HeroV1({ config }: { config: any }) {
  return (
    <section className="relative w-full bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32">
        {/* Centered Content */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-cedar font-sans text-[14px] mb-6 bg-white px-4 py-2 rounded-full border border-cedar/20"
          >
            <MapPin className="w-4 h-4" />
            <span>{config.eyebrow}</span>
          </motion.div>

          {/* Headline - Clean & Centered */}
          <h1 className="font-display font-semibold leading-tight mb-6">
            <motion.span 
              className="block text-[32px] md:text-[36px] text-neutral-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {config.title}
            </motion.span>
            <motion.span 
              className="block text-[32px] md:text-[36px] text-cedar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {config.titleAccent}
            </motion.span>
          </h1>
          
          {/* Description */}
          <motion.p 
            className="font-sans text-[17px] md:text-[18px] leading-relaxed text-neutral-text max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {config.description}
          </motion.p>

          {/* CTAs - Horizontal */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href={config.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 bg-cedar text-white px-8 py-4 rounded-lg text-[16px] font-semibold font-sans"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {config.primaryCta.text}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href={`tel:${config.contactInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-cedar px-8 py-4 rounded-lg text-[16px] font-semibold font-sans border-2 border-neutral-border hover:border-cedar transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              {config.contactInfo.phone}
            </motion.a>
          </motion.div>

          {/* Contact Info - Clean Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="bg-white rounded-xl p-6 text-left shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-cedar" />
                <div className="font-sans font-semibold text-[15px] text-neutral-dark">Hours</div>
              </div>
              <div className="text-neutral-text text-[14px]">Mon-Fri: 9am-6pm</div>
              <div className="text-neutral-text text-[14px]">Sat-Sun: Closed</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-left shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-cedar" />
                <div className="font-sans font-semibold text-[15px] text-neutral-dark">Location</div>
              </div>
              <div className="text-neutral-text text-[14px] leading-relaxed">
                {config.contactInfo.address}
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&h=600&fit=crop&q=80"
              alt="CedarRX Pharmacy Team"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cedar/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-lg">
                <div className="flex items-center gap-2 text-cedar font-semibold text-[14px]">
                  <Users className="w-4 h-4" />
                  <span>Expert Pharmacists Ready to Help</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ========================================
// V2: CREATIVE & GEOMETRIC (Split Layout with Image)
// Asymmetric, floating cards, 36-40px headlines
// ========================================
export function HeroV2({ config }: { config: any }) {
  return (
    <section className="relative w-full bg-cream overflow-hidden min-h-[85vh] flex items-center">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/20 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 text-cedar font-serif italic text-[15px] mb-8 bg-white px-5 py-2 rounded-full border border-cedar/30 shadow-sm"
            >
              <div className="w-2 h-2 bg-cedar rounded-full" />
              <span>{config.eyebrow}</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display font-bold leading-tight mb-6">
              <motion.span 
                className="block text-[36px] md:text-[40px] text-neutral-dark"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {config.title}
              </motion.span>
              <motion.span 
                className="block text-[36px] md:text-[40px] text-cedar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {config.titleAccent}
              </motion.span>
            </h1>
            
            {/* Description */}
            <motion.p 
              className="font-sans text-[18px] leading-relaxed text-neutral-text max-w-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {config.description}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href={config.primaryCta.href}
                className="inline-flex items-center gap-2 bg-cedar text-white px-8 py-4 rounded-xl text-[16px] font-semibold font-sans shadow-lg shadow-cedar/20"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {config.primaryCta.text}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href={`tel:${config.contactInfo.phone}`}
                className="inline-flex items-center gap-2 bg-white text-cedar px-8 py-4 rounded-xl text-[16px] font-semibold font-sans border-2 border-cedar/20 hover:border-cedar/50 transition-colors"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                {config.contactInfo.phone}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Image + Info Card */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Image Placeholder */}
            <div className="relative aspect-[4/3] bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cedar/10 to-sage/20 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-20 h-20 text-cedar/30 mx-auto mb-4" />
                  <span className="text-neutral-text/50 text-[14px] font-sans">Pharmacist Team Photo</span>
                </div>
              </div>
            </div>

            {/* Floating Info Card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cedar/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cedar" />
                </div>
                <div>
                  <div className="font-serif font-semibold text-[16px] text-neutral-dark mb-1">Visit Us</div>
                  <div className="text-neutral-text text-[13px]">{config.contactInfo.address}</div>
                </div>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-cedar text-white rounded-xl px-5 py-3 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
            >
              <div className="font-display font-bold text-[24px] leading-none">15+</div>
              <div className="font-sans text-[11px] opacity-90">Years</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// V3: SUPER IMAGINATIVE (Refined Editorial)
// Magazine-style, tasteful asymmetry, 40-44px headlines
// ========================================
export function HeroV3({ config }: { config: any }) {
  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - Larger */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <motion.div 
              className="inline-flex items-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-[2px] bg-cedar" />
              <span className="text-cedar font-sans text-[14px] uppercase tracking-wider font-medium">
                {config.eyebrow}
              </span>
            </motion.div>

            {/* Large Headline */}
            <h1 className="font-display font-bold leading-[1.1] mb-8">
              <motion.span 
                className="block text-[40px] md:text-[44px] text-neutral-dark"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {config.title}
              </motion.span>
              <motion.span 
                className="block text-[40px] md:text-[44px] text-cedar italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {config.titleAccent}
              </motion.span>
            </h1>
            
            {/* Description with border accent */}
            <motion.div 
              className="relative pl-6 mb-10 border-l-2 border-cedar/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="font-sans text-[18px] leading-relaxed text-neutral-text max-w-md">
                {config.description}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href={config.primaryCta.href}
                className="inline-flex items-center gap-3 bg-cedar text-white px-8 py-4 rounded-full text-[16px] font-semibold font-sans"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {config.primaryCta.text}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href={`tel:${config.contactInfo.phone}`}
                className="inline-flex items-center gap-2 text-cedar px-6 py-4 text-[16px] font-semibold font-sans hover:opacity-70 transition-opacity"
                whileHover={{ x: 4 }}
              >
                <Phone className="w-5 h-5" />
                {config.contactInfo.phone}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            className="lg:col-span-6 lg:pl-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-12 gap-4">
              {/* Large Image */}
              <div className="col-span-8 row-span-2">
                <motion.div 
                  className="aspect-[3/4] bg-cream rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-cedar/10 to-sage/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Users className="w-16 h-16 text-cedar/30 mx-auto mb-3" />
                      <span className="text-neutral-text/50 text-[13px] font-sans">Pharmacist Photo</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Small Image Top */}
              <div className="col-span-4">
                <motion.div 
                  className="aspect-square bg-cedar rounded-2xl flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className="font-display font-bold text-[32px] leading-none">15+</div>
                    <div className="font-sans text-[11px] opacity-80 mt-1">Years</div>
                  </div>
                </motion.div>
              </div>

              {/* Info Card */}
              <div className="col-span-4">
                <motion.div 
                  className="aspect-square bg-sage/30 rounded-2xl p-4 flex flex-col justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Clock className="w-6 h-6 text-cedar mb-2" />
                  <div className="font-sans font-semibold text-[12px] text-neutral-dark">Hours</div>
                  <div className="font-sans text-[11px] text-neutral-text">Mon-Fri 9-6</div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <motion.div 
              className="mt-4 bg-cream rounded-xl p-4 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <MapPin className="w-5 h-5 text-cedar flex-shrink-0" />
              <span className="font-sans text-[14px] text-neutral-text">{config.contactInfo.address}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
