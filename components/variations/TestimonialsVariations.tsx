'use client';

import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';

const defaultConfig = {
  heading: 'Patient Stories',
  subheading: 'Real experiences from our community',
  testimonials: [
    {
      id: 1,
      name: 'Patient Review',
      location: 'Verified Patient',
      text: 'The pharmacists at CedarRX took the time to work with my doctor to find the right compounded solution for me. Excellent communication throughout.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Patient Review',
      location: 'Verified Patient',
      text: 'Professional, knowledgeable, and genuinely caring. They explained everything clearly and made sure I understood my medication.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Patient Review',
      location: 'Verified Patient',
      text: 'Outstanding quality and service. My doctor recommended CedarRX and I\'m so glad they did. The delivery was fast and convenient.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Patient Review',
      location: 'Verified Patient',
      text: 'The attention to detail and personalized care sets CedarRX apart. They truly go above and beyond for their patients.',
      rating: 5,
    },
  ],
};

// ========================================
// V1: SLEEK & MODERN (Grid Cards)
// Clean 2x2 grid, simple cards, professional
// ========================================
export function TestimonialsV1({ config = defaultConfig }: { config?: any }) {
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

        {/* Testimonials Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-lime" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-[15px] leading-relaxed text-neutral-text mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-neutral-border pt-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-cedar/40" />
                </div>
                <div>
                  <div className="font-serif font-semibold text-[16px] text-neutral-dark">
                    {testimonial.name}
                  </div>
                  <div className="font-sans text-[14px] text-neutral-text">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// V2: CREATIVE & GEOMETRIC (Featured + Cards)
// One featured testimonial, smaller cards, asymmetric
// ========================================
export function TestimonialsV2({ config = defaultConfig }: { config?: any }) {
  return (
    <section className="relative w-full bg-white py-20 md:py-28 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Testimonial */}
          <motion.div
            className="bg-cedar text-white rounded-2xl p-10 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Quote className="w-12 h-12 text-white/30 mb-6" />
              
              <p className="font-serif text-[20px] leading-relaxed mb-8 italic">
                "{config.testimonials[0].text}"
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-7 h-7 text-white/60" />
                </div>
                <div>
                  <div className="font-sans font-bold text-[18px]">
                    {config.testimonials[0].name}
                  </div>
                  <div className="font-sans text-[14px] text-white/70">
                    {config.testimonials[0].location}
                  </div>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(config.testimonials[0].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-white" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Testimonials */}
          <div className="space-y-6">
            {config.testimonials.slice(1, 4).map((testimonial: any, index: number) => (
              <motion.div
                key={testimonial.id}
                className="bg-cream rounded-xl p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-cedar/40" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-serif font-semibold text-[16px] text-neutral-dark">
                          {testimonial.name}
                        </div>
                        <div className="font-sans text-[13px] text-neutral-text">
                          {testimonial.location}
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current text-cedar" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="font-sans text-[14px] leading-relaxed text-neutral-text">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// V3: SUPER IMAGINATIVE (Refined Magazine Style)
// Editorial layout with photos, tasteful
// ========================================
export function TestimonialsV3({ config = defaultConfig }: { config?: any }) {
  return (
    <section className="relative w-full bg-neutral-dark text-white py-20 md:py-32 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cedar/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-terra/30 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-terra" />
            <span className="text-terra font-sans text-[14px] uppercase tracking-wider font-medium">
              Testimonials
            </span>
            <div className="w-12 h-[2px] bg-terra" />
          </div>
          <h2 className="font-display font-bold text-[40px] md:text-[44px] leading-tight mb-4">
            {config.heading}
          </h2>
          <p className="font-sans text-[18px] text-white/70">
            {config.subheading}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={testimonial.id}
              className={`
                relative rounded-2xl p-8 border border-white/10 overflow-hidden
                ${index === 0 ? 'bg-cedar md:col-span-2' : 'bg-white/5 backdrop-blur-sm'}
              `}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {index === 0 && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              )}
              
              <div className="relative z-10">
                <div className={`flex items-start gap-6 ${index === 0 ? 'md:flex-row flex-col' : ''}`}>
                  {/* Avatar */}
                  <div className={`
                    rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden
                    ${index === 0 ? 'w-20 h-20 bg-white/20' : 'w-14 h-14 bg-white/10'}
                  `}>
                    <User className={`${index === 0 ? 'w-10 h-10' : 'w-7 h-7'} text-white/40`} />
                  </div>
                  
                  <div className="flex-1">
                    {/* Quote */}
                    <Quote className={`${index === 0 ? 'w-10 h-10' : 'w-8 h-8'} text-white/20 mb-4`} />
                    
                    <p className={`
                      font-serif leading-relaxed mb-6 italic
                      ${index === 0 ? 'text-[20px] md:text-[22px]' : 'text-[16px]'}
                      ${index === 0 ? 'text-white' : 'text-white/80'}
                    `}>
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`font-sans font-bold ${index === 0 ? 'text-[18px]' : 'text-[16px]'}`}>
                          {testimonial.name}
                        </div>
                        <div className={`font-sans text-[14px] ${index === 0 ? 'text-white/70' : 'text-white/60'}`}>
                          {testimonial.location}
                        </div>
                      </div>
                      
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className={`${index === 0 ? 'w-5 h-5' : 'w-4 h-4'} fill-current ${index === 0 ? 'text-white' : 'text-terra'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div 
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[
            { value: '10K+', label: 'Happy Patients' },
            { value: '99%', label: 'Satisfaction' },
            { value: '15+', label: 'Years Trusted' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display font-bold text-[32px] text-terra leading-none mb-1">
                {stat.value}
              </div>
              <div className="font-sans text-[12px] text-white/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
