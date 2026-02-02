'use client';

import { motion } from 'framer-motion';
import { Users, Award, Heart, MapPin, Star, Shield, CheckCircle } from 'lucide-react';

const defaultConfig = {
  heading: 'Why Choose CedarRX Pharmacy?',
  subheading: 'Expert care you can trust, personalized for your unique health journey',
  reasons: [
    {
      id: 'expert',
      title: 'Expert Pharmacists',
      description: 'Compounding specialists with decades of combined experience dedicated to your care.',
      icon: Award,
    },
    {
      id: 'personalized',
      title: 'Personalized Care',
      description: 'Every medication is tailored specifically to your individual health needs.',
      icon: Heart,
    },
    {
      id: 'quality',
      title: 'Quality Focused',
      description: 'State-of-the-art facilities and rigorous quality standards for every compound.',
      icon: Shield,
    },
    {
      id: 'trusted',
      title: 'Trusted Partner',
      description: 'Working closely with physicians to deliver exceptional patient outcomes.',
      icon: Users,
    },
  ],
  stats: [
    { label: 'Years Experience', value: '15+' },
    { label: 'Happy Patients', value: '10K+' },
    { label: 'Medications Compounded', value: '50K+' },
    { label: 'Patient Satisfaction', value: '99%' },
  ]
};

// ========================================
// V1: SLEEK & MODERN (Stats + Features)
// Clean layout, professional, 32-36px headlines
// ========================================
export function WhyCedarRXV1({ config = defaultConfig }: { config?: any }) {
  return (
    <section className="relative w-full bg-cream py-20 md:py-28">
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

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {config.stats.map((stat: any, index: number) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm"
            >
              <div className="font-display font-bold text-[36px] md:text-[42px] text-cedar leading-none mb-2">
                {stat.value}
              </div>
              <div className="font-sans text-[14px] text-neutral-text uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Reasons Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.reasons.map((reason: any, index: number) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-cedar/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-cedar" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[20px] text-neutral-dark mb-2">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-[15px] leading-relaxed text-neutral-text">
                    {reason.description}
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
// V2: CREATIVE & GEOMETRIC (Split with Image)
// Asymmetric 50/50, image placeholder, 36-40px headlines
// ========================================
export function WhyCedarRXV2({ config = defaultConfig }: { config?: any }) {
  return (
    <section className="relative w-full bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Main Image */}
            <div className="aspect-[4/3] bg-cream rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/pharmacist.jpg"
                alt="CedarRX Pharmacist"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stats */}
            <motion.div 
              className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {config.stats.slice(0, 2).map((stat: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg text-center border-t-2 border-lime">
                  <div className="font-display font-bold text-[28px] text-cedar leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="font-sans text-[11px] text-neutral-text uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-display font-bold text-[36px] md:text-[40px] text-neutral-dark mb-6">
              {config.heading}
            </h2>
            <p className="font-sans text-[18px] text-neutral-text leading-relaxed mb-10">
              {config.subheading}
            </p>

            {/* Reasons List */}
            <div className="space-y-6">
              {config.reasons.map((reason: any, index: number) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.id}
                    className="flex gap-5 items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-cedar/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-cedar" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[18px] text-neutral-dark mb-1">
                        {reason.title}
                      </h3>
                      <p className="font-sans text-[15px] leading-relaxed text-neutral-text">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// V3: SUPER IMAGINATIVE (Refined Magazine Style)
// Editorial layout with team photos, 40-44px headlines
// ========================================
export function WhyCedarRXV3({ config = defaultConfig }: { config?: any }) {
  return (
    <section className="relative w-full bg-neutral-dark text-white py-20 md:py-32 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-cedar-forest/50 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-terra" />
            <span className="text-terra font-sans text-[14px] uppercase tracking-wider font-medium">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-display font-bold text-[40px] md:text-[44px] leading-tight mb-6">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-white/70 leading-relaxed">
            {config.subheading}
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Team Photo + Trust Badge */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                <div className="w-full h-full bg-gradient-to-br from-cedar/20 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-20 h-20 text-white/20 mx-auto mb-4" />
                    <span className="text-white/30 text-[14px] font-sans">Our Team Photo</span>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-terra text-white rounded-xl px-6 py-4 shadow-xl"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="font-sans text-[13px] font-semibold">Trusted Care</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Stats + Reasons */}
          <div className="lg:col-span-7 space-y-8">
            {/* Stats Row */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {config.stats.map((stat: any, index: number) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10"
                >
                  <div className="font-display font-bold text-[32px] text-terra leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="font-sans text-[11px] text-white/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.reasons.map((reason: any, index: number) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.id}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-12 h-12 bg-cedar/30 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-serif font-bold text-[18px] text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="font-sans text-[14px] leading-relaxed text-white/70">
                      {reason.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
