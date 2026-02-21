'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight, ChevronDown } from 'lucide-react';

const defaultConfig = {
  businessName: 'CedarRX',
  tagline: 'Expert compounding pharmacy delivering personalized medications nationwide',
  contact: {
    phone: '(208) 329-7811',
    email: 'info.cedarrx@gmail.com',
    address: '1309 Blue Lakes Blvd. N, Twin Falls, ID 83301',
  },
  hours: {
    weekday: 'Mon-Fri: 9am-6pm',
    weekend: 'Sat-Sun: Closed',
  },
  links: {
    services: [
      { label: 'Compounding', href: '#services' },
      { label: 'Weight Loss', href: '#services' },
      { label: 'Dermatology', href: '#services' },
      { label: 'Sexual Health', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#why-cedarrx' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Contact', href: '#footer' },
    ],
  },
  social: [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ],
};

// ========================================
// V1: SLEEK & MODERN (Clean Sitemap)
// Traditional footer layout, professional
// ========================================
export function FooterV1({ config = defaultConfig }: { config?: any }) {
  return (
    <footer className="relative w-full bg-cedar-forest text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-[24px] mb-4">{config.businessName}</h3>
            <p className="font-sans text-[14px] text-white/70 leading-relaxed mb-6">
              {config.tagline}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {config.social.map((social: any) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-sans font-semibold text-[16px] mb-4">Services</h4>
            <ul className="space-y-2">
              {config.links.services.map((link: any) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-sans font-semibold text-[16px] mb-4">Company</h4>
            <ul className="space-y-2">
              {config.links.company.map((link: any) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-sans font-semibold text-[16px] mt-6 mb-2">Hours</h4>
            <div className="font-sans text-[14px] text-white/70 space-y-1">
              <p>{config.hours.weekday}</p>
              <p>{config.hours.weekend}</p>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-sans font-semibold text-[16px] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-white/70" />
                <a href={`tel:${config.contact.phone}`} className="font-sans text-[14px] text-white/70 hover:text-white transition-colors">
                  {config.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-white/70" />
                <a href={`mailto:${config.contact.email}`} className="font-sans text-[14px] text-white/70 hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-white/70" />
                <span className="font-sans text-[14px] text-white/70">
                  {config.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[14px] text-white/60">
            © 2026 {config.businessName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="font-sans text-[14px] text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="font-sans text-[14px] text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ========================================
// V2: CREATIVE & GEOMETRIC (Contact Focus)
// Asymmetric with contact cards, modern
// ========================================
export function FooterV2({ config = defaultConfig }: { config?: any }) {
  return (
    <footer className="relative w-full bg-neutral-dark text-white py-16 md:py-20 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cedar/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Top CTA Section */}
        <motion.div 
          className="bg-cedar rounded-2xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-[28px] md:text-[32px] mb-2">Ready to get started?</h3>
              <p className="font-sans text-[16px] text-white/80">Contact us today for personalized care.</p>
            </div>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-cedar px-8 py-4 rounded-full font-semibold text-[16px]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand + Contact (60%) */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-[28px] mb-4">{config.businessName}</h3>
            <p className="font-sans text-[16px] text-white/70 leading-relaxed mb-8 max-w-md">
              {config.tagline}
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a href={`tel:${config.contact.phone}`} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5 text-terra" />
                <span className="font-sans text-[15px]">{config.contact.phone}</span>
              </a>
              <a href={`mailto:${config.contact.email}`} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5 text-terra" />
                <span className="font-sans text-[15px]">{config.contact.email}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {config.social.map((social: any) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-terra transition-colors"
                    whileHover={{ y: -4 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links (40%) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif font-semibold text-[16px] mb-4">Services</h4>
              <ul className="space-y-2">
                {config.links.services.map((link: any) => (
                  <li key={link.label}>
                    <a href={link.href} className="font-sans text-[14px] text-white/70 hover:text-terra transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-[16px] mb-4">Company</h4>
              <ul className="space-y-2">
                {config.links.company.map((link: any) => (
                  <li key={link.label}>
                    <a href={link.href} className="font-sans text-[14px] text-white/70 hover:text-terra transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[14px] text-white/60">
            © 2026 {config.businessName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="font-sans text-[14px] text-white/60 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms" className="font-sans text-[14px] text-white/60 hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ========================================
// V3: SUPER IMAGINATIVE (Refined Editorial)
// Magazine-style, tasteful, refined
// ========================================
export function FooterV3({ config = defaultConfig }: { config?: any }) {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <footer className="relative w-full bg-cream text-neutral-dark overflow-hidden">
      {/* Main Footer */}
      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <img 
                src="/images/cedar_logo_transparent.png"
                alt="Cedar Pharmacy Logo"
                className="h-16 w-auto mb-4"
              />
              <p className="font-sans text-[16px] text-neutral-text leading-relaxed mb-6">
                {config.tagline}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cedar" />
                  <span className="font-sans text-[14px] text-neutral-text">{config.contact.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cedar" />
                  <a href={`tel:${config.contact.phone}`} className="font-sans text-[14px] text-neutral-text hover:text-cedar transition-colors">
                    {config.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cedar" />
                  <a href={`mailto:${config.contact.email}`} className="font-sans text-[14px] text-neutral-text hover:text-cedar transition-colors">
                    {config.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-serif font-bold text-[16px] text-neutral-dark mb-4">Services</h4>
                <ul className="space-y-2">
                  {config.links.services.map((link: any) => (
                    <li key={link.label}>
                      <a href={link.href} className="font-sans text-[14px] text-neutral-text hover:text-cedar transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-serif font-bold text-[16px] text-neutral-dark mb-4">Company</h4>
                <ul className="space-y-2">
                  {config.links.company.map((link: any) => (
                    <li key={link.label}>
                      <a href={link.href} className="font-sans text-[14px] text-neutral-text hover:text-cedar transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-serif font-bold text-[16px] text-neutral-dark mb-4">Hours</h4>
                <div className="font-sans text-[14px] text-neutral-text space-y-1">
                  <p>{config.hours.weekday}</p>
                  <p>{config.hours.weekend}</p>
                </div>

                {/* LegitScript badge — replace placeholder once badge is received */}
                <div className="mt-6">
                  {/* LEGITSCRIPT_PLACEHOLDER — insert LegitScript badge code here */}
                  <div className="inline-flex items-center gap-1.5 border border-neutral-border rounded-lg px-3 py-2 opacity-40 cursor-not-allowed select-none">
                    <span className="font-sans text-[11px] font-semibold text-neutral-text uppercase tracking-wide">LegitScript</span>
                    <span className="font-sans text-[10px] text-neutral-text">Certified — coming soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FDA Disclaimer */}
          <div className="border-t border-neutral-border pt-6 mb-6">
            <button
              onClick={() => setDisclaimerOpen(!disclaimerOpen)}
              className="flex items-center gap-1.5 font-sans text-[13px] text-neutral-text hover:text-cedar transition-colors group"
              aria-expanded={disclaimerOpen}
            >
              <span className="text-cedar font-bold text-[15px] leading-none">*</span>
              <span className="underline decoration-dotted underline-offset-2">Compounded Medications Disclaimer</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${disclaimerOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {disclaimerOpen && (
              <p className="mt-3 font-sans text-[12px] text-neutral-text leading-relaxed max-w-3xl">
                Compounded medications are customized prescriptions prepared by a licensed pharmacist to meet the unique needs of an individual patient. Compounded drugs are not FDA-approved, and the FDA does not verify their safety, effectiveness, or quality prior to dispensing.
              </p>
            )}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-[14px] text-neutral-text">
              © 2026 {config.businessName}. All rights reserved.
            </p>
            <a
              href="/privacy"
              className="font-sans text-[14px] text-neutral-text hover:text-cedar transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
